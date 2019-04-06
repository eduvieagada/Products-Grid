import React from 'react';
import Numeral from 'numeral';

const Price = (props) => {

    let priceInString = props.price;
    let formattedString = Numeral(priceInString).format('$0,0.00');

    return (
            <h3 className="price">{formattedString}</h3>
    );
};

export default Price;