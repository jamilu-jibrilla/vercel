import { useNavigate } from "react-router-dom"

const Page404 = () => {
    const navigate = useNavigate()
    return (
        <div className="errors" style={{ background:'#021323', color: 'white', padding:'0rem 3rem', overflow: 'hidden'}} >
            <h1 style={{margin: '0px', fontSize: '2.8rem'}}>Oops!</h1>
            <p style={{margin: '10px 0px', fontSize: '1.8rem'}}>We can't find that page</p>
            <p style={{fontSize: '1.3srem'}}>Error code 404</p>
            <button onClick={()=>navigate('/')} style={{cursor: 'pointer', color:'white', borderRadius: '10px', padding:'7px 20px', fontSize:'13px', background:'inherit', border:'1px solid gray'}}>GO HOME</button>
        </div>
    )
}

export default Page404