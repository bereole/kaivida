import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { sregister } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SRegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSponsor, setIsSponsor] = useState(true);
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
            dispatch(sregister(name, email, password, isSponsor));
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
                  <h1>Sponsor Register</h1>
                </div>    
                {
                    loading && <LoadingBox></LoadingBox>
                } 
                {
                    error && <MessageBox variant="danger">{error}</MessageBox>
                }
                <div>
                    <label htmlFor="name">Name </label>
                    <input 
                       type="text" 
                       id="name" 
                       placeholder="Enter name" 
                       required 
                       onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address </label>
                    <input 
                       type="text" 
                       id="address" 
                       placeholder="Enter Address" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="age">Age </label>
                    <input 
                       type="text" 
                       id="age" 
                       placeholder="Enter Age" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="dr">Dietary Restraints </label>
                    <input 
                       type="text" 
                       id="dr" 
                       placeholder="Enter your Dietary Restraints" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="meals">Number of Meals Served </label>
                    <input 
                       type="text" 
                       id="meals" 
                       placeholder="Enter number of Meals Served" 
                       required
                    ></input>
                </div>
                <div>
                    <label htmlFor="ps">Type of Permission Slip </label>
                    <input 
                       type="text" 
                       id="ps" 
                       placeholder="Enter name" 
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
                    <label htmlFor="isSponsor">I accept your terms </label>
                    <input 
                       type="checkbox" 
                       id="isSponsor"
                       checked={isSponsor} 
                       required
                       onChange={(e) => setIsSponsor(e.target.checked)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
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
