import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;