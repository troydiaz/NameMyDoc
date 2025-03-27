const About = () => {
    return (
        <header>
            <div className ="flex justify-evenly space-x-4 py-15">
                <div>
                    <img className="w-160 rounded-lg" src="./troy.jpg">
                    </img>
                </div>
                <div className ="mx-auto px-4 text-left">
                    <div className ="font-bold text-left text-5xl">
                        Hello 🤙 I'm Troy Diaz.
                    </div>
                    <div className ="font-normal py-5">
                        I’m a Computer Science major at Oregon State University. I like to explore new places, the picture on the left is me at Crater Lake, OR!
                    </div>
                    <div className ="font-normal py-5">
                        This project served as a learning exercise for me, as I wanted to learn modern web development languages (TypeScript, TailwindCSS, React.js) as well as sentence transformers.
                    </div>
                    <div className ="font-normal py-5">
                        Follow me on my socials!
                    </div>
                    <div className = "font-normal py-5">
                        My LinkedIn: <a href="www.linkedin.com/in/troykvdiaz">www.linkedin.com/in/troykvdiaz</a> <br></br><br></br>
                        My GitHub: <a href="https://github.com/troydiaz">https://github.com/troydiaz</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default About