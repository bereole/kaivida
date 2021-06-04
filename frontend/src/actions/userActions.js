import Axios from "../../node_modules/axios/index";
import { 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNOUT, 
    USER_SREGISTER_FAIL, 
    USER_SREGISTER_REQUEST, 
    USER_SREGISTER_SUCCESS, 
    USER_VREGISTER_FAIL, 
    USER_VREGISTER_REQUEST, 
    USER_VREGISTER_SUCCESS 
} from "../constants/userConatants"

export const sregister = (name, email, password, isSponsor) => async(dispatch) => {
    dispatch({ type: USER_SREGISTER_REQUEST, payload: {name, email, password, isSponsor} });
    try {
        const {data} = await Axios.post('/api/users/sregister', {name, email, password});
        dispatch({type: USER_SREGISTER_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error){
        dispatch({ type: USER_SREGISTER_FAIL, 
            paylaod: 
              error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
};

export const vregister = (name, email, password) => async(dispatch) => {
    dispatch({ type: USER_VREGISTER_REQUEST, payload: {name, email, password} });
    try {
        const {data} = await Axios.post('/api/users/vregister', {name, email, password});
        dispatch({type: USER_VREGISTER_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error){
        dispatch({ type: USER_VREGISTER_FAIL, 
            paylaod: 
              error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
};

export const signin = (email, password) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password} });
    try {
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error){
        dispatch({ type: USER_SIGNIN_FAIL, 
            paylaod: 
              error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('calendar');
    dispatch({type: USER_SIGNOUT});
}