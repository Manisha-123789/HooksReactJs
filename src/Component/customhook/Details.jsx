import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

function Details() {
    const [value, setValue] = useLocalStorage('username', '')
    const [temp, setTemp] = useState('');
    return (
        <>
            <input type="text" value={value} onChange={(e) =>setValue(e.target.value)} />
        </>
    )
}

export default Details