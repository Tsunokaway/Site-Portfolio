import '../components-css/Contact.css'
import ContactImg from '../images/contact.svg'
function Contact(){
    return(
        <div id="contact">
            <div className='contact-card'>
                <div className='content-card'>
                    <h1>Contact me</h1>
                    <p>Let's work together!</p> 
                    <div class="contact-form">
                        <form>
                            <label>Name:</label><br></br>
                            <input></input><br></br>
                            <label>Email:</label><br></br>
                            <input></input><br></br>
                            <button type='submit'>SEND</button>
                        </form>
                    </div>
                </div>
                <div className='img-card'>
                    <img src={ContactImg}></img>
                </div>
            </div>
        </div>
    )
}
export default Contact;