import React from "react";
import {Form, Button} from "semantic-ui-react";
import isEmail from 'validator/lib/isEmail';
import InlineError from "../messages/InlineError";
import AuthError from "../messages/AuthError";

class LoginForm extends React.Component {

    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    }

    onChange = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) 
           {  this.setState({loading: true})
            return (  this.props.submit(this.state.data)
            .catch(err => this.setState({errors: err.response.data.errors, loading: false})))
        }
    }

    validate = data => {
        const errors = {};
        if (!isEmail(data.email)) errors.email = "Invalid Email!";
        if (!data.password) errors.password = "Password Can't Be Empty!";
        return errors;
    }

    render() {
        const {data, loading, errors} = this.state;
        return(
            <Form onSubmit = {this.onSubmit} loading = {loading} > 
            {errors.global && <AuthError text = {errors.global} />}
                <Form.Field error= {!!errors.email} >
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    placeholder="abc@abc.com"
                    name = "email"
                    value = {data.email}
                    onChange = {this.onChange}
                    />
                    {errors.email && <InlineError text = {errors.email} />}
                </Form.Field>
                <Form.Field error = {!!errors.password} >
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    placeholder = "Enter Password Here"
                    name = "password"
                    value = {data.password}
                    onChange = {this.onChange}
                    />
                    {errors.password && <InlineError text = {errors.password} />}
                </Form.Field>
                <Button primary content = "Login" />
            </Form>
        )
    }
}

export default LoginForm;