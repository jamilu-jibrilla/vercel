import useCounter from "./useCounter";

const Hero = () => {
    const { val, increase, decrease, reset, setValue } = useCounter(0)
    return (
        <div className="Hero">
            <div class="jumbotron">
                <div class="containa">
                    <div class="main">
                        <div>
                            <input
                                type="text"
                                placeholder="set value"
                                onChange={setValue}
                                value={val}

                            />
                            <p className="message">click on the above box to update counter directly</p>

                            <div className="btn-cont">
                                <button onClick={increase}>increase</button>
                                <button onClick={decrease}>decrease</button>
                                <button onClick={reset}>reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero