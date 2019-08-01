import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
const Signin = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
    const [error] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userCredentials;
        emailSignInStart(email, password);



    }
    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


    const { email, password } = userCredentials;

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email"
                    name="email"
                    value={email}
                    label='Email'
                    required
                    autoComplete='off'
                    handleChange={handleChange} />
                <FormInput type="password"
                    name="password"
                    label='Password'
                    value={password}
                    required
                    autoComplete='off'
                    handleChange={handleChange} />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
                {
                    error && <p>{error}</p>

                }
            </form>
        </div>

    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(Signin)