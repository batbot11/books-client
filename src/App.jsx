import React from "react";
import {Route} from "react-router";
import {Container} from "semantic-ui-react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({location}) => (
    <Container>
        <Route location={location} path="/" exact component = {HomePage} />
        <GuestRoute location={location} path="/login" component = {LoginPage} />
        <UserRoute location={location} path="/dashboard" component = {DashboardPage} />
    </Container>
)

export default App;