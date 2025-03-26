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
                <Link to="/Instructions">
                    Upload
                </Link>
                <Link to="/Instructions">
                    Instructions
                </Link>
                <Link to="/Documentation">
                    Documentation
                </Link>
                <Link to="/">
                    About Me
                </Link>
            </nav>
        </header>
    );
}

export default Header