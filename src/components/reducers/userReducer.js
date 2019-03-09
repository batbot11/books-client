import {USER_LOGGED_IN} from "../constants/constants";

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN :
        return {...state, user: action.payload}
        default : return state
    }
}

export default userReducer;