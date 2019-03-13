import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router";

const UserRoute = ({isLoggedIn, component: Component, ...rest}) => (
    <Route {...rest} render = {props => !isLoggedIn? <Component {...props} /> :
    <Redirect to="/dashboard" />   
} />
)

const mapState = state => ({
    isLoggedIn : !!state.userReducer.user.token
})

export default connect(mapState)(UserRoute);