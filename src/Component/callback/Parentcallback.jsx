import { useCallback, useState } from "react";
import Child from "./Child";


function Parentcallback() {
    const [count, setCounter] = useState(0);


    //it will freeze the function // function will call only one time

    // const handleClick = useCallback(() =>{
    //     return "Welcome to our page";
    // },[]) 

    // it will re-render when the dependecy will get change

    const handleClick = useCallback(() => {
        return "Welcome to our page";
    }, [count])




    return (
        <>
            <h1>Use Call back hook freeze the function, depending upon the dependencies </h1>
            <h1>Counter Value : {count}</h1>
            <button onClick={() => setCounter(count + 1)} >Count++</button>
            <Child handleClick={handleClick} />
        </>
    )
}

export default Parentcallback;