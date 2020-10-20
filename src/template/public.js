import React from 'react';
import Footer from '../js/Components/Footer'
import Navbar from '../js/Components/Navbar'


const Public = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}

export default Public;