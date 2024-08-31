import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
const Home = () => {
    return (
        <>
        <Navbar/>
        <Main/>
        <Services/>
        <Portfolio/>
        </>
    );
}

export default Home;
