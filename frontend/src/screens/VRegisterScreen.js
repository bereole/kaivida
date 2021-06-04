import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { vregister } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function VRegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
       ? props.location.search.split('=')[1]
       :'/';

       const userSRegister = useSelector((state) => state.userSRegister);
       const { userInfo, loading, error } = userSRegister;

    const dispatch = useDispatch();
    const submitHandler =(e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and Confirm Password are not match');
        } else {
            dispatch(vregister(name, email, password,));
        }
        
    };
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div>
           <form className="form" onSubmit={submitHandler}>
              <div>
                  <h1>Vendor Register</h1>
                </div>    
                {
                    loading && <LoadingBox></LoadingBox>
                } 
                {
                    error && <MessageBox variant="danger">{error}</MessageBox>
                }
                <div>
                    <label htmlFor="name">Vendor Name </label>
                    <input 
                       type="text" 
                       id="name" 
                       placeholder="Enter name" 
                       required 
                       onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Vendor Address </label>
                    <input 
                       type="text" 
                       id="address" 
                       placeholder="Enter Address" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="phone">Vendor Phone Number </label>
                    <input 
                       type="tel" 
                       id="phone" 
                       placeholder="Enter Phone Number" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="contact">Vendor Contact Person </label>
                    <input 
                       type="tel" 
                       id="contact" 
                       placeholder="Enter Contact Person" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="title">Title </label>
                    <input 
                       type="text" 
                       id="title" 
                       placeholder="Enter Title" 
                       required
                    ></input>
                </div>
                
                <div>
                    <label htmlFor="office">Vendor Office Number </label>
                    <input 
                       type="tel" 
                       id="office" 
                       placeholder="Enter Office Number" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="cell">Vendor Cell Number </label>
                    <input 
                       type="tel" 
                       id="cell" 
                       placeholder="Enter Cell Number" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input 
                       type="email" 
                       id="email" 
                       placeholder="Enter email" 
                       required
                       onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                       type="password" 
                       id="password" 
                       placeholder="Enter password" 
                       required 
                       onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                       type="password" 
                       id="confirmPassword" 
                       placeholder="Enter password" 
                       required 
                       onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already Have an account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form> 
        </div>
    );
}
