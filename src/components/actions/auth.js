import { USER_LOGGED_IN } from "../constants/constants";
import api from "../callbacks/api";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    payload: user
})


export const login = data => dispatch => api.user.login(data).then(user => dispatch(userLoggedIn(user)));