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
                I am a passionate Software Developer with over a year of experience in web development. My expertise lies in creating user-friendly and visually engaging web solutions using modern frameworks and technologies. I earned my Bachelor of Science degree in Computer Engineering in 2022 and have since honed my skills across various roles in the tech industry.
            </p>
            <p>
                My professional journey includes:
            </p>
            <ul>
                <li>
                    <strong>Software Developer (Odysse | June 2024 – Present):</strong> Collaborating with UI/UX designers to develop scalable web applications, optimizing website performance, and creating custom WordPress themes and plugins.
                </li>
                <li>
                    <strong>Web Developer (SEO Hacker | Apr. 2023 – Dec. 2023):</strong> Delivered functional websites using various page builders like WordPress, Shopify, and Squarespace, while ensuring SEO optimization in collaboration with specialists.
                </li>
                <li>
                    <strong>Front End Developer (Fortress | Dec. 2023 – Present):</strong> Enhanced WordPress themes for optimized visuals and functionality, improving responsiveness and layout for better user experiences.
                </li>
            </ul>
            <p>
                Outside of work, I enjoy watching series and movies, playing online games, and continuously exploring new tools and technologies to advance my skills.
            </p>
        </div>
        <div className="row slide-in-top">
            <h3>My Skills</h3>
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
