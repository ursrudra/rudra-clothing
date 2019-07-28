import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:'',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        const { emailSignInStart} = this.props;
        emailSignInStart(email,password);

        

    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    {
                        this.state.error && <p>{this.state.error}</p>

                    }
                </form>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(Signin)