import React, { Component } from 'react';
import Product from "../app";

class Content extends Component {

    render() {
        let product = this.props.product;

        return (
            <Product key={product.id} price={product.price} size={product.size}
                     picture={product.face}
                     date={product.date}/>
        )
    }
}

export default Content;