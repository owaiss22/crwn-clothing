import React from 'react';

import SignIn from '../../Components/SignIn/SignIn';

import SignUp from '../../Components/SignUp/SignUp';

import './SignInAndSignUp.scss';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;