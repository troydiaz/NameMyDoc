import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className ="text-black font-inter flex flex-row justify-evenly items-center">
            <div className="text-xl font-bold">
                <Link to="/">
                    NameMyDoc
                </Link>
            </div>

            <nav className="flex space-x-4 ml-auto">
                {/* Adapted from https://pagedone.io/docs/hover-effect hovering line effect */}
                <Link to="/Instructions">
                    <span>Upload</span>
                    {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span> */}
                </Link>

                <Link to="/Instructions">
                    Instructions
                </Link>
                <Link to="/Documentation">
                    Documentation
                </Link>
                <Link to="/AboutMe">
                    About Me
                </Link>
            </nav>
        </header>
    );
}

export default Header