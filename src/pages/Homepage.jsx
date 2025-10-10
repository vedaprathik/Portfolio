
import Profile from "../Components/sections/Profile.jsx";
import Projects from "../components/sections/Projects.jsx";
import Education from "../Components/sections/Education.jsx";
import Skills from "../Components/sections/Skils.jsx";
import CodingProfiles from "../Components/sections/CodingProfiles.jsx";


import { useContext } from "react";
import {AppContext} from "../App.jsx";
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
                <EducationAndExperience/>
                <Skills/>
                <CodingProfiles/>
            </div>
        </div>
        </>
    )
}
export default Homepage