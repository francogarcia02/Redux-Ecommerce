import {useSelector, useDispatch} from 'react-redux';
import {remove, clear} from '../../actions/cartActions';
import CartItem from './CartItem/CartItem';

const CartList = () => {
    const state = useSelector(state => state)
    const {carrito} = state
    const {cart} = carrito
    const dispatch = useDispatch()

    return(
        <div className="d-grid">
            {cart && cart.map(prod => (
                <CartItem prod={prod} remove={() => dispatch(remove(prod.id, true))}/>
            ))}
        </div>
    )
}

export default CartList