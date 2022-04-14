import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google_logo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let Error;

    if (error || error1) {
        Error = <div>
            <p className='text-danger'>Error: {error?.message} {error1?. message}</p>
        </div>
    }
    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        navigate('/home')
        // return (
        //   <div>
        //     <p>Signed In User: {user.email}</p>
        //   </div>
        // );
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {Error}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-light w-75 d-block mx-auto border border-dark my-2'>
                    <img style={{ width: '30px' }} className='bg-dark' src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-primary w-75 d-block mx-auto my-2'>
                    Facebook Sign In
                </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-dark w-75 d-block mx-auto'>
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;