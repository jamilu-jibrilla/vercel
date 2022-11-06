import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        if(count > 0) {
            throw new Error('App crashed')
        }
    }, [count])

    return (
        <div class="header">
            <div class="containa">
                <ul class="nav">
                    <Link to={'/'} > <li> Custom </li></Link>
                    <Link to={'/reducer'}> <li>Reducer</li></Link>
                    <li onClick={()=> setCount(1)}>Error boundary</li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation