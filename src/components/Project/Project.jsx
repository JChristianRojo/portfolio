import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './project.css';
import FRSevilla from '../../assets/Project/FRSevilla.jpeg';
import Prefabhouse from '../../assets/Project/Prefabhouse.jpeg';
import BacopaMonnieri from '../../assets/Project/BacopaMonnieri.jpeg';
import TheKinHouse from '../../assets/Project/TheKinHouse.jpeg';
import Serra from '../../assets/Project/Serra.jpeg';

export default function Project() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const projectCard = (image, title, cardClass, usedTechnologies, onClickLink) => (
        <div className={cardClass}>
            <img className='projectImage' src={image} alt="" />
            <h3>{title}</h3>
            {usedTechnologies && (
                <div className="usedTechnologies">
                    {usedTechnologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            )}
            <div className="overlay"></div>
            <a className='viewButton' href={onClickLink} target='_blank' rel='noreferrer'>View</a>
        </div>
    );

    const settings1 = {
        dots: true,
        className: "cardContainer",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        ref: (slider) => setNav1(slider),
        asNavFor: nav2,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    centerMode: false,
                }
            },
            {
                breakpoint: 574,
                settings: {
                    centerMode: false,
                    adaptiveHeight: true
                }
            }
        ]
    };

    const settings2 = {
        asNavFor: nav1,
        className: "navCardContainer",
        ref: (slider) => setNav2(slider),
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className='project' id='project'>
            <div className="container">
                <div className="sectionHead">
                    <h2>Projects</h2>
                </div>
                <Slider {...settings1}>
                    {projectCard(FRSevilla, "F.R. Sevilla", "card", ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Wordpress"], "https://frsevilla.com/")}
                    {projectCard(Prefabhouse, "Prefab House", "card", ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Wordpress"], "http://prefabhouse.ph/")}
                    {projectCard(BacopaMonnieri, "Bacopa Monnieri", "card", ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Wordpress", "WooCommerce"], "https://bacopamonnieri.ph/")}
                    {projectCard(TheKinHouse, "The Kin House", "card", ["Wordpress", "WPBakery", "CSS"], "https://www.thekinhousemnl.com/main-home/")}
                    {projectCard(Serra, "Sierra", "card", ["JavaScript", "React", "Tailwind CSS", "Next JS"])}
                </Slider>
                <Slider {...settings2}>
                    {projectCard(FRSevilla, "F.R. Sevilla", "cardNav")}
                    {projectCard(Prefabhouse, "Prefab House", "cardNav")}
                    {projectCard(BacopaMonnieri, "Bacopa Monnieri", "cardNav")}
                    {projectCard(TheKinHouse, "The Kin House", "cardNav")}
                    {projectCard(Serra, "Sierra", "cardNav")}
                </Slider>

            </div>
        </section>
    )
}
