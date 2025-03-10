import { useState } from "react";

function Usestate() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const [person, setPerson] = useState({
        Name: "Manisha",
        Age: 26,
        Education: "MCA",
        City: "Indore"
    })

    const [vehicle, setVehicle] = useState({
        name: "Activa",
        color: ["brown", "Black", "Gray", "White"],
        Engine: {
            type: "4 Stroke",
            Displacement: 109,
            Fuel_System: "PGM"
        }
    })

    const [fruits, setFruits] = useState(["Orange", "Mango", "Avacado", "Kivi"]);
    const [userFruit, setUserFruit] = useState('');

    const [nestedArray, setNestedArray] = useState([
        ["red", "green", "yellow"],
        ["papaya", "Kivi"],
        ["Sunflower", "Rose", "Jasmine"]
    ]);

    console.log("33", nestedArray[1][0]);

    const handleChange = () => {
        console.log('button clicked');
        setPerson({
            ...person,
            Name: "Yuvika"
        })
    }

    const addEngine = () => {
        console.log("button clicked");
        setVehicle({
            ...vehicle,
            Engine: {
                ...vehicle.Engine,
                ...vehicle.Engine,
                type: "New will be added soon"
            }
        })
    }

    const changeVehicleColor = () => {
        console.log("42 button is clicked")
        setVehicle((prev => ({
            ...prev,
            color: [...prev.color, "Red"]
        })))
    }

    const addUserFruit = (e) => {
        console.log(e.target.value);
        setUserFruit(e.target.value);
    }

    const addYourFavFruits = () => {
        console.log(userFruit);
        setFruits([...fruits, userFruit])
    }
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <hr />
            <h1>Name : {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <hr />
            <h1>Person Details</h1>
            <h2>Person Name : {person.Name} Age : {person.Age} Education : {person.Education} City : {person.City}</h2>
            <button onClick={handleChange}>Change Name</button>
            <hr />
            <h1>Activa Details</h1>
            <h2>Model : {vehicle.name}</h2>
            <h2>Color : </h2>
            <ul style={{ fontSize: 20 }}>
                {vehicle.color.map((col, i) =>
                    (<li key={i}>{col}</li>))}</ul>
            <button onClick={changeVehicleColor}>Change Color</button>
            <h2>Engine Details : Type : {vehicle.Engine.type}</h2>
            <h2>Fuel : {vehicle.Engine.Fuel_System}</h2>
            <button onClick={addEngine} >Add Engine </button>
            <hr />
            <h1>Fruits</h1>
            <ol>{fruits.map((fruit, i) => (
                <li key={i} >{fruit}</li>
            ))}
            </ol>
            <input type="text" onChange={(e) => addUserFruit(e)} />
            <button onClick={addYourFavFruits} >Add Fruits</button>
            <hr />
            <ul>{nestedArray.map((value, index)=>(
                console.log(140, value),
                value.map((arr, i)=>(
                    console.log(106, arr, i),
                    <li>{arr}</li>
                ))
            ))}</ul>
        </>
    )
}
export default Usestate;