import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center bg-dark text-white p-2'>
            <p>copyright 	&copy; &#169; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;