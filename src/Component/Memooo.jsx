import { useMemo, useState } from "react";

function Memooo() {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);

    const cubeNum = () => {
        console.log("cube function called");
        return Math.pow(number, 3)
    }

    let result = useMemo(() => cubeNum(number), [number])

    return (
        <>
            <h1>Usememo Hook</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter++</button>
            <hr />
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h1>Cube of number : {result}</h1>
        </>
    )
}

export default Memooo;