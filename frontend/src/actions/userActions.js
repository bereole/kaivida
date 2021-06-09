import Axios from 'axios';
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
    USER_VREGISTER_SUCCESS,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_SUCCESS, 
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
};

export const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
    const { userSignin: {userInfo}} = getState();
    try {
       const { data } = await Axios.get(`/api/users/${userId}`, {
           headers: { Authorization: `Bearer ${userInfo.token}`}
       });
       dispatch({ type: USER_DETAILS_SUCCESS, payload: data });  
    } catch (error) {
        const message = 
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: USER_DETAILS_FAIL, payload: message });
    }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
    const { userSignin: {userInfo}} = getState();
    try {
        const { data } = await Axios.put(`/api/users/profile`, user, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message = 
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
    }
}