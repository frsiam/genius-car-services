import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service'>
            <h3>Name: {name}</h3>
            <img className='w-100' src={img} alt="" />
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Service;