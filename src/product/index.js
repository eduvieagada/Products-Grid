import React from 'react';
import './style.scss';
import ProductPic from './productPic';
import DateContainer from '../date';
import Price from '../price';

const Product = (props) => (
    <div className="product-container">
        <div className="product">

            <div className="product-size">
                <Price price={props.price}/>
            </div>

            <ProductPic pictureSize={props.size} picture={props.picture}/>

            <div className="extra-info">
                <DateContainer itemDate={props.date}/>
                <p>{props.size}</p>
            </div>
        </div>
    </div>
);

export default Product;