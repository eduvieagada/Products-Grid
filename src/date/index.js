import React from 'react';


const DateContainer = (props) => (
    <div>
        {
            new Date().getDay() - new Date(props.itemDate).getDay() > 7 ? <p>props.itemDate</p> : <p>{new Date().getDay() - new Date(props.itemDate).getDay()} days ago</p>
        }
    </div>
);

export default DateContainer;