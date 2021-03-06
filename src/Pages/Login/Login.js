import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user)

    if (token) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleSubmit = async event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email')
        }
        else {
            toast('Please enter your email !')
        }
    }
    return (
        <div className='container w-50 mx-auto mt-2 mb-5 pb-5'>
            <h1 className='text-primary text-center'>Login page</h1>
            <PageTitle title='Login'></PageTitle>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100 text-center' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <div className='my-2'>
                {errorElement}
            </div>
            <p>Forget Password ? <button className='btn btn-link text-primary fw-bold text-decoration-none' onClick={resetPassword}> Reset Password</button></p>
            <Link to='/register' className='text-primary text-decoration-none text-center' onClick={navigateRegister}>Create new account</Link>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;