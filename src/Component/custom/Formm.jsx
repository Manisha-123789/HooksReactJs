import { useOnlineStatus } from "./useOnlineStatus"

function Formm(){
    const isOnline=useOnlineStatus();
    return(
        <>
        <h1>Internet {isOnline?'Conneted':'not connected'}</h1>
        </>
    )
}

export default Formm;