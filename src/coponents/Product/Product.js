import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    // console.log(props);

    const { name, price, seller, stock, img } = props.product;
    return (
        <div className='product' >
            <div>
                <img src={img} alt="" />
            </div>
            <div>

                <h4 className="productName"> {name}</h4>
                <br />
                <p>by {seller}  </p>
                <p><small>${price} </small></p>

                <p><small> only {stock}  left in stock , order-soon</small></p>
                <button 
                    className="main-button" 
                    onClick={()=> props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;