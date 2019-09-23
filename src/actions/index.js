export const ADD_CART = 'ADD_CART'

export function addCart(product){
    return {type: ADD_CART, product}
}