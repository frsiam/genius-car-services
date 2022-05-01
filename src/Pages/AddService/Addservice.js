import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://polar-badlands-98264.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
            })
    };
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-1' {...register("name", { required: true, maxLength: 20 })} placeholder='Service Name' />
                <textarea className='mb-3 p-1' {...register("description")} placeholder='Description' />
                <input className='mb-3 p-1' type="number" {...register("price")} placeholder='Service Charge' />
                <input className='mb-3 p-1' type="text" {...register("img")} placeholder='Phto URL' />
                <input className='mb-3 p-1' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default Addservice;