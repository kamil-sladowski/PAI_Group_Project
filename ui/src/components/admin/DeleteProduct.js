import React, {Component} from 'react';
import "../../style/style.css";
import {Link} from "react-router-dom";
import {getCategories, getProducts} from "../../utils/get-api";
import {deleteProduct} from "../../utils/delete-api";
import t_shirt_pol from "../../images/pol.jpg";
import t_shirt_arg from "../../images/arg.jpg";
import t_shirt_bel from "../../images/bel.jpg";
import t_shirt_fr from "../../images/fr.jpg";
import default_t_shirt from "../../images/default.png";

var tshirts = {
    "Polish": t_shirt_pol,
    "Argentinean": t_shirt_arg,
    "Belgian": t_shirt_bel,
    "French": t_shirt_fr,
    "default": default_t_shirt
};

class DeleteProduct extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            deletedProductId: 0,
            categories: []
        };
    }

    componentDidMount() {
        this.getProducts();
        this.getCategories();
    }

    getCategories() {
        getCategories().then((categories) => {
            this.setState({categories});
        });
    }

    getProducts() {
        getProducts().then((products) => {
            this.setState({products});
        });
    }

    getRelatedCategoryName(categories, product) {
        for (var idx = 0; idx < categories.length; idx++) {
            if (categories[idx].id === parseInt(product.category)) {
                return categories[idx].name;
            }
        }
    }

    handleDeleteAction(productId) {
        deleteProduct(productId)
        this.setState({deletedProductId: productId})
    }

    render() {
        const {products} = this.state;
        const {categories} = this.state;
        if (this.state.deletedProductId !== 0) {
            var index = products.findIndex(obj => obj.id === this.state.deletedProductId);
            products.splice(index, 1)
        }
        let itemList = products.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={tshirts[item.name]} alt={item.name}/>
                        <a onClick={() => this.handleDeleteAction(item.id)}
                           className="waves-effect waves-teal btn-flat">Delete</a>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{item.name}</span>
                        <p>{item.description}</p>
                        <i>({this.getRelatedCategoryName(categories, item)})</i>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }

};
export default DeleteProduct;
