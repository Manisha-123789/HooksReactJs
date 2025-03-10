import { useEffect, useState } from "react"


function Effect(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(true);
    const [width, setWidth] = useState(window.screen.width)
    // const [city, setCity] = useState('');
    // useEffect(() => {
    //     alert("This will run on every render")
    // })

    // useEffect(() => {
    //     alert("This will run on first render only")
    // }, [])

    // useEffect(() => {
    //     alert('this will run when the name value update')
    // }, [name])

    // useEffect(() => {
    //     alert('this will run when name or count value update');
    // }, [name, count])

    const setWidthOfScreen = () =>{
        console.log("resize function called");
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", setWidthOfScreen);
        return ()=>{
            console.log("cleanup function called");
            window.removeEventListener("resize", setWidthOfScreen);
        }
    },)

    // useEffect(()=>{
    // alert('this will run when city will change only')
    // }, [city])

    const handleNameValue = () => {
        name ? setName(false) : setName(true)
    }
    return (
        <>
            <h1>Use Effect</h1>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Name : {name ? "useEffect Hook" : "UseEffect with single variable dependencies"}</h2>
            <button onClick={handleNameValue}>Click</button>
            <hr />
            <h1>Screen Width : {width} </h1>
            <hr />
            {/* <h1>City From Props : {props.city}</h1>
            <button onClick={()=>setCity('Bangaluru')}>Change City</button> */}
        </>
    )
}

export default Effect