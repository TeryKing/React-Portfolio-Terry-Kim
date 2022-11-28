import "./intro.css"
import Me from "../img/mes.png"
const Intro = () => {
    return (
        <div className="i">
            
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello World My Name Is</h2>
                    <h2 className="i-name">Terry Kim</h2>
                    <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Mechanical Engineer</div>
                        <div className="i-title-item">Full Stacks Developer</div>
                        <div className="i-title-item">Home Cook</div>
                        <div className="i-title-item">Table Top Gamer</div>
                        <div className="i-title-item">Cat Father</div>
                    </div>
                    </div>
                    <div className="i-desc">
                    I am always interested in learning new things!<br/> 
                    Whether it's new languages to new board games!<br/>
                    I enjoy doing new things and learning new things especially when it comes to programming!
                    </div>
                    </div>
            </div>
            <div className="i-right">
                <div className="i-bg"><img src={Me} alt="me" className="i-img"/></div>
                {/* <img src={Me} alt="me" className="i-img"/> */}
            </div>
        </div>
    )
};

export default Intro