import React from 'react';
import Moment from 'moment';


const DateContainer = (props) => {

    let currentDate = new Date();
    let itemDate = new Date(props.itemDate);

    if (currentDate.getDate() - itemDate.getDate() > 7 || currentDate.getMonth() > itemDate.getMonth()) {
        return <p>{ Moment(itemDate).format("MMMM Do YYYY") }</p>
    } else {
        return <p>{ currentDate.getDay() - itemDate.getDay() } days ago</p>
    }
};

export default DateContainer;