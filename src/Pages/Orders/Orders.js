import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:4000/orders?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user])
    return (
        <div className='container text-center my-5'>
            <h3>Your orders summary: {orders.length}</h3>
        </div>
    );
};

export default Orders;