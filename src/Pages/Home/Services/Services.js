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
        <div id='services' className='container'>
            <div className="row">
                <h1 className='services-title text-primary'>Our Services</h1>
                <div className='services-container'>
                    {
                        servieces.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;