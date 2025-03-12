import { useOnlineStatus } from "./useOnlineStatus"

function Statusbar() {
    const isOnline = useOnlineStatus();
    return (
        <>
            <h1>This is Header</h1>
            <p>{isOnline ? '' : 'Internet not connected'}</p>
            <button disabled={isOnline ? false : true}>{isOnline?'Save Progess':'connected...'}</button>
        </>
    )
}

export default Statusbar;