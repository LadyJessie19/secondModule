import './Body.css'
import AboutMe from './AboutMe'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const Body = () => {
    return(
    <div className="bodyInfo">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
    </div>
    )
}

export default Body