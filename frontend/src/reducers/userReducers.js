import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SREGISTER_FAIL, USER_SREGISTER_REQUEST, USER_SREGISTER_SUCCESS, USER_VREGISTER_FAIL, USER_VREGISTER_REQUEST, USER_VREGISTER_SUCCESS } from "../constants/userConatants";

export const userSRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SREGISTER_REQUEST:
            return { loading: true };
        case USER_SREGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SREGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userVRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_VREGISTER_REQUEST:
            return { loading: true };
        case USER_VREGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_VREGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
};