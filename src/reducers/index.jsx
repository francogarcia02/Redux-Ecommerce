import {combineReducers} from 'redux';
import cartReducer from './cartReducer';

const reducer = combineReducers({
    carrito: cartReducer,
});

export default reducer