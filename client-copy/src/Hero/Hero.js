import React from 'react';
import swal from 'sweetalert';
import Cookies from 'universal-cookie';
import slide1 from "../img/slide/bgslide1.jpg";


const Hero = () => {
    const cookies = new Cookies();
    const showLogin = () => {
        if (!cookies.get('username')) {
            swal("Please login first to register your complain", "", "warning");
        } else {
            window.location.replace("http://localhost:3000/complaint");
        }
    }
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
                                <button class="btn-get-started animated fadeInUp scrollto" style={{ border: 'none' }} onClick={showLogin}>Click Here to register your complain</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero