
import Profile from "../Components/sections/profile";
import {AppContext} from "../App";
function Homepage(){
    return(
        <>
        <Particles/>
        <div className="wrapper">
            <div className="container">
                <ToogleTheme switchTheme={switchTheme}/>
                <Profile/>
            </div>
        </div>
        </>
    )
}
export default Homepage