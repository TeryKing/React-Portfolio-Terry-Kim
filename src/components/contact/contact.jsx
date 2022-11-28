import "./contact.css"
import Email from "../img/newemail.svg"
import Resume from "../img/resume.svg"
import Git from "../img/github.svg"
import LinkedIn from "../img/linkedin.svg"
import MyResume from "../data/portresume.pdf"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
    
    const formRef =useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qges2ui', 'template_59jf72o', formRef.current, 'T_VUN_-U39mHZ3VjL')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title"> Contact Info</h1>
                    <div className="c-info-item">
                        <a className="r-download" href={MyResume} download="portresume.pdf"><img
                        src={Resume}
                        alt=""
                        className="c-icon"
                        /></a>My Resume
                    </div>
                    <div className="c-info-item">
                        <img
                        src={Email}
                        alt=""
                        className="c-icon"
                        />
                        tery_x3@hotmail.com
                    </div>
                    <div className="c-info-item">
                       <a href="https://github.com/TeryKing"><img
                        src={Git}
                        alt=""
                        className="c-icon"
                        />
                        </a>Github Profile
                    </div>
                    <div className="c-info-item">
                       <a href="https://www.linkedin.com/in/terry-kim-0bba051b7/"><img
                        src={LinkedIn}
                        alt=""
                        className="c-icon"
                        />
                        </a>LinkedIn
                    </div>
                </div>
                <div className="c-right">
                    <div className="c-right-desc">
                    Let's talk about your project - challenges.<br/> I look forward to learning more from and about you.
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Your Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Send</button>
                        <br/><br/><div className="e-sent">{done && "Thank you I will get in touch with you as soon as I can."}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact