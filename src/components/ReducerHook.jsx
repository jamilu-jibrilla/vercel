import { useReducer, useEffect } from "react";

function ReducerHook() {

    const ALLACTIONS = {
        INCREASE: "increase",
        DECREASE: "decrease",
        RESET: "reset",
        SET_VALUE: "setValue",
    };
    
    const setValue = (value, count) => {
        let currentVal = +value;
        if(isNaN(currentVal)) return
        return currentVal;
    }

    const reducer = (count, action) => {
        switch (action.type) {
            case ALLACTIONS.SET_VALUE:
                if(action.payload == "") count = 0;
                return setValue(action.payload, count);

            case ALLACTIONS.INCREASE:
                return count+1;
            case ALLACTIONS.DECREASE:
                return count-1;
            case ALLACTIONS.RESET:
                return 0;
            default:
                return count;
        }
    }

    const handleChange=(e)=> {
        dispatch({
            type: ALLACTIONS.SET_VALUE,
            payload: e.target.value,
            elem: e.target,
        })
    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="jumbotron reducer">
            <div className="cont">
                <div>
                    <input
                        type="number"
                        placeholder="set value"
                        onChange={handleChange}
                        value={count}
                    />
                    <p className="message">click on the above box to update counter directly</p>
                    <div className="btn-cont">
                        <button
                            onClick={() => {
                                dispatch({ type: ALLACTIONS.INCREASE });
                            }}
                        >
                            increase
                        </button>
                        <button
                            onClick={() => {
                                if(count > 1) dispatch({ type: ALLACTIONS.DECREASE });
                            }}
                        >
                            decrease
                        </button>
                        <button
                            onClick={() => {
                                dispatch({ type: ALLACTIONS.RESET });
                            }}
                        >
                            reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReducerHook;
