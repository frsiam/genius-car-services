import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div>
            <h1>service</h1>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;