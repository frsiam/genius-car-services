import React, { useEffect,useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [servieces, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>This is services: {servieces.length}</h1>
            {
                servieces.map(service => <Service key={service.id} service={service}/>)
            }
        </div>
    );
};

export default Services;