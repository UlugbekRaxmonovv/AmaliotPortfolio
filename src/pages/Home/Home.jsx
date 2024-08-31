import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Footer from '../../components/Footer/Footer';
import Person from '../../components/Person/Person';
import Call from '../../components/Call/Call';
const Home = () => {
    return (
        <>
        <Navbar/>
        <Main/>
        <Services/>
        <Portfolio/>
        <Person/> 
        <Call/>  
        <Footer/>
        </>
    );
}

export default Home;
