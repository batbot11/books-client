import React from "react";
import {connect} from "react-redux";
import {login} from "../actions/auth";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {

    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"))

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit = {this.submit} />
             </div>
        )
    }
}

export default connect(null, {login})(LoginPage);