import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="home page">
                    <div className="errors" style={{ background: '#021323', color: 'white', padding: '0rem 3rem', overflow: 'hidden' }} >
                        <h1 style={{ margin: '0px', fontSize: '2.8rem' }}>Oops!</h1>
                        <p style={{ margin: '10px 0px', fontSize: '1.8rem' }}>An error has occured</p>
                        <p style={{ fontSize: '1.3srem' }}>App crashed</p>
                        <button onClick={()=> location.reload()} style={{ cursor: 'pointer', color: 'white', borderRadius: '10px', padding: '7px 20px', fontSize: '13px', background: 'inherit', border: '1px solid gray' }}> Restart App</button>
                    </div>
                </div>
            )
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundry