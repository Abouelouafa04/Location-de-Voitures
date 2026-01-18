import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import HomeNews from '../components/HomeNews';
import PromoBanner from '../components/PromoBanner';
import FeaturedCars from "../components/cars/FeaturedCars";



const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <About />
            <FeaturedCars />
            <PromoBanner />
            <HomeNews />
        </main>
    );
}

export default Home;

        