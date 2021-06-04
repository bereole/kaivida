import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrderScreen(props) {
    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice );
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems }));
    };
    useEffect(() => {
        if(success) {
            props.history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success]);

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row-top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Calendar</h2>
                                <p>
                                    <strong>Month:</strong> {cart.calendar.month} <br />
                                    <strong>Day1 Breakfast:</strong> {cart.calendar.day1b} <br />
                                    <strong>Day1 Lunch:</strong> {cart.calendar.day1l} <br />
                                    <strong>Day1 Supper:</strong> {cart.calendar.day1s} <br />
                                    <strong>Day2 Breakfast:</strong> {cart.calendar.day2b} <br />
                                    <strong>Day2 Lunch:</strong> {cart.calendar.day2l} <br />
                                    <strong>Day2 Supper:</strong> {cart.calendar.day2s} <br />
                                    <strong>Day3 Breakfast:</strong> {cart.calendar.day3b} <br />
                                    <strong>Day3 Lunch:</strong> {cart.calendar.day3l} <br />
                                    <strong>Day3 Supper:</strong> {cart.calendar.day3s} <br />
                                    <strong>Day4 Breakfast:</strong> {cart.calendar.day4b} <br />
                                    <strong>Day4 Lunch:</strong> {cart.calendar.day4l} <br />
                                    <strong>Day4 Supper:</strong> {cart.calendar.day4s} <br />
                                    <strong>Day5 Breakfast:</strong> {cart.calendar.day5b} <br />
                                    <strong>Day5 Lunch:</strong> {cart.calendar.day5l} <br />
                                    <strong>Day5 Supper:</strong> {cart.calendar.day5s} <br />
                                    <strong>Day6 Breakfast:</strong> {cart.calendar.day6b} <br />
                                    <strong>Day6 Lunch:</strong> {cart.calendar.day6l} <br />
                                    <strong>Day6 Supper:</strong> {cart.calendar.day6s} <br />
                                    <strong>Day7 Breakfast:</strong> {cart.calendar.day7b} <br />
                                    <strong>Day7 Lunch:</strong> {cart.calendar.day7l} <br />
                                    <strong>Day7 Supper:</strong> {cart.calendar.day7s} <br />
                                    <strong>Day8 Breakfast:</strong> {cart.calendar.day8b} <br />
                                    <strong>Day8 Lunch:</strong> {cart.calendar.day8l} <br />
                                    <strong>Day8 Supper:</strong> {cart.calendar.day8s} <br />
                                    <strong>Day9 Breakfast:</strong> {cart.calendar.day9b} <br />
                                    <strong>Day9 Lunch:</strong> {cart.calendar.day9l} <br />
                                    <strong>Day9 Supper:</strong> {cart.calendar.day9s} <br />
                                    <strong>Day10 Breakfast:</strong> {cart.calendar.day10b} <br />
                                    <strong>Day10 Lunch:</strong> {cart.calendar.day10l} <br />
                                    <strong>Day10 Supper:</strong> {cart.calendar.day10s} <br />
                                    <strong>Day11 Breakfast:</strong> {cart.calendar.day11b} <br />
                                    <strong>Day11 Lunch:</strong> {cart.calendar.day11l} <br />
                                    <strong>Day11 Supper:</strong> {cart.calendar.day11s} <br />
                                    <strong>Day12 Breakfast:</strong> {cart.calendar.day12b} <br />
                                    <strong>Day12 Lunch:</strong> {cart.calendar.day12l} <br />
                                    <strong>Day12 Supper:</strong> {cart.calendar.day12s} <br />
                                    <strong>Day13 Breakfast:</strong> {cart.calendar.day13b} <br />
                                    <strong>Day13 Lunch:</strong> {cart.calendar.day13l} <br />
                                    <strong>Day13 Supper:</strong> {cart.calendar.day13s} <br />
                                    <strong>Day14 Breakfast:</strong> {cart.calendar.day14b} <br />
                                    <strong>Day14 Lunch:</strong> {cart.calendar.day14l} <br />
                                    <strong>Day14 Supper:</strong> {cart.calendar.day14s} <br />
                                    <strong>Day15 Breakfast:</strong> {cart.calendar.day15b} <br />
                                    <strong>Day15 Lunch:</strong> {cart.calendar.day15l} <br />
                                    <strong>Day15 Supper:</strong> {cart.calendar.day15s} <br />
                                    <strong>Day16 Breakfast:</strong> {cart.calendar.day16b} <br />
                                    <strong>Day16 Lunch:</strong> {cart.calendar.day16l} <br />
                                    <strong>Day16 Supper:</strong> {cart.calendar.day16s} <br />
                                    <strong>Day17 Breakfast:</strong> {cart.calendar.day17b} <br />
                                    <strong>Day17 Lunch:</strong> {cart.calendar.day17l} <br />
                                    <strong>Day17 Supper:</strong> {cart.calendar.day17s} <br />
                                    <strong>Day18 Breakfast:</strong> {cart.calendar.day18b} <br />
                                    <strong>Day18 Lunch:</strong> {cart.calendar.day18l} <br />
                                    <strong>Day18 Supper:</strong> {cart.calendar.day18s} <br />
                                    <strong>Day19 Breakfast:</strong> {cart.calendar.day19b} <br />
                                    <strong>Day19 Lunch:</strong> {cart.calendar.day19l} <br />
                                    <strong>Day19 Supper:</strong> {cart.calendar.day19s} <br />
                                    <strong>Day20 Breakfast:</strong> {cart.calendar.day20b} <br />
                                    <strong>Day20 Lunch:</strong> {cart.calendar.day20l} <br />
                                    <strong>Day20 Supper:</strong> {cart.calendar.day20s} <br />
                                    <strong>Day21 Breakfast:</strong> {cart.calendar.day21b} <br />
                                    <strong>Day21 Lunch:</strong> {cart.calendar.day21l} <br />
                                    <strong>Day21 Supper:</strong> {cart.calendar.day21s} <br />
                                    <strong>Day22 Breakfast:</strong> {cart.calendar.day22b} <br />
                                    <strong>Day22 Lunch:</strong> {cart.calendar.day22l} <br />
                                    <strong>Day22 Supper:</strong> {cart.calendar.day22s} <br />
                                    <strong>Day23 Breakfast:</strong> {cart.calendar.day23b} <br />
                                    <strong>Day23 Lunch:</strong> {cart.calendar.day23l} <br />
                                    <strong>Day23 Supper:</strong> {cart.calendar.day23s} <br />
                                    <strong>Day24 Breakfast:</strong> {cart.calendar.day24b} <br />
                                    <strong>Day24 Lunch:</strong> {cart.calendar.day24l} <br />
                                    <strong>Day24 Supper:</strong> {cart.calendar.day24s} <br />
                                    <strong>Day25 Breakfast:</strong> {cart.calendar.day25b} <br />
                                    <strong>Day25 Lunch:</strong> {cart.calendar.day25l} <br />
                                    <strong>Day25 Supper:</strong> {cart.calendar.day25s} <br />
                                    <strong>Day26 Breakfast:</strong> {cart.calendar.day26b} <br />
                                    <strong>Day26 Lunch:</strong> {cart.calendar.day26l} <br />
                                    <strong>Day26 Supper:</strong> {cart.calendar.day26s} <br />
                                    <strong>Day27 Breakfast:</strong> {cart.calendar.day27b} <br />
                                    <strong>Day27 Lunch:</strong> {cart.calendar.day27l} <br />
                                    <strong>Day27 Supper:</strong> {cart.calendar.day27s} <br />
                                    <strong>Day28 Breakfast:</strong> {cart.calendar.day28b} <br />
                                    <strong>Day28 Lunch:</strong> {cart.calendar.day28l} <br />
                                    <strong>Day28 Supper:</strong> {cart.calendar.day28s} <br />
                                    <strong>Day29 Breakfast:</strong> {cart.calendar.day29b} <br />
                                    <strong>Day29 Lunch:</strong> {cart.calendar.day29l} <br />
                                    <strong>Day29 Supper:</strong> {cart.calendar.day29s} <br />
                                    <strong>Day30 Breakfast:</strong> {cart.calendar.day30b} <br />
                                    <strong>Day30 Lunch:</strong> {cart.calendar.day30l} <br />
                                    <strong>Day30 Supper:</strong> {cart.calendar.day30s} <br />
                                    <strong>Day31 Breakfast:</strong> {cart.calendar.day31b} <br />
                                    <strong>Day31 Lunch:</strong> {cart.calendar.day31l} <br />
                                    <strong>Day31 Supper:</strong> {cart.calendar.day31s} <br />
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {cart.paymentMethod} 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                        {
                            cart.cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img
                                              src={item.image}
                                              alt={item.name}
                                              className="small"
                                            ></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                      
                                        <div>
                                          {item.qty} x  ${item.price} = GHS{item.qty * item.price}
                                        </div>
                                       
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                 <div className="col-1">
                     <div className="card card-body">
                         <ul>
                             <li>
                                 <h2>Order summary</h2>
                             </li>
                             <li>
                               <div className="row">
                                   <div>Items</div>
                                   <div>GHS{cart.itemsPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>Shipping</div>
                                   <div>GHS{cart.shippingPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>Tax</div>
                                   <div>GHS{cart.taxPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>
                                       <strong>Order Total</strong>
                                   </div>
                                   <div> <strong>GHS{cart.totalPrice.toFixed(2)}</strong></div>
                                   </div>  
                             </li>
                             <li>
                                 <button type="button" onClick={placeOrderHandler} className="primary block" disabled={cart.cartItems.length === 0} >
                                     Place Order
                                 </button>
                             </li>
                             {loading && <LoadingBox></LoadingBox>}
                             {error && <MessageBox variant="danger">{error}</MessageBox>}
                         </ul>
                     </div>
                 </div>
            </div>
        </div>
    );
}
