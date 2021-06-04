import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDetailsReducer } from "./reducers/orderReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import { userSigninReducer, userSRegisterReducer, userVRegisterReducer } from "./reducers/userReducers";

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo') 
          ? JSON.parse(localStorage.getItem('userInfo')) 
          : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') 
          ? JSON.parse(localStorage.getItem('cartItems')) 
          : [],
        calendar: localStorage.getItem('calendar')
          ? JSON.parse(localStorage.getItem('calendar'))
          : {},
        paymentMethod: 'CreditCard',
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer, 
    userSignin: userSigninReducer,
    userSRegister: userSRegisterReducer,
    userVRegister: userVRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;