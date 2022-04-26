import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user, setUser] = useState({
        name: 'Shohidullah',
        email: 'shodidul@islam.com',
        phone: '01245789665',
        address: 'taj hotel'
    });
    const handleAddressChange = event => {
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        console.log(newUser)
        setUser(newUser)
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please order: {service.name}</h1>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name='name' placeholder='Name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='Email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.address} onChange={handleAddressChange} name='address' placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='Phone' required />
                <br />
                <input className="btn btn-primary" type="submit" value='Submit' />
                <br />
            </form>
        </div>
    );
};

export default Checkout;