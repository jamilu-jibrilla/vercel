import { Outlet } from "react-router-dom"
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