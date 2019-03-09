import React from "react";
import {Route} from "react-router";
import {Container} from "semantic-ui-react";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
    <Container>
        <Route path="/" exact component = {HomePage} />
        <Route path="/login" component = {LoginPage} />
    </Container>
)

export default App;