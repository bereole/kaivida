import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SREGISTER_FAIL, USER_SREGISTER_REQUEST, USER_SREGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS, USER_VREGISTER_FAIL, USER_VREGISTER_REQUEST, USER_VREGISTER_SUCCESS } from "../constants/userConatants";

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

export const userDetailsReducer = (state = {loading: true}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {loading: true};
        case USER_DETAILS_SUCCESS:
            return {loading: false, user: action.payload};
        case USER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return {};
    }
};

export const userUpdateProfileReducer = ( state ={}, action ) => {
     switch(action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading: true};
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true};
        case USER_UPDATE_PROFILE_FAIL:
            return {loading: false, error: action.payload};
        case USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
     }
}