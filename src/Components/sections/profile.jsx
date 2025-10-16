import info from "../../Data/info.js";
import '../styles/profile.css'
import { IoIosArrowForward} from "react-icons/io"
import useScrollReveal from "./useScrollReveal.js"

function Profile(){
    useScrollReveal();
    return(
        <section id="profile" className="section-animate">
            <div className="self-center">
                <div className="flex-wrap-custom">
                    <div className="text-block">
                        <h2>{info.main.role}</h2>
                        <h2>{info.main.name}</h2>
                        <p>{info.main.description}</p>
                        <div className="buttons">
                            <a className="projectandgithub" href="#projects">Projects</a>
                            <a className="projectandgithub" href={info.socials.github}>Github</a>
                            <a href="#contact"> <span>Contact</span> <IoIosArrowForward/> </a>
                        </div>
                    </div>
                    <div className="image-block">
                        <img src={info.main.photo} alt="profile"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile