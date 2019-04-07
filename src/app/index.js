import React, {Component} from 'react';
import Product from '../product';
import './style.scss';
import LoadingImage from "../loading";
import Advert from "../advert";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            pageIndex: 1,
            pageSize: 10,
            sortParameter: "id",
            hasMore: true,
            isLoading: false,
            error: false,
            adNo: Math.floor(Math.random() * 1000)
        };

        this.change = this.change.bind(this);

        // on scroll event handler for browser window

        window.onscroll = () => {

            if (this.state.error || this.state.isLoading || !this.state.hasMore) return;

            let wrap = document.getElementById("root");
            let contentHeight = wrap.offsetHeight;
            let offset = window.pageYOffset;
            let y = offset + window.innerHeight

            if (y >= contentHeight) {
                this.setState({pageIndex: this.state.pageIndex + 1})
            }
        }
    }

    componentDidMount() {
        this.updateProductsUi();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.state.sortParameter !== prevState.sortParameter) || (this.state.pageIndex !== prevState.pageIndex))
            this.updateProductsUi();
    }

    change(event) {
        this.setState({products: []})
        this.setState({sortParameter: event.target.value});
    }

    getProducts() {
        return fetch(`http://localhost:3000/api/products?_sort=${this.state.sortParameter}&_page=${this.state.pageIndex}&_limit=${this.state.pageSize}`);
    }

    updateProductsUi() {
        this.setState({isLoading: true});

        this.getProducts()
            .then(response => response.json())
            .then(json => this.setState({products: [...this.state.products, ...json], isLoading: false}));
    }

    generateAdNo() {
        let adNo = Math.random() * 1000;

        while (adNo === this.state.adNo) {
            adNo = Math.random() * 1000;
        }

        this.setState({adNo: adNo});
    }


    render() {
        return (
            <div>
                {this.state.isLoading && <LoadingImage/>}

                <select onChange={this.change} value={this.state.sortParameter}>
                    <option value="price">Price</option>
                    <option value="size">Size</option>
                    <option value="id">Id</option>
                </select>

                <div className="product-list">
                    {
                        this.state.products.map((product, index) => (
                                index % 20 === 0 ?
                                    <div className="advert-and-product">
                                        <Advert adNo={this.generateAdNo()}/>
                                        <Product key={product.id} price={product.price} size={product.size}
                                                 picture={product.face}
                                                 date={product.date}/>
                                    </div>
                                    :

                                    <Product key={product.id} price={product.price} size={product.size}
                                             picture={product.face}
                                             date={product.date}/>


                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;