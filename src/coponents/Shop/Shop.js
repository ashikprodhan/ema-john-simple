import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {  } from "./Shop.css";


const Shop = () => {
    const firstTen = fakeData.slice(0,10);
   const [product ,setProduct] =useState(firstTen);
   const [cart ,setCart] = useState([]);

   const handleAddProduct =(product) =>{
     
       const newCart =[...cart,product];
       setCart(newCart);
   }
    
    return (
        <div className="shop-container">
            <div className="product-container">  
           {product.map(pd => <Product product={pd} handleAddProduct={handleAddProduct} ></Product>)}
           
           </div>
            <div className="cart-container">
               <Cart cart={cart} ></Cart>
            </div>
           
         
        </div>
    );
};

export default Shop;