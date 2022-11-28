import "./about.css"
import Me from "../img/mes.png"

const About = () => {
return (
    
    <div className="a">
        <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
                <img 
                src={Me}
                alt=""
                className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <div className="a-intro">A brief introduction about me.</div>
            <div className="a-desc">Born in Korea and currently in Houston. 
            <br/>Mechanical Engineering graduate at University of Houston.
            <br/> Growing up always experiencing technology and computer, my interest for computers and machinery in general was always piqued.
            <br/>As a mechnical engineer, I have onhand experience with design and how things work. I pursued coding to expand my knowledge of how things are programmed for specific goals.
            <br/>Having a engineering background helps me understand both the physical aspect of how technology works and the programming background helps me understand the internal aspect of how technology works. 
            <br/>In terms of my hobbies, I tend to be interested in strategy and teamwork related hobbies, such as table top games.
            <br/>I bring positive vibes to the environment, while maintaining maximum efficiency.
            <br/>Having these types of hobbies helps me expand and apply on how I visualize and approach certain tasks during programming and engineering.
            <br/> I bootcamped with <a className="a-link" href="https://bootcamp.pe.gatech.edu/">Georgia Tech Coding Bootcamp</a>  building projects and learning the <span className="skills-bold">Skills shown below.</span>

            </div>
            <div className="a-skills-m"> Skills</div>
            <div className="a-skills">
                <div className="a-skills-wrapper">
                <div className="a-skills-skill">JavaScript</div>
                <div className="a-skills-skill">Solidworks</div>
                <div className="a-skills-skill">AUTOCAD</div>
                <div className="a-skills-skill">React</div>
                <div className="a-skills-skill">Node JS</div>
                <div className="a-skills-skill">SQL</div>
                <div className="a-skills-skill">Mongo</div>
                <div className="a-skills-skill">CSS</div>
                <div className="a-skills-skill">HTML</div>
                </div>
                              
            </div>
        </div>
    </div>
    
)
};

export default About