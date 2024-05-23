import './contact.css'
import Facebook from '../../assets/facebook.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Phone from '../../assets/phone.svg'
import Mail from '../../assets/mail.svg'

function Contact() {
    return (
        <section className='contact'>
            <div className="container">
                <div className="row">
                    <div className="cardLeft">
                        <h2>Get in Touch</h2>
                        <div className="socialsImages">
                            <a href="https://www.facebook.com/10Chinchan"><img className='socialsImage facebook' src={Facebook} alt="Facebook Icon" /></a>
                            <a href="https://www.linkedin.com/in/john-christian-rojo-005b301ab"><img className='socialsImage linkedIn' src={LinkedIn} alt="LinkedIn Icon" /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img className='socialsImage' src={Mail} alt="Email Icon" />
                        <a className='stretchedLink' href="mailto:jchristianrojo@gmail.com">jchristianrojo@gmail.com</a>
                    </div>
                    <div className="card">
                        <img className='socialsImage' src={Phone} alt="Phone Icon" />
                        <a className='stretchedLink' href="tel:+09958497758">09958497758</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact