import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import "./Users.css"
const Users = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const [page, setPage] = useState(1)
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=54')
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])


    const total = data.length
    const per_page = 3
    const skip = page * per_page - per_page
    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / per_page) * per_page;
        return new Array(per_page).fill().map((_, idx) => start + idx + 1);
    }
    // 1 x 3 - 3 = 0
    // 2 x 3 - 3 = 3
    // 3 x 3 - 3 = 6 
    if (loading) return <div style={{ textAlign: 'center', fontSize: '2rem', display: 'flex', alignItems:'center', justifyContent:'center' , height: '100vh', background:'#021323', color:'white', fontWeight: 'bold' }}>Loading...</div>

    if (error) return <div style={{ textAlign: 'center', fontSize: '2rem', display: 'flex', alignItems:'center',  justifyContent:'center' , height: '100vh', background:'#021323', color:'white' }}>{error.message}</div>

    return (
        <div className="Users">
            <div className="UserCard">
                {data.slice(skip, skip + per_page).map((item, index) => {
                    return <UserCard key={index} name={item.name} pic={item.picture.medium} />
                })}
            </div>

            <div className="pagination">
                <span>
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"
                        width={'25px'}
                        className={`${page <= 1 ? 'disable' : ''}`}
                        onClick={() => setPage(prev => prev - 1)}
                    />
                </span>
                {
                    getPaginationGroup().map(item => (
                        <button
                            className={`${item == page ? 'active' : null} `}
                            onClick={() => setPage(+item)}
                        >
                            {item}
                        </button>
                    ))
                }

                <span>
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-256.png"
                        width={'25px'}
                        className={`${page >= Math.ceil(total / per_page) ? 'disable' : ''}`}
                        onClick={() => setPage(prev => prev + 1)}
                        next
                    />
                </span>

            </div>

        </div>
    )
}

export default Users