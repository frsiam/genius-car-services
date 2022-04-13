import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price,id} = service;
    const navigate = useNavigate()
    const handleDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <h3>Name: {name}</h3>
            <img className='w-100' src={img} alt="" />
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleDetails(id)} className='btn btn-info'>Book: {name}</button>
        </div>
    );
};

export default Service;