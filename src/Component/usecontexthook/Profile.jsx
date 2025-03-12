import Contact from "./Contact";
import { useContext } from "react";
import { Appcontext, ThemeContext } from "../Appcontext";

function Profile() {
    const { phone, name } = useContext(Appcontext);
    const { theme } = useContext(ThemeContext);

    return (
        console.log(theme),
        <>

            <div style={{
                width: '150', height: '150', backgroundColor: theme === 'light' ? 'beige' : 'black',
                color: theme === 'light' ? 'black' : 'beige' }}>
            <h2>{theme}</h2>
            <h1>Profile</h1>
            <h1>Name : {name}</h1>
            <h1>Phone : {phone}</h1>
        </div >
            <Contact />
        </>
    )
}

export default Profile;