import React from 'react';
import slide1 from "../img/slide/bgslide1.jpg";


const Hero = () => {
    return (
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animated fadeInDown">Welcome to <span>Drain Control</span></h2>
                                <p class="animated fadeInUp">
                                A smart approach towards solving your problems. <br /> Your Problem, Our Priority.
                                </p>
                                <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero