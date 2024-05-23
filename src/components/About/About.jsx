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
        <section className='about' id='about'>
            <div className="container">
                <div className="sectionHead">
                    <h2>About Me</h2>
                    <p>
                        I possess a year of experience as a web developer and I am extremely passionate for programming. I earned a Bachelor of Science degree in Computer Engineering in the academic year 2022. My educational journey includes 6 years as a dedicated student athlete, followed by a 3-year commitment as a student leader.
                    </p>
                    <p>
                        Aside from my professional career and education, my hobbies include watching series and movies and as well as playing online games.
                    </p>
                </div>
                <h3>My Skills</h3>
                <div className="row">
                    {skillsData.map((skill, index) => (
                        <div className="card" key={index}>
                            <img className='skill' src={skill.image} alt={skill.name} />
                            <h4>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
