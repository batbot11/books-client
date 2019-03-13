import React from "react";
import {Message} from "semantic-ui-react";

const ConfirmEmailMessage = () => (
    <Message info >
    <Message.Header>
        Please Confirm your email!
    </Message.Header>
    <Message.Content>Go to your given email and click on the link to verify your account</Message.Content>
    </Message>
)

export default ConfirmEmailMessage;