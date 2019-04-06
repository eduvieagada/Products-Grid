import React, { Component } from 'react';
import Product from '../product';
import './style.scss';
import DateContainer from '../date';

class App extends Component {
    render() {
        return (
            <div className="product-list">
                <DateContainer itemDate={new Date("Wed Apr 03 2019 05:18:55 GMT+0100 (West Africa Standard Time)")}/>
                {/*<Product/>*/}
                {/*<Product/>*/}
                {/*<Product/>*/}
                {/*<Product/>*/}
                {/*<Product/>*/}
                {/*<Product/><Product/><Product/><Product/><Product/>*/}
            </div>
        );
    }
}

export default App;