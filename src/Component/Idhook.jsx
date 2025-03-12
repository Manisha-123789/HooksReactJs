import { useId } from "react"

function Idhook() {
    for (let i = 0; i <= 100; i++) {
        console.log(i, useId())
        console.log(typeof useId())
    }
    return (
        <>
        </>
    )
}

export default Idhook;