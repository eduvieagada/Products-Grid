import React from 'react';
import Moment from 'moment';


const DateContainer = (props) => {

    let currentDate = new Date();
    let itemDate = new Date(props.itemDate);

    if (currentDate.getdate < itemDate.getDate() || currentDate.getDate() - itemDate.getDate() > 7 || currentDate.getMonth() > itemDate.getMonth()) {
        return <p>{ Moment(itemDate).format("MMMM Do YYYY") }</p>;
    } else {
        let howManyDaysAgo = Math.abs(currentDate.getDay() - itemDate.getDay());

        if (howManyDaysAgo === 0)
            return <p>Today</p>;

        return <p>{ howManyDaysAgo } days ago</p>;
    }
};

export default DateContainer;