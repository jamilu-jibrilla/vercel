import { useState } from 'react';

function useCounter( init = 0) {
    
    const [val, setVal] = useState(init)
    
    const increase= () => {
        setVal(prev => prev + 1);
    }
    
    const decrease = () =>{
        if(val > 1) setVal(prev => prev - 1);
    }
    
    const reset=()=> {
        setVal(0);
    }
    
    const setValue = (e) => {
        let currentVal = +e.target.value;
        if(isNaN(currentVal)) return
            setVal(currentVal);
    }

  return {
     val,
     increase, 
     decrease, 
     reset, 
     setValue
    }
}

export default useCounter