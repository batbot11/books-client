import React from "react";
import {connect} from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({isConfirmed}) => (
    <div>
        {isConfirmed ? <h1>Dashboard</h1> : <ConfirmEmailMessage/> }
    </div>
)

const mapState = state => ({
    isConfirmed: !!state.userReducer.user.confirmed
})

export default connect(mapState)(DashboardPage);