import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }
    if (token) {
        navigate('/home');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
    }
    return (
        <div className='container w-50 mx-auto my-5 pb-5'>
            <PageTitle title='Register'></PageTitle>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={() => setAgree(!agree)} name='terms' type="checkbox" className='form-check-input' id="exampleCheck1" />
                    {/* <label className={agree ?'ps-2 text-success form-check-label' : 'text-danger form-check-label'}  for="exampleCheck1">Accept Genius car terms and conditions</label> */}
                    <label className={`form-check-label ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="exampleCheck1">Accept Genius car terms and conditions</label>
                </div>
                <button disabled={!agree} type="submit" className="btn btn-primary w-100 text-center">Register</button>
            </form>
            <div className='my-3 text-center'>
                <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>I have an Account</Link>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;