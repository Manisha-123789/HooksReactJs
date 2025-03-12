import { useContext } from "react";
import { ThemeContext } from "../Appcontext";

function Main() {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    // theme ? setTheme('light'):setTheme('dark')
    return (
        <>
            <div>
                <h1>This is main page</h1>
                <h1>{theme}</h1>
                <button onClick={toggleTheme}>Change Theme</button>
            </div>
        </>
    );
}

export default Main;