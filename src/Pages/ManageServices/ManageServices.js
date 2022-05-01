import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://polar-badlands-98264.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='container text-center my-5'>
            <h1 className='my-4'>Manage Your Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}
                        <button onClick={() => handleDelete(service._id)} className="btn btn-danger mx-2">Delete</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;