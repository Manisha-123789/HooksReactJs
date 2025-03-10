import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('passing props to check it is re-render the child component or not')
    return (
        console.log('Parent component re-render'),
        <>
            <h1>This is parent component</h1>
            <h1>Parent Component Counter : {count}</h1>
            <button onClick={()=>setCount(count+1)} >Count++</button>
            <Child value={value} />
        </>
    )
}

export default Parent;