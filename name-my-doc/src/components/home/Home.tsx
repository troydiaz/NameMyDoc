import { Link } from "react-router-dom"
import { gradientButtonClass } from "../styles/classNames"

const Home = () => {
    return (
        <section className="text-center py-24 px-6">
            <h1 className="text-7xl font-bold mb-6">
                Welcome to NameMyDoc
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Automatically rename your scanned documents with AI, right in the browser. Simple, fast, and private.
            </p>
            
            <Link to="/Upload" className={gradientButtonClass}>
                    <span>Let's Get Started</span>
            </Link>
        </section>
    );
}

export default Home