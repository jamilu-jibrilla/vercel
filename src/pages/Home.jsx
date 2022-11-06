import { Outlet } from "react-router-dom"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import "./Home.css"
const Home = () => {
    return (
        <div className="Home">
            <Navigation/>
            <Outlet />        
        </div>
    )
}

export default Home