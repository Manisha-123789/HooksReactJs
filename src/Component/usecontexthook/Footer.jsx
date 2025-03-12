import { useContext } from "react";
import { Appcontext } from "../Appcontext";

function Footer(){
    const {phone} = useContext(Appcontext)
    return(
        <>
        <h1>Footer</h1>
        <h2>Phone : {phone}</h2>
        </>
    )
}

export default Footer;