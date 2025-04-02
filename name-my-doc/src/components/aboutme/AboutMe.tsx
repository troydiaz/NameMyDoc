const About = () => {
    return (
        <header>
            <div className ="flex justify-evenly space-x-4 py-15">
                <div>
                    <img className="w-160 rounded-lg" src="/troy.jpg">
                    </img>
                </div>
                <div className ="container sm px-4 text-left">
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
                        {/* Adapted from https://flowbite.com/docs/components/buttons/ tailwindcss button */}
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                         focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="https://www.linkedin.com/in/troy-d-9084251aa/">LinkedIn</a></button>
                        <br>
                        </br>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                         focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="https://github.com/troydiaz">GitHub</a></button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default About