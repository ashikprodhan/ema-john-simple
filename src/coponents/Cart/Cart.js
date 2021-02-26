import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    const total = cart.reduce((total ,prd) => total +prd.price,0);
    const tax = (total /10).toFixed(2);
    const formalNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    let shipping =0;
    if (total > 35) {
        shipping =0 ;
        }
    else if (total > 15) {
        shipping=4.99;
    }
    else if (total > 0) {
        shipping= 12.99;
    }

    return (
        <div>
            <h4>order summary</h4>
            <p>Items ordered {cart.length}</p>
            <p><small>shipping cost {shipping} </small></p>
            <p><small>tax {tax} </small></p>
            <p>Total price { formalNumber(total)+ formalNumber(shipping) + Number(tax)} </p>
        </div>
    );
};

export default Cart;