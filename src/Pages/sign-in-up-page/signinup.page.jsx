import React from 'react';
import './signinuppage.style.scss';
import SignIn  from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

const SignInUpPage = () => (
    <div className='sign-in-up-page'>
        <SignIn/>
        <SignUp/>

    </div>
    
)

export default SignInUpPage;