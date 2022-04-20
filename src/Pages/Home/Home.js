import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <PageTitle title='Hommeeeee'></PageTitle>
            <Banner/>
            <Services/>
            <Experts/>
        </>
    );
};

export default Home;