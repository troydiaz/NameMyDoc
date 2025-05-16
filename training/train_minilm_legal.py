"""
Fine-tune all-MiniLM-L12-v2 for document title similarity using legal case data.
Goal: Learn semantic similarity between OCR-like legal case text and its case title.
Logs each training run with date and precision@1 in CSV format.

Load dataset here:
    https://www.kaggle.com/datasets/amohankumar/legal-text-classification-dataset
Dependencies:
    pip install datasets sentence-transformers torch
"""

import os
import random
import csv
import torch
from datetime import datetime

from datasets import load_dataset
from torch.utils.data import DataLoader
from sentence_transformers import SentenceTransformer, InputExample, losses, evaluation
from sentence_transformers.evaluation import EarlyStoppingCallback

def load_and_split(data_path: str, val_ratio: float = 0.1, max_examples: int = None, seed: int = 42):
    """
    Loads and preprocesses the legal text classification dataset from CSV.
    Returns a training set and a validation set of InputExample objects.

    :param data_path: Path to the Kaggle CSV file.
    :param val_ratio: Fraction of data to use as validation set.
    :param max_examples: Optional cap on total examples used (for faster training).
    :param seed: Random seed for reproducibility.
    """
    ds = load_dataset("csv", data_files={"data": data_path})["data"]
    ds = ds.shuffle(seed=seed)

    # Truncate dataset if desired
    if max_examples:
        ds = ds.select(list(range(max_examples)))

    # Build semantic similarity pairs: (case_text, case_title)
    examples = [
        InputExample(texts=[row["case_text"].strip(), row["case_title"].strip()])
        for row in ds
        if row["case_text"] and row["case_title"]
    ]

    # Shuffle and split into train/val
    random.seed(seed)
    random.shuffle(examples)
    split_idx = int(len(examples) * (1 - val_ratio))
    return examples[:split_idx], examples[split_idx:]


def evaluate_model(model: SentenceTransformer, val_examples: list, batch_size: int = 16):
    """
    Compute precision@1 for validation set using IR retrieval evaluation.
    Requires corpus and queries to be dictionaries with string keys.
    """
    queries = {str(i): ex.texts[0] for i, ex in enumerate(val_examples)}
    corpus = {str(i): ex.texts[1] for i, ex in enumerate(val_examples)}
    relevant = {str(i): [str(i)] for i in range(len(val_examples))}

    evaluator = evaluation.InformationRetrievalEvaluator(
        queries=queries,
        corpus=corpus,
        relevant_docs=relevant,
        name="val_eval",
        batch_size=batch_size,
        show_progress_bar=False
    )
    metrics = evaluator(model)
    return metrics.get("precision@1", 0.0), metrics



def main():
    print("CUDA Available:", torch.cuda.is_available())
    print("CUDA Device Name:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "N/A")
    # ======= Configurable Parameters =======
    DATA_PATH = r"C:\Users\troyk\OneDrive\Desktop\dataset\legal_text_classification.csv"
    OUTPUT_DIR = "fine_tuned_minilm_legal"
    LOG_FILE = "training_log.csv"

    BATCH_SIZE = 16
    EPOCHS = 5
    WARMUP_STEPS = 100
    EVAL_STEPS = 1000
    PATIENCE = 2
    DELTA = 0.0
    MAX_EXAMPLES = 20000
    VAL_RATIO = 0.1
    SEED = 42

    # ======= Load and split data =======
    train_examples, val_examples = load_and_split(
        data_path=DATA_PATH,
        val_ratio=VAL_RATIO,
        max_examples=MAX_EXAMPLES,
        seed=SEED
    )
    train_loader = DataLoader(train_examples, shuffle=True, batch_size=BATCH_SIZE)

    # ======= Load base model and loss =======
    model = SentenceTransformer("sentence-transformers/all-MiniLM-L12-v2")
    train_loss = losses.CosineSimilarityLoss(model)

    # ======= Initial Evaluation (optional) =======
    initial_top1, _ = evaluate_model(model, val_examples)
    print(f"Initial precision@1: {initial_top1:.4f}")

    # ======= Setup evaluator for validation during training =======
    val_queries = {str(i): ex.texts[0] for i, ex in enumerate(val_examples)}
    val_corpus = {str(i): ex.texts[1] for i, ex in enumerate(val_examples)}
    val_relevant = {str(i): [str(i)] for i in range(len(val_examples))}

    evaluator = evaluation.InformationRetrievalEvaluator(
        queries=val_queries,
        corpus=val_corpus,
        relevant_docs=val_relevant,
        name="val_during_train",
        batch_size=BATCH_SIZE,
        show_progress_bar=True
    )

    callbacks = [EarlyStoppingCallback(evaluator=evaluator, patience=PATIENCE, delta=DELTA)]

    # ======= Begin training =======
    model.fit(
        train_objectives=[(train_loader, train_loss)],
        evaluator=evaluator,
        epochs=EPOCHS,
        warmup_steps=WARMUP_STEPS,
        evaluation_steps=EVAL_STEPS,
        output_path=OUTPUT_DIR,
        save_best_model=True,
        use_amp=True,
        callback=callbacks
    )


    # ======= Final Evaluation =======
    final_top1, final_metrics = evaluate_model(model, val_examples)
    print(f"Final precision@1: {final_top1:.4f}")
    print("Full metrics:", final_metrics)

    # ======= Log results =======
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
    log_exists = os.path.isfile(LOG_FILE)
    with open(LOG_FILE, mode="a", newline="") as f:
        writer = csv.writer(f)
        if not log_exists:
            writer.writerow(["date", "precision@1"])
        writer.writerow([datetime.now().isoformat(), round(final_top1, 4)])
    print(f"Logged results to {LOG_FILE}")


if __name__ == "__main__":
    main()
