import { useEffect, useLayoutEffect, useState } from "react";
//USE LAYOUT EFFECT WORK EXACT LIKE USE EFFECT BUT USE LAYOUT EFFECT IS SYNCHRONOUS MEANS IT BLOCKS THE CODE WHILE USE EFFECT DOES NOT BLOCK THE CODE
//AND IT RENDER BEFORE THE DOM PRINT ALL THE ELEMENT ON THE SCREEN
//WHILE USE EFFECT OPPOSITE OF THIS
function Layout() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect Called");
    }, [count])
    useLayoutEffect(() => {
        console.log("useLayout Effect is Called");
    }, [count])
    return (
        <>
            <h1>Use Layout Effect Hook</h1>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count++</button>
        </>
    )
}
export default Layout;