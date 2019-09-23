import {createStore} from 'redux';

const INITIAL_STATE = {
    cart:[]
}

function cartItens(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_CART':
            return {...state, cart: [...state.cart,action.item]};
        case 'SUB_CART':
        
            if (state.cart.find(p => p.id === action.item.id)) {
                return {
                  ...state,
                  cart: state.cart.filter(p => p.id !== action.item.id)
                };
              }
              return state
        default:
            return state;
    }
}

const store = createStore(cartItens);
export default store;