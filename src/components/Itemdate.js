import './Itemdate.css';
import React from 'react';
function Itemdate(props){
    const day = props.date.toLocaleString('en-US' , {day:'2-digit'});
    const month = props.date.toLocaleString('en-US' , {month:'long'});
    const year = props.date.getFullYear();
    return (<div className='date'>
        <div class="month"> {month}</div>
        <div class = "year"> {year}</div>
        <div class = "day">{day}</div>
    </div>)
}

export default Itemdate;