import { useRef, useState } from "react"

function Useeeeref() {
    const [time, setTime] = useState(0);
    let timeRef = useRef(null);
    const changeColor = useRef(0);
    const colorChangeUsingUseref = () => {
        changeColor.current.style.backgroundColor = "red";
        changeColor.current.style.color = "white";
        changeColor.current.style.fontSize = "100px";
        console.log(changeColor.current.style);
    }

    const startTimer = () => {
        stopTimer();
        timeRef.current = setInterval(() => {
            console.log("current time ", timeRef.current);
            setTime((prev) => prev + 1);
        }, 1000)

    }

    const stopTimer = () => {
        clearInterval(timeRef.current);
        console.log("stop timer", timeRef.current)
    }

    const resetTimer = () => {
        stopTimer();
        startTimer();
        setTime(0);
    }
    return (
        <>
            <h1 ref={changeColor}>Heading 1</h1>
            <button onClick={colorChangeUsingUseref}>change style of heading using ref</button>
            <hr />
            <h1>stop watch : {time}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default Useeeeref;