import { hoverButtonClass } from "../styles/classNames";

const Documentation = () => {
	return (
		<header className="flex flex-col gap-5 text-left py-15">
			<div className="text-xl font-semibold mb-2">
				Repository <br />
				<span className="justify-between text-base font-normal mt-4 text-left">
					The repository for this project can be found here:{" "}
					<span className="relative group">
						<a
							href="https://github.com/troydiaz/NameMyDoc"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/troydiaz/NameMyDoc
						</a>
						<span className={hoverButtonClass}></span>
					</span>
				</span>
			</div>

			<div className="text-xl font-semibold mb-2">
				Pre-Trained Model and Dataset <br />
				<span className="text-base font-normal mt-4 text-left">
					The model I'm using is all-MiniLM-L12-v2 that is trained on Habib Gultekin's dataset BBC News Archive.
					<br />
					More information can be found below:
					<br />
					Sentence Transformers:{" "}
					<span className="relative group">
						<a
							href="https://www.sbert.net/docs/sentence_transformer/pretrained_models.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://www.sbert.net/docs/sentence_transformer/pretrained_models.html
						</a>
						<span className={hoverButtonClass}></span>
					</span>
					<br />
					Kaggle Dataset:{" "}
					<span className="relative group">
						<a
							href="https://www.kaggle.com/datasets/hgultekin/bbcnewsarchive"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://www.kaggle.com/datasets/hgultekin/bbcnewsarchive
						</a>
						<span className={hoverButtonClass}></span>
					</span>
				</span>
			</div>

			<div className="text-xl font-semibold mb-2">
				Brief Justification <br />
				<span className="text-base font-normal mt-4 text-left">
					all-MiniLM-L12-v2 is a pretrained Sentence-BERT model optimized for generating dense semantic embeddings of text. I trained this model on the BBC News Archive dataset since it contains high-quality text similar to official documents, making it useful for fine-tuning a classifier on embedding-based labeling.
				</span>
			</div>

			<div className="text-xl font-semibold mb-2">
				Do You Save My Information? <br />
				<span className="text-base font-normal mt-4 text-left">
					<span className="font-bold">No!</span> NameMyDoc is a static web app. There is no storage of user information. All document processing happens directly in your browser using ONNX Runtime Web.
				</span>
			</div>

			<div className="text-xl font-semibold mb-2">
				Motivation Behind NameMyDoc <br />
				<span className="justify-between text-base font-normal mt-4 text-left">
					As governments and companies transition to electronic records, there's a massive backlog of physical documents that need to be digitized and stored in databases. The challenge is that renaming each document manually is time-consuming, especially when dealing with entire rooms filled with paper.
					This web app helps automate the renaming process. Since many of these documents are already organized in labeled binders, we can use that structure to generate meaningful file names.
					I hope that this web app promotes efficiency in the workplace.
				</span>
			</div>
		</header>
	);
};

export default Documentation;
