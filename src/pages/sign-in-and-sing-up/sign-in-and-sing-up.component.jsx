import React from 'react'
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sing-up.component';
import './sign-in-and-sing-up.styles.scss';
import Divider from '../../components/divider/divider.component';
const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sing-up'>
        <Signin/>
        <Divider/>
        <SignUp/>
    </div>
  )
}

export default SignInAndSignUpPage
