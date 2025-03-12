import React from "react";
const Child=React.memo(function Child(props) {
    return (
        console.log('child component re-render'),
        <>
            <h1>This is child component</h1>
            <h2>This data come from props : {props.value}</h2>
        </>
    )
})

export default Child;