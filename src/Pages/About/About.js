import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='d-flex justify-content-center bg-info py-5 text-white'>
            <PageTitle title='About'></PageTitle>
            <h3>This is about us</h3>
        </div>
    );
};

export default About;