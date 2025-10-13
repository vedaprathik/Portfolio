import { CgDarkMode } from "react-icons/cg";
import './styles/toggletheme.css'
function ToogleTheme({switchTheme}){
    return(
        <div className="theme-toggle-wrapper">
            <button onClick={switchTheme} className="theme-toggle-button" aria-label="Dark-Mode-Button">
                <CgDarkMode/>
                <span className="tooltip">Theme</span>
            </button>
        </div>
    );
}
export default ToogleTheme;