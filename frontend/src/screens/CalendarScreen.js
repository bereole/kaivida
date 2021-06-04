import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveCalendar } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function CalendarScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { calendar } = cart;

  if(!userInfo) {
    props.history.push('/signin');
  }
    const [month, setMonth] = useState(calendar.month);
    const [day1b, setDay1b] = useState(calendar.day1b);
    const [day1l, setDay1l] = useState(calendar.day1l);
    const [day1s, setDay1s] = useState(calendar.day1s);

    const [day2b, setDay2b] = useState(calendar.day2b);
    const [day2l, setDay2l] = useState(calendar.day2l);
    const [day2s, setDay2s] = useState(calendar.day2s);

    const [day3b, setDay3b] = useState(calendar.day3b);
    const [day3l, setDay3l] = useState(calendar.day3l);
    const [day3s, setDay3s] = useState(calendar.day3s);

    const [day4b, setDay4b] = useState(calendar.day4b);
    const [day4l, setDay4l] = useState(calendar.day4l);
    const [day4s, setDay4s] = useState(calendar.day4s);

    const [day5b, setDay5b] = useState(calendar.day5b);
    const [day5l, setDay5l] = useState(calendar.day5l);
    const [day5s, setDay5s] = useState(calendar.day5s);

    const [day6b, setDay6b] = useState(calendar.day6b);
    const [day6l, setDay6l] = useState(calendar.day6l);
    const [day6s, setDay6s] = useState(calendar.day6s);

    const [day7b, setDay7b] = useState(calendar.day7b);
    const [day7l, setDay7l] = useState(calendar.day7l);
    const [day7s, setDay7s] = useState(calendar.day7s);

    const [day8b, setDay8b] = useState(calendar.day8b);
    const [day8l, setDay8l] = useState(calendar.day8l);
    const [day8s, setDay8s] = useState(calendar.day8s);

    const [day9b, setDay9b] = useState(calendar.day9b);
    const [day9l, setDay9l] = useState(calendar.day9l);
    const [day9s, setDay9s] = useState(calendar.day9s);

    const [day10b, setDay10b] = useState(calendar.day10b);
    const [day10l, setDay10l] = useState(calendar.day10l);
    const [day10s, setDay10s] = useState(calendar.day10s);

    const [day11b, setDay11b] = useState(calendar.day11b);
    const [day11l, setDay11l] = useState(calendar.day11l);
    const [day11s, setDay11s] = useState(calendar.day11s);

    const [day12b, setDay12b] = useState(calendar.day12b);
    const [day12l, setDay12l] = useState(calendar.day12l);
    const [day12s, setDay12s] = useState(calendar.day12s);

    const [day13b, setDay13b] = useState(calendar.day13b);
    const [day13l, setDay13l] = useState(calendar.day13l);
    const [day13s, setDay13s] = useState(calendar.day13s);

    const [day14b, setDay14b] = useState(calendar.day14b);
    const [day14l, setDay14l] = useState(calendar.day14l);
    const [day14s, setDay14s] = useState(calendar.day14s);

    const [day15b, setDay15b] = useState(calendar.day15b);
    const [day15l, setDay15l] = useState(calendar.day15l);
    const [day15s, setDay15s] = useState(calendar.day15s);

    const [day16b, setDay16b] = useState(calendar.day16b);
    const [day16l, setDay16l] = useState(calendar.day16l);
    const [day16s, setDay16s] = useState(calendar.day16s);

    const [day17b, setDay17b] = useState(calendar.day17b);
    const [day17l, setDay17l] = useState(calendar.day17l);
    const [day17s, setDay17s] = useState(calendar.day17s);

    const [day18b, setDay18b] = useState(calendar.day18b);
    const [day18l, setDay18l] = useState(calendar.day18l);
    const [day18s, setDay18s] = useState(calendar.day18s);

    const [day19b, setDay19b] = useState(calendar.day19b);
    const [day19l, setDay19l] = useState(calendar.day19l);
    const [day19s, setDay19s] = useState(calendar.day19s);

    const [day20b, setDay20b] = useState(calendar.day20b);
    const [day20l, setDay20l] = useState(calendar.day20l);
    const [day20s, setDay20s] = useState(calendar.day20s);

    const [day21b, setDay21b] = useState(calendar.day21b);
    const [day21l, setDay21l] = useState(calendar.day21l);
    const [day21s, setDay21s] = useState(calendar.day21s);

    const [day22b, setDay22b] = useState(calendar.day22b);
    const [day22l, setDay22l] = useState(calendar.day22l);
    const [day22s, setDay22s] = useState(calendar.day22s);

    const [day23b, setDay23b] = useState(calendar.day23b);
    const [day23l, setDay23l] = useState(calendar.day23l);
    const [day23s, setDay23s] = useState(calendar.day23s);

    const [day24b, setDay24b] = useState(calendar.day24b);
    const [day24l, setDay24l] = useState(calendar.day24l);
    const [day24s, setDay24s] = useState(calendar.day24s);

    const [day25b, setDay25b] = useState(calendar.day25b);
    const [day25l, setDay25l] = useState(calendar.day25l);
    const [day25s, setDay25s] = useState(calendar.day25s);

    const [day26b, setDay26b] = useState(calendar.day26b);
    const [day26l, setDay26l] = useState(calendar.day26l);
    const [day26s, setDay26s] = useState(calendar.day26s);

    const [day27b, setDay27b] = useState(calendar.day27b);
    const [day27l, setDay27l] = useState(calendar.day27l);
    const [day27s, setDay27s] = useState(calendar.day27s);

    const [day28b, setDay28b] = useState(calendar.day28b);
    const [day28l, setDay28l] = useState(calendar.day28l);
    const [day28s, setDay28s] = useState(calendar.day28s);

    const [day29b, setDay29b] = useState(calendar.day29b);
    const [day29l, setDay29l] = useState(calendar.day29l);
    const [day29s, setDay29s] = useState(calendar.day29s);

    const [day30b, setDay30b] = useState(calendar.day30b);
    const [day30l, setDay30l] = useState(calendar.day30l);
    const [day30s, setDay30s] = useState(calendar.day30s);

    const [day31b, setDay31b] = useState(calendar.day31b);
    const [day31l, setDay31l] = useState(calendar.day31l);
    const [day31s, setDay31s] = useState(calendar.day31s);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveCalendar({
            month, 
            day1b, day1l, day1s, 
            day2b, day2l, day2s,
            day3b, day3l, day3s,
            day4b, day4l, day4s,
            day5b, day5l, day5s,
            day6b, day6l, day6s,
            day7b, day7l, day7s,
            day8b, day8l, day8s,
            day9b, day9l, day9s,
            day10b, day10l, day10s,
            day11b, day11l, day11s,
            day12b, day12l, day12s,
            day13b, day13l, day13s,
            day14b, day14l, day14s,
            day15b, day15l, day15s,
            day16b, day16l, day16s,
            day17b, day17l, day17s,
            day18b, day18l, day18s,
            day19b, day19l, day19s,
            day20b, day20l, day20s,
            day21b, day21l, day21s,
            day22b, day22l, day22s,
            day23b, day23l, day23s,
            day24b, day24l, day24s,
            day25b, day25l, day25s,
            day26b, day26l, day26s,
            day27b, day27l, day27s,
            day28b, day28l, day28s,
            day29b, day29l, day29s,
            day30b, day30l, day30s,
            day31b, day31l, day31s,
        }));
        props.history.push('/payment');
    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Set up Your Calendar</h1>
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <input 
                      type="text" 
                      id="month" 
                      placeholder="Enter Month" 
                      value={month} 
                      onChange={(e) => setMonth(e.target.value)} 
                      required
                    ></input>
                </div>
                <div>
                    <label htmlFor="day1">Day 1</label>
                    <select 
                      type="text" 
                      id="day1"  
                      value={day1b} 
                      onChange={(e) => setDay1b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="fo">Food</option>
                      <option value="fod">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day1" 
                      value={day1l} 
                      onChange={(e) => setDay1l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day1"  
                      value={day1s} 
                      onChange={(e) => setDay1s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="day2">Day 2</label>
                    <select 
                      type="text" 
                      id="day2"  
                      value={day2b} 
                      onChange={(e) => setDay2b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day2" 
                      value={day2l} 
                      onChange={(e) => setDay2l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day2"  
                      value={day2s} 
                      onChange={(e) => setDay2s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day3">Day 3</label>
                    <select 
                      type="text" 
                      id="day3"  
                      value={day3b} 
                      onChange={(e) => setDay3b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day3" 
                      value={day3l} 
                      onChange={(e) => setDay3l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day3"  
                      value={day3s} 
                      onChange={(e) => setDay3s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day4">Day 4</label>
                    <select 
                      type="text" 
                      id="day4"  
                      value={day4b} 
                      onChange={(e) => setDay4b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day4" 
                      value={day4l} 
                      onChange={(e) => setDay4l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day4"  
                      value={day4s} 
                      onChange={(e) => setDay4s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day5">Day 5</label>
                    <select 
                      type="text" 
                      id="day5"  
                      value={day5b} 
                      onChange={(e) => setDay5b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day5" 
                      value={day5l} 
                      onChange={(e) => setDay5l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day5"  
                      value={day5s} 
                      onChange={(e) => setDay5s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day6">Day 6</label>
                    <select 
                      type="text" 
                      id="day6"  
                      value={day6b} 
                      onChange={(e) => setDay6b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day6" 
                      value={day6l} 
                      onChange={(e) => setDay6l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day6"  
                      value={day6s} 
                      onChange={(e) => setDay6s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day7">Day 7</label>
                    <select 
                      type="text" 
                      id="day7"  
                      value={day7b} 
                      onChange={(e) => setDay7b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day7" 
                      value={day7l} 
                      onChange={(e) => setDay7l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day7"  
                      value={day7s} 
                      onChange={(e) => setDay7s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day8">Day 8</label>
                    <select 
                      type="text" 
                      id="day8"  
                      value={day8b} 
                      onChange={(e) => setDay8b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day8" 
                      value={day8l} 
                      onChange={(e) => setDay8l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day8"  
                      value={day8s} 
                      onChange={(e) => setDay8s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day9">Day 9</label>
                    <select 
                      type="text" 
                      id="day9"  
                      value={day9b} 
                      onChange={(e) => setDay9b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day9" 
                      value={day9l} 
                      onChange={(e) => setDay9l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day9"  
                      value={day9s} 
                      onChange={(e) => setDay9s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day10">Day 10</label>
                    <select 
                      type="text" 
                      id="day10"  
                      value={day10b} 
                      onChange={(e) => setDay10b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day10" 
                      value={day10l} 
                      onChange={(e) => setDay10l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day10"  
                      value={day10s} 
                      onChange={(e) => setDay10s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day11">Day 11</label>
                    <select 
                      type="text" 
                      id="day11"  
                      value={day11b} 
                      onChange={(e) => setDay11b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day11" 
                      value={day11l} 
                      onChange={(e) => setDay11l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day11"  
                      value={day11s} 
                      onChange={(e) => setDay11s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day12">Day 12</label>
                    <select 
                      type="text" 
                      id="day12"  
                      value={day12b} 
                      onChange={(e) => setDay12b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day12" 
                      value={day12l} 
                      onChange={(e) => setDay12l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day12"  
                      value={day12s} 
                      onChange={(e) => setDay12s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day13">Day 13</label>
                    <select 
                      type="text" 
                      id="day13"  
                      value={day13b} 
                      onChange={(e) => setDay13b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day13" 
                      value={day13l} 
                      onChange={(e) => setDay13l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day13"  
                      value={day13s} 
                      onChange={(e) => setDay13s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day14">Day 14</label>
                    <select 
                      type="text" 
                      id="day14"  
                      value={day14b} 
                      onChange={(e) => setDay14b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day14" 
                      value={day14l} 
                      onChange={(e) => setDay14l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day14"  
                      value={day14s} 
                      onChange={(e) => setDay14s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day15">Day 15</label>
                    <select 
                      type="text" 
                      id="day15"  
                      value={day15b} 
                      onChange={(e) => setDay15b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day15" 
                      value={day15l} 
                      onChange={(e) => setDay15l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day15"  
                      value={day15s} 
                      onChange={(e) => setDay15s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day16">Day 16</label>
                    <select 
                      type="text" 
                      id="day16"  
                      value={day16b} 
                      onChange={(e) => setDay16b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day16" 
                      value={day16l} 
                      onChange={(e) => setDay16l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day16"  
                      value={day16s} 
                      onChange={(e) => setDay16s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day17">Day 17</label>
                    <select 
                      type="text" 
                      id="day17"  
                      value={day17b} 
                      onChange={(e) => setDay17b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day17" 
                      value={day17l} 
                      onChange={(e) => setDay17l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day17"  
                      value={day17s} 
                      onChange={(e) => setDay17s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day18">Day 18</label>
                    <select 
                      type="text" 
                      id="day18"  
                      value={day18b} 
                      onChange={(e) => setDay18b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day18" 
                      value={day18l} 
                      onChange={(e) => setDay18l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day18"  
                      value={day18s} 
                      onChange={(e) => setDay18s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day19">Day 19</label>
                    <select 
                      type="text" 
                      id="day19"  
                      value={day19b} 
                      onChange={(e) => setDay19b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day19" 
                      value={day19l} 
                      onChange={(e) => setDay19l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day19"  
                      value={day19s} 
                      onChange={(e) => setDay19s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day20">Day 20</label>
                    <select 
                      type="text" 
                      id="day20"  
                      value={day20b} 
                      onChange={(e) => setDay20b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day20" 
                      value={day20l} 
                      onChange={(e) => setDay20l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day20"  
                      value={day20s} 
                      onChange={(e) => setDay20s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day21">Day 21</label>
                    <select 
                      type="text" 
                      id="day21"  
                      value={day21b} 
                      onChange={(e) => setDay21b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day21" 
                      value={day21l} 
                      onChange={(e) => setDay21l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day21"  
                      value={day21s} 
                      onChange={(e) => setDay21s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day22">Day 22</label>
                    <select 
                      type="text" 
                      id="day22"  
                      value={day22b} 
                      onChange={(e) => setDay22b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day22" 
                      value={day22l} 
                      onChange={(e) => setDay22l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day22"  
                      value={day22s} 
                      onChange={(e) => setDay22s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day23">Day 23</label>
                    <select 
                      type="text" 
                      id="day23"  
                      value={day23b} 
                      onChange={(e) => setDay23b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day23" 
                      value={day23l} 
                      onChange={(e) => setDay23l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day23"  
                      value={day23s} 
                      onChange={(e) => setDay23s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day24">Day 24</label>
                    <select 
                      type="text" 
                      id="day24"  
                      value={day24b} 
                      onChange={(e) => setDay24b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day24" 
                      value={day24l} 
                      onChange={(e) => setDay24l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day24"  
                      value={day24s} 
                      onChange={(e) => setDay24s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day25">Day 25</label>
                    <select 
                      type="text" 
                      id="day25"  
                      value={day25b} 
                      onChange={(e) => setDay25b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day25" 
                      value={day25l} 
                      onChange={(e) => setDay25l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day25"  
                      value={day25s} 
                      onChange={(e) => setDay25s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day26">Day 26</label>
                    <select 
                      type="text" 
                      id="day26"  
                      value={day26b} 
                      onChange={(e) => setDay26b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day26" 
                      value={day26l} 
                      onChange={(e) => setDay26l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day26"  
                      value={day26s} 
                      onChange={(e) => setDay26s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day27">Day 27</label>
                    <select 
                      type="text" 
                      id="day27"  
                      value={day27b} 
                      onChange={(e) => setDay27b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day27" 
                      value={day27l} 
                      onChange={(e) => setDay27l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day27"  
                      value={day27s} 
                      onChange={(e) => setDay27s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day28">Day 28</label>
                    <select 
                      type="text" 
                      id="day28"  
                      value={day28b} 
                      onChange={(e) => setDay28b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day28" 
                      value={day28l} 
                      onChange={(e) => setDay28l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day28"  
                      value={day28s} 
                      onChange={(e) => setDay28s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day29">Day 29</label>
                    <select 
                      type="text" 
                      id="day29"  
                      value={day29b} 
                      onChange={(e) => setDay29b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day29" 
                      value={day29l} 
                      onChange={(e) => setDay29l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day29"  
                      value={day29s} 
                      onChange={(e) => setDay29s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day30">Day 30</label>
                    <select 
                      type="text" 
                      id="day30"  
                      value={day30b} 
                      onChange={(e) => setDay30b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day30" 
                      value={day30l} 
                      onChange={(e) => setDay30l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day30"  
                      value={day30s} 
                      onChange={(e) => setDay30s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="day31">Day 31</label>
                    <select 
                      type="text" 
                      id="day31"  
                      value={day31b} 
                      onChange={(e) => setDay31b(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Breakfast</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day31" 
                      value={day31l} 
                      onChange={(e) => setDay31l(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Lunch</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                    <select 
                      type="text" 
                      id="day31"  
                      value={day31s} 
                      onChange={(e) => setDay31s(e.target.value)} 
                      required
                    >
                      <option value="food">Enter Supper</option>
                      <option value="food">Food</option>
                      <option value="food">Food</option>
                    </select>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
}
