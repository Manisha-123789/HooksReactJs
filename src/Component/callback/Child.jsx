import React from "react"


const Child = React.memo(
    function Child(props) {
        let result = props.handleClick();
        return (
            console.log("child component re-render"),
            <>
                <h2>call back function result : {result}</h2>
            </>
        )
    }
)
export default Child