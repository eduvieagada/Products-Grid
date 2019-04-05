import React, { Component } from 'react';
import Product from '../product'
import './style.scss';

class App extends Component {
    render() {
        return (
            <div className="product-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/><Product/><Product/><Product/><Product/>
            </div>
        );
    }
}

export default App;