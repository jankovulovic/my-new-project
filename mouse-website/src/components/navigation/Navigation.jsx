import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="flex flex-row gap-5 text-base border-2 p-3">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navigation
