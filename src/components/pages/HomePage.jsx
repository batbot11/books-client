import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import {logout} from "../actions/auth";

const HomePage = ({isLoggedIn, logout}) => (
    <div>
        <h1>Home Page</h1>
       {isLoggedIn ? <Button primary content = "Logout" onClick = {() => logout()}
        /> : <Link to="/login" >Login</Link>} 
    </div>
)

const mapState = state => ({
    isLoggedIn: !!state.userReducer.user.token
})

export default connect(mapState, {logout})(HomePage);