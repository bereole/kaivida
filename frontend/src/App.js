import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import data from './data';
import CalendarScreen from './screens/CalendarScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import SigninScreen from './screens/SigninScreen';
import SRegisterScreen from './screens/SRegisterScreen';
import VRegisterScreen from './screens/VRegisterScreen';

 function App() {
   const cart = useSelector((state) => state.cart);
   const {cartItems} = cart;
   const logo = data.logo;
   const userSignin = useSelector((state) => state.userSignin);
   const { userInfo } = userSignin;
   const dispatch = useDispatch();
   const signoutHandler = () => {
     dispatch(signout());
   };
  return (
    <BrowserRouter>
 
    <div className="grid-container">
        <header className="row">
           <div>
               <Link className="brand" to="/">
                 <img className="logo" src={logo.image} alt="LOGO" /> 
               </Link>
           </div>
           <div className="nav">
               <Link to="/">Home</Link>
               <Link to="/">Our Foods</Link>
               <Link to="/cart">Cart {cartItems.length > 0 && (
                 <span className="badge">{cartItems.length}</span>
               )} 
               </Link>
                  {
                    userInfo ? (
                      <div className="dropdown">
                      <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                          <Link to="/orderhistory">Order History</Link>
                        </li>
                        <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                      </ul>
                      </div>
                    ) : (
                      <Link to="/signin">Sign In</Link>
                    )
                  }
                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <Link to="#admin">
                        Admin <i className="fa fa-caret-down"></i>
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/productlist">Products</Link>
                        </li>
                        <li>
                          <Link to="/orderlist">Orders</Link>
                        </li>
                        <li>
                          <Link to="/userlist">Users</Link>
                        </li>
                        <li>
                          <Link to="/calendar">Calendar</Link>
                        </li>

                      </ul>
                    </div>
                  )}
     
               <Link to="/vregister" className="btn space">Vendor</Link>
               <Link to="/sregister" className="btn space">Sponsor</Link>
           </div>
        </header>
        <main>
          <Route path="/sregister" component={SRegisterScreen}></Route>
          <Route path="/vregister" component={VRegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen} exact></Route>
          <Route path='/product/:id/edit' component={ProductEditScreen} exact></Route>
          <Route path="/calendar" component={CalendarScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <AdminRoute path="productList" component={ProductListScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
            
        </main>
        <footer className="row center">
           

            <div className="foot">
                <div className="contain">
                  <div className="rowe">
                    <div className="foot-col-1">
                      <h3>Download Our App</h3>
                      <p>Download App for Android and ios mobile phone.</p>
               <div className="app-logo">
                <Link to="/"><img src="images/play-store.png" alt="" /></Link>
                <Link to="/"><img src="images/app-store.png" alt="" /></Link>
               </div>
                    </div>
              
                    <div className="foot-col-2">
                      <img src={logo.image} alt="LOGO" />
                      <p>Our Purpose is to Sustainably Make the Pleasure and
                        Benefits of Healthy Food Accessible to the Many.</p>
                    </div>
              
                    <div className="foot-col-3">
                      <h3>Useful Links</h3>
                    <ul>
                      <Link to="/"><li>Coupons</li></Link>
                      <Link to="/"><li>Blog Post</li></Link>
                      <Link to="/"><li>Return Policy</li></Link>
                      <Link to="/"><li>Join Affliate</li></Link>
                    </ul>
                    </div>
              
                    <div className="foot-col-4">
                      <h3>Follow us</h3>
                    <ul>
                      <Link to="/"><li>Facebook</li></Link>
                      <Link to="/"><li>Twitter</li></Link>
                      <Link to="/"><li>Instagram</li></Link>
                      <Link to="/"><li>YouTube</li></Link>
                    </ul>
                    </div>
              
                  </div>
                  <hr />
                  <p className="copyright"> All rights reserved </p>
                </div>
              </div>


        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
