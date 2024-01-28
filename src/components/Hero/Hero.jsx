import './hero.css'
import MyPicture from '../../assets/Hero/MyPhoto.jpg'
import Typewriter from '../Typewriter'
import Resume from '../../assets/Rojo_JohnChristian_Resume.pdf'

function Hero() {

    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="imageContainer">
                        <img className='myPicture' src={MyPicture} alt="" />
                    </div>
                    <div className="sectionHead">
                        <h1>Hello, I&apos;m John Christian Rojo an aspiring <Typewriter text="Fullstack Web Developer" delay={100} />
                        </h1>
                        <a className='mainButton' href={Resume} download>Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero