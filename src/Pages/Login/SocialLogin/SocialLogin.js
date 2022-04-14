import React from 'react';
import google from '../../../images/google_logo.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button className='btn btn-light w-75 d-block mx-auto border border-dark my-2'>
                    <img style={{width: '30px'}} className='bg-dark' src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-primary w-75 d-block mx-auto my-2'>
                    Facebook Sign In
                </button>
                <button className='btn btn-dark w-75 d-block mx-auto'>
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;