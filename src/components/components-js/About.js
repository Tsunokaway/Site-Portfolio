import '../components-css/About.css'
import AboutImg from '../images/about.svg'
import Python from '../images/python.svg'
import SQL from '../images/sqlite.svg'
import Pbi from '../images/powerbi.svg'
import Excel from '../images/excel-about.svg'
import Colab from '../images/colab.svg'


function About(){
    return(
        <div id="about">
            <div className="about-img">
                <img src={AboutImg}></img>
            </div>
            <div className="about-content">
                <h1>Hi, I'm Yasmin.</h1>
                <p>I am currently focused on developing my skills in Python, SQL, statistics, and analytical tools, while also exploring practical projects that connect technology to the real world.
I believe technology has the power to change lives — and I want to be part of that transformation.</p>
                <div className='about-li'>
                    <h3>- Knowledge:</h3>
                    <ul>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>PowerBI</li>
                        <li>Excel</li>
                        <li>Google Colab</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default About;