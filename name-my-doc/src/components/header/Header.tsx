import {Link} from 'react-router-dom'
import { hoverButtonClass } from '../styles/classNames'

const Header = () => {
    return (
        <header className ="text-black font-inter flex flex-row justify-evenly items-center">
            <div className="text-xl font-bold">
                <Link to="/Home">
                    NameMyDoc
                </Link>
            </div>

            <nav className="flex space-x-4 ml-auto">
                <Link to="/Home" className="relative group">
                    <span>Home</span>
                    <span className={hoverButtonClass}></span>
                </Link>

                <Link to="/Upload" className="relative group">
                    <span>Upload</span>
                    <span className={hoverButtonClass}></span>
                </Link>

                <Link to="/Instructions" className="relative group">
                    <span>Instructions</span>
                    <span className={hoverButtonClass}></span>
                </Link>
                <Link to="/Documentation" className="relative group">
                    <span>Documentation</span>
                    <span className={hoverButtonClass}></span>
                </Link>
                <Link to="/AboutMe" className="relative group">
                    <span>About Me</span>
                    <span className={hoverButtonClass}></span>
                </Link>
            </nav>
        </header>
    );
}

export default Header