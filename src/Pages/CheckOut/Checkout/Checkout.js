import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Shohidullah',
    //     email: 'shodidul@islam.com',
    //     phone: '01245789665',
    //     address: 'taj hotel'
    // });
    // const handleAddressChange = event => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser)
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://polar-badlands-98264.herokuapp.com/order', order)
            .then(res => {
                console.log(res);
                const { data } = res;
                if (data.insertedId) {
                    toast('Your order is booked !!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={user.address} name='address' placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='Phone' autoComplete='off' required />
                <br />
                <input className="btn btn-primary" type="submit" value='Submit' />
                <br />
            </form>
        </div>
    );
};

export default Checkout;