import React from 'react'
import Hero from './Hero'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return (  
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
    );
}

export default PricingPage;