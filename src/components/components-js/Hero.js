import '../components-css/Hero.css'
import ReactImage from '../images/hero-img.svg'
function Hero(){
    return(
        <div id="hero">
            <div className="hero-img">
                <img src={ReactImage}></img>
            </div>
            <div className="hero-h1">
                <h1>Welcome to my portfolio made with React.</h1>
            </div>
        </div>
    )
}

export default Hero;