import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default Home