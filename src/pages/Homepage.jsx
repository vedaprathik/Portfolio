import Profile from "../Components/sections/Profile.jsx";
import Projects from "../Components/sections/Projects.jsx";
import Contact from "../Components/sections/Contact.jsx";
import Education from "../Components/sections/Education.jsx";
import Skills from "../Components/sections/Skils.jsx";
import '../Components/styles/homepage.css'
import ToogleTheme from "../Components/ToggleTheme.jsx";
import CodingProfiles from "../Components/sections/CodingProfiles.jsx";
import Particles from "../Components/Particles.jsx";
import { useContext } from "react";
import {AppContext} from "../App.jsx";
import Footer from "../Components/sections/Footer.jsx";
function Homepage(){
    const { theme, switchTheme } = useContext(AppContext);
    return(
        <>
        <Particles/>
        <div className="wrapper">
            <div className="container">
                <ToogleTheme switchTheme={switchTheme}/>
                <Profile/>
                <Projects/>
                <Education/>
                <Skills/>
                <CodingProfiles/>
                <Contact/>
                <Footer theme={theme}/>
            </div>
        </div>
        </>
    )
}
export default Homepage