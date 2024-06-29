import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import About from "./About"
import Navigation from "./components/navigation/Navigation"

const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<MainLayout />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteWrapper
