import React from 'react';
import Numeral from 'numeral';

const Price = (props) => {

    let priceInString = props.price;

    // convert from cents to dollar
    let priceInDollar = parseFloat(priceInString) / 100;

    let formattedString = Numeral(priceInDollar).format('$0,0.00');

    return (
            <h3 className="price">{formattedString}</h3>
    );
};

export default Price;