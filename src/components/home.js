import React from 'react';

// import components
import Navbar from '../components/navbar';
import Header from '../components/header';
import HomeBody from '../components/homebody';
import BackToTop from '../components/backtotop';
import Particules from 'react-particles-js'
import Footer from '../components/footer';


const  Home = () => {
    return (
        <>
            <BackToTop />
            <Particules 
                className='tsparticles-canvas-el'
                params={{
                particules: {
                    number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                    },
                    shape: {
                    type: "circle",
                    stroke: {
                        width: 6,
                        color: "#f9ab00"
                    }
                    }
                }
                }}
            />
            <Navbar />
            <Header />
            <HomeBody />
            <Footer />
        </>
    )
}

export default Home
