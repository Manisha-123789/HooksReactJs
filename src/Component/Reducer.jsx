import { useReducer } from "react"

function Reducer() {
    const initialValue = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase':
                return {
                    count: state.count + 1
                }
            case 'decrease':
                return {
                    count: state.count - 1
                }
            case 'input':
                return {
                   count : action.payload
                }

            default:
                return state;
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        console.log(state.count),
        <>
            <h1>Use Reduceer Hook</h1>
            <h1>Initial Value : {state.count}</h1>
            <input type="text" value={state.count} 
            onChange={() => 
            dispatch({ type: 'input', payload:Number(e.target.value) })} />

            <button type="button" onClick={() => dispatch({ type: 'increase' })}>increase</button>
            <button type="button" onClick={() => dispatch({ type: 'decrease' })}>increase</button>
        </>
    )
}

export default Reducer