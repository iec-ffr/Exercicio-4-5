import React from 'react'
import {useSelector} from 'react-redux'

export const InCart = () =>{
    
    const cartItem = useSelector(state => state.cart)
    
    return(
        <button type="button" className="btn">
            <img width="50px" src={require('../assets/images/cart.png')} alt="carrinho de compras"/> 
            <span className="badge badge-light">{cartItem.length}</span>    
        </button>
    )
}