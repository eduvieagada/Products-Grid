import React from 'react';

const Advert = (props) => (
    <img className="ad ui-item" src={"/ads/?r=" + props.adNo }/>
);

export default Advert;


// Math.floor(Math.random()*1000)