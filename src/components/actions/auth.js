import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../constants/constants";
import api from "../callbacks/api";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    payload: user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
})

export const login = data => dispatch => api.user.login(data).then(user => {
    localStorage.AuthJWT = user.token
    dispatch(userLoggedIn(user))});

export const logout = () => dispatch => {
    localStorage.removeItem("AuthJWT")
    dispatch(userLoggedOut())
}