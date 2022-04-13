import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email,password)
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            <h1 className='text-primary text-center'>Login page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 text-center' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Create new account</Link>
        </div>
    );
};

export default Login;