import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [servieces, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services'>
            <h1 className='bg-info text-white'>Our Services</h1>
            <div className='services-container'>
                {
                    servieces.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;