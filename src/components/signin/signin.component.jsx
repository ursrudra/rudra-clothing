import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss'
import { SigninWithGoogle } from '../../firebase/firebase-utils';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                        name="email"
                        value={email}
                        label='Email'
                        required
                        autoComplete='off'
                        handleChange={this.handleChange} />
                    <FormInput type="password"
                        name="password"
                        label='Password'
                        value={password}
                        required
                        autoComplete='off'
                        handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={SigninWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}
