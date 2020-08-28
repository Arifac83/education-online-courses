import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
  
        let total=0;
        for (let i = 0; i < cart.length; i++) {
            const course = cart[i];
            total = total+ parseFloat(course.price);
        }
        const totalPrice = total.toFixed(2);
    return (
        <div className="cart-container my-5 ml-3">         
             <h5><FontAwesomeIcon icon={faShoppingCart}/> Course Ordered Summary </h5>
             <h6>Total Course : {cart.length}</h6>
             <h6 style={{color:"#C20130",fontWeight:"700"}}>Total Price : ${totalPrice}</h6> 
             
        </div>
    );
};

export default Cart;