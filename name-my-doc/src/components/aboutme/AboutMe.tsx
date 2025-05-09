import clsx from "clsx";
import { gradientButtonClass } from '../styles/classNames'

const About = () => {
	return (
		<div className="py-15 bg-white flex items-center justify-center">
			<div className="w-full max-w-4xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
					<div>
						<img
							className="w-72 md:w-80 rounded-2xl"
							src="/troy.webp"
							alt="Troy Diaz"
						/>
					</div>

					<div className="max-w-md text-left">
						<h1 className="font-bold text-4xl md:text-5xl mb-6">
							Hello 🤙 I'm Troy Diaz.
						</h1>
						<p className="mb-5">
							I’m a Computer Science major at Oregon State University. I like to explore new places, the picture on the left is me at Crater Lake, OR!
						</p>
						<p className="mb-5">
							This project served as a learning exercise for me, as I wanted to learn modern web development languages (TypeScript, TailwindCSS, React.js) as well as sentence transformers.
						</p>
						<p className="mb-5">Follow me on my socials!</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a href="https://www.linkedin.com/in/troy-d-9084251aa/">
								<button className={clsx(gradientButtonClass)}>
									LinkedIn
								</button>
							</a>
							<a href="https://github.com/troydiaz">
								<button className={clsx(gradientButtonClass)}>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
