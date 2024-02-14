import {ADD, REMOVE, REMOVE_ALL, CLEAR, CREATE} from '../types';

let initialState = {
    products: [],
    cart: []
}

export default function cartReducer(state = initialState, action){
    switch(action.type){
        case CREATE:
            let StateProducts = { ...state, products: [...action.payload]};
            return StateProducts

        case ADD:
            let newItem = state.products.find(prod => prod.id === action.payload)
            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
            ?
            {
            ...state,
            cart: state.cart.map(item =>
                item.id === newItem.id
                ?{...item, quantity: item.quantity + 1}
                :{...item}
                )
            }
            :
            {
            ...state,
            cart: [...state.cart, {...newItem, quantity: 1}]
            }
        case REMOVE:
            let itemToDelete = state.cart.find(prod => prod.id === action.payload)
            return itemToDelete.quantity > 1
            ?
            {
            ...state,
            cart: state.cart.map(item=>
                    item.id === action.payload
                    ? {...item, quantity: item.quantity - 1}
                    : item
                )
            }
            :
            {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
            }

        case REMOVE_ALL:
            let newState = {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
                }

            return newState
        case CLEAR:
            return initialState
        default:
            return state

    }
}

