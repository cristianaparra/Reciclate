import React, { Fragment } from 'react';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Step from '../Components/Step'



const Home = () => {
    return (
        <Fragment>

            <Navbar />
            <Main />
            <Step />
            <Footer />

        </Fragment>
    );
}

export default Home;