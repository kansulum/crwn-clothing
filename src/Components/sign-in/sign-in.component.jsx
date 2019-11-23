import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-inpu.component';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    onSubmitHandler =event =>{
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })

    }

    handlerChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign-in with your email and password</span>

                <form onSubmit={this.onSubmitHandler}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handlerChange} required label="email"/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handlerChange} required label="password"/>
                
                    <CustomButton type="submit" value="Submit Form">Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;