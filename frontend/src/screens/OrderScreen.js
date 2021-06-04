import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
   const orderId = props.match.params.id;
   const orderDetails = useSelector((state) => state.orderDetails);
   const { order, loading, error }  = orderDetails;
   const dispatch = useDispatch();

    useEffect(() => {
       dispatch(detailsOrder(orderId))
    }, [dispatch, orderId]);

    return loading?(<LoadingBox></LoadingBox>) : error? (<MessageBox variant="danger">{error}</MessageBox>) :  (
        <div>
            <h1>Order {order._id}</h1>
            <div className="row-top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Calendar</h2>
                                <p>
                                    <strong>Month:</strong> {order.calendar.month} <br />
                                    <strong>Day1 Breakfast:</strong> {order.calendar.day1b} <br />
                                    <strong>Day1 Lunch:</strong> {order.calendar.day1l} <br />
                                    <strong>Day1 Supper:</strong> {order.calendar.day1s} <br />
                                    <strong>Day2 Breakfast:</strong> {order.calendar.day2b} <br />
                                    <strong>Day2 Lunch:</strong> {order.calendar.day2l} <br />
                                    <strong>Day2 Supper:</strong> {order.calendar.day2s} <br />
                                    <strong>Day3 Breakfast:</strong> {order.calendar.day3b} <br />
                                    <strong>Day3 Lunch:</strong> {order.calendar.day3l} <br />
                                    <strong>Day3 Supper:</strong> {order.calendar.day3s} <br />
                                    <strong>Day4 Breakfast:</strong> {order.calendar.day4b} <br />
                                    <strong>Day4 Lunch:</strong> {order.calendar.day4l} <br />
                                    <strong>Day4 Supper:</strong> {order.calendar.day4s} <br />
                                    <strong>Day5 Breakfast:</strong> {order.calendar.day5b} <br />
                                    <strong>Day5 Lunch:</strong> {order.calendar.day5l} <br />
                                    <strong>Day5 Supper:</strong> {order.calendar.day5s} <br />
                                    <strong>Day6 Breakfast:</strong> {order.calendar.day6b} <br />
                                    <strong>Day6 Lunch:</strong> {order.calendar.day6l} <br />
                                    <strong>Day6 Supper:</strong> {order.calendar.day6s} <br />
                                    <strong>Day7 Breakfast:</strong> {order.calendar.day7b} <br />
                                    <strong>Day7 Lunch:</strong> {order.calendar.day7l} <br />
                                    <strong>Day7 Supper:</strong> {order.calendar.day7s} <br />
                                    <strong>Day8 Breakfast:</strong> {order.calendar.day8b} <br />
                                    <strong>Day8 Lunch:</strong> {order.calendar.day8l} <br />
                                    <strong>Day8 Supper:</strong> {order.calendar.day8s} <br />
                                    <strong>Day9 Breakfast:</strong> {order.calendar.day9b} <br />
                                    <strong>Day9 Lunch:</strong> {order.calendar.day9l} <br />
                                    <strong>Day9 Supper:</strong> {order.calendar.day9s} <br />
                                    <strong>Day10 Breakfast:</strong> {order.calendar.day10b} <br />
                                    <strong>Day10 Lunch:</strong> {order.calendar.day10l} <br />
                                    <strong>Day10 Supper:</strong> {order.calendar.day10s} <br />
                                    <strong>Day11 Breakfast:</strong> {order.calendar.day11b} <br />
                                    <strong>Day11 Lunch:</strong> {order.calendar.day11l} <br />
                                    <strong>Day11 Supper:</strong> {order.calendar.day11s} <br />
                                    <strong>Day12 Breakfast:</strong> {order.calendar.day12b} <br />
                                    <strong>Day12 Lunch:</strong> {order.calendar.day12l} <br />
                                    <strong>Day12 Supper:</strong> {order.calendar.day12s} <br />
                                    <strong>Day13 Breakfast:</strong> {order.calendar.day13b} <br />
                                    <strong>Day13 Lunch:</strong> {order.calendar.day13l} <br />
                                    <strong>Day13 Supper:</strong> {order.calendar.day13s} <br />
                                    <strong>Day14 Breakfast:</strong> {order.calendar.day14b} <br />
                                    <strong>Day14 Lunch:</strong> {order.calendar.day14l} <br />
                                    <strong>Day14 Supper:</strong> {order.calendar.day14s} <br />
                                    <strong>Day15 Breakfast:</strong> {order.calendar.day15b} <br />
                                    <strong>Day15 Lunch:</strong> {order.calendar.day15l} <br />
                                    <strong>Day15 Supper:</strong> {order.calendar.day15s} <br />
                                    <strong>Day16 Breakfast:</strong> {order.calendar.day16b} <br />
                                    <strong>Day16 Lunch:</strong> {order.calendar.day16l} <br />
                                    <strong>Day16 Supper:</strong> {order.calendar.day16s} <br />
                                    <strong>Day17 Breakfast:</strong> {order.calendar.day17b} <br />
                                    <strong>Day17 Lunch:</strong> {order.calendar.day17l} <br />
                                    <strong>Day17 Supper:</strong> {order.calendar.day17s} <br />
                                    <strong>Day18 Breakfast:</strong> {order.calendar.day18b} <br />
                                    <strong>Day18 Lunch:</strong> {order.calendar.day18l} <br />
                                    <strong>Day18 Supper:</strong> {order.calendar.day18s} <br />
                                    <strong>Day19 Breakfast:</strong> {order.calendar.day19b} <br />
                                    <strong>Day19 Lunch:</strong> {order.calendar.day19l} <br />
                                    <strong>Day19 Supper:</strong> {order.calendar.day19s} <br />
                                    <strong>Day20 Breakfast:</strong> {order.calendar.day20b} <br />
                                    <strong>Day20 Lunch:</strong> {order.calendar.day20l} <br />
                                    <strong>Day20 Supper:</strong> {order.calendar.day20s} <br />
                                    <strong>Day21 Breakfast:</strong> {order.calendar.day21b} <br />
                                    <strong>Day21 Lunch:</strong> {order.calendar.day21l} <br />
                                    <strong>Day21 Supper:</strong> {order.calendar.day21s} <br />
                                    <strong>Day22 Breakfast:</strong> {order.calendar.day22b} <br />
                                    <strong>Day22 Lunch:</strong> {order.calendar.day22l} <br />
                                    <strong>Day22 Supper:</strong> {order.calendar.day22s} <br />
                                    <strong>Day23 Breakfast:</strong> {order.calendar.day23b} <br />
                                    <strong>Day23 Lunch:</strong> {order.calendar.day23l} <br />
                                    <strong>Day23 Supper:</strong> {order.calendar.day23s} <br />
                                    <strong>Day24 Breakfast:</strong> {order.calendar.day24b} <br />
                                    <strong>Day24 Lunch:</strong> {order.calendar.day24l} <br />
                                    <strong>Day24 Supper:</strong> {order.calendar.day24s} <br />
                                    <strong>Day25 Breakfast:</strong> {order.calendar.day25b} <br />
                                    <strong>Day25 Lunch:</strong> {order.calendar.day25l} <br />
                                    <strong>Day25 Supper:</strong> {order.calendar.day25s} <br />
                                    <strong>Day26 Breakfast:</strong> {order.calendar.day26b} <br />
                                    <strong>Day26 Lunch:</strong> {order.calendar.day26l} <br />
                                    <strong>Day26 Supper:</strong> {order.calendar.day26s} <br />
                                    <strong>Day27 Breakfast:</strong> {order.calendar.day27b} <br />
                                    <strong>Day27 Lunch:</strong> {order.calendar.day27l} <br />
                                    <strong>Day27 Supper:</strong> {order.calendar.day27s} <br />
                                    <strong>Day28 Breakfast:</strong> {order.calendar.day28b} <br />
                                    <strong>Day28 Lunch:</strong> {order.calendar.day28l} <br />
                                    <strong>Day28 Supper:</strong> {order.calendar.day28s} <br />
                                    <strong>Day29 Breakfast:</strong> {order.calendar.day29b} <br />
                                    <strong>Day29 Lunch:</strong> {order.calendar.day29l} <br />
                                    <strong>Day29 Supper:</strong> {order.calendar.day29s} <br />
                                    <strong>Day30 Breakfast:</strong> {order.calendar.day30b} <br />
                                    <strong>Day30 Lunch:</strong> {order.calendar.day30l} <br />
                                    <strong>Day30 Supper:</strong> {order.calendar.day30s} <br />
                                    <strong>Day31 Breakfast:</strong> {order.calendar.day31b} <br />
                                    <strong>Day31 Lunch:</strong> {order.calendar.day31l} <br />
                                    <strong>Day31 Supper:</strong> {order.calendar.day31s} <br />
                                </p>
                                {order.isDelivered ? 
                                <MessageBox variant="success">Delivered at {order.deliveredAt}</MessageBox> :
                                <MessageBox variant="danger">Not Delivered</MessageBox>}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {order.paymentMethod} 
                                </p>
                                {order.isPaid ? 
                                <MessageBox variant="success">Paid at {order.paidAt}</MessageBox> :
                                <MessageBox variant="danger">Not Paid</MessageBox>}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                        {
                            order.orderItems.map((item) => (
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
                                   <div>GHS{order.itemsPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>Shipping</div>
                                   <div>GHS{order.shippingPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>Tax</div>
                                   <div>GHS{order.taxPrice.toFixed(2)}</div>
                                   </div>  
                             </li>
                             <li>
                               <div className="row">
                                   <div>
                                       <strong>Order Total</strong>
                                   </div>
                                   <div> <strong>GHS{order.totalPrice.toFixed(2)}</strong></div>
                                   </div>  
                             </li>
                             
                           </ul>
                     </div>
                 </div>
            </div>
        </div>
    );
}
