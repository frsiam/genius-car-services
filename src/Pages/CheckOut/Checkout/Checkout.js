import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Please order: {service.name}</h1>
            <form>
                
            </form>
        </div>
    );
};

export default Checkout;