import './about.css';
import HTML from '../../assets/About/html5.svg';
import CSS from '../../assets/About/css3.svg';
import Javascript from '../../assets/About/javascript.svg';
import PHP from '../../assets/About/php.svg';
import Wordpress from '../../assets/About/wordpress.svg';
import Shopify from '../../assets/About/shopify.svg';
import Squarespace from '../../assets/About/squarespace.svg';
import WooCommerce from '../../assets/About/woocommerce.svg';
import WPBakery from '../../assets/About/wpbakery.png';
import Elementor from '../../assets/About/elementor.svg';
import ReactImage from '../../assets/About/react.svg';

const skillsData = [
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'JavaScript', image: Javascript },
    { name: 'PHP', image: PHP },
    { name: 'Wordpress', image: Wordpress },
    { name: 'Shopify', image: Shopify },
    { name: 'Squarespace', image: Squarespace },
    { name: 'WooCommerce', image: WooCommerce },
    { name: 'WP Bakery', image: WPBakery },
    { name: 'Elementor', image: Elementor },
    { name: 'React', image: ReactImage },
];

export default function About() {
    return (
<section className="about" id="about">
    <div className="container">
        <div className="sectionHead">
        <h2>About Me</h2>
        
        <p>
            I am a passionate <strong>Software Developer</strong> with over a year of experience in web development, specializing in creating <strong>user-friendly</strong> and <strong>visually engaging web solutions</strong>. Throughout my career, I have collaborated with <strong>UI/UX designers</strong> to develop <strong>scalable applications</strong>, enhance website performance, and build <strong>custom WordPress themes and plugins</strong>. My expertise spans various platforms, including <strong>WordPress</strong>, <strong>Shopify</strong>, and <strong>Squarespace</strong>, with a strong emphasis on <strong>SEO optimization</strong> and <strong>responsive design</strong>. I have also developed <strong>WordPress plugins</strong> to deliver tailored functionality. My work primarily focuses on <strong>creating WordPress themes from scratch</strong>, ensuring they are both user-friendly and aligned with <strong>modern frameworks</strong> and <strong>advanced technologies</strong> to elevate user experiences.
        </p>
        <p>
            I earned a <strong>Bachelor of Science degree in Computer Engineering</strong> in 2022, balancing my academic journey with <strong>six years as a dedicated student-athlete</strong> and <strong>three years as a student leader</strong>. Beyond my professional pursuits, I enjoy watching <strong>series and movies</strong> and playing <strong>online games</strong>, which fuel my creativity and problem-solving mindset.
        </p>

        </div>
        <h3>My Skills</h3>
        <div className="row slide-in-top">
            {skillsData.map((skill, index) => (
                <div className="card" key={index}>
                    <img className="skill" src={skill.image} alt={skill.name} />
                    <h4>{skill.name}</h4>
                </div>
            ))}
        </div>
    </div>
</section>

    );
}
