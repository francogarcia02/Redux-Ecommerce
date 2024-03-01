import {useSelector, useDispatch} from 'react-redux';
import {remove, clear, add} from '../../actions/cartActions';
import CartItem from './CartItem/CartItem';

const CartList = () => {
    const state = useSelector(state => state)
    const {carrito} = state
    const {cart} = carrito
    const dispatch = useDispatch()

    return(
        <div className="d-grid">
            {cart.length >= 1 ?
                <div>
                    <div className="cart-content">
                    {cart.map(prod => (
                        <CartItem
                          prod={prod}
                          remove={() => dispatch(remove(prod.id, false))}
                          remove_all={() => dispatch(remove(prod.id, true))}
                          add={() => dispatch(add(prod.id))}
                         />
                    ))}
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger m-1" onClick={()=>dispatch(clear())}>Vaciar</button>
                        <button className="btn btn-primary m-1" >Comprar</button>
                    </div>
                </div>
                :
                <div className="bg-dark d-flex text-light m-2 p-3 rounded justify-content-center">
                    <h3>No hay productos en el carrito</h3>
                </div>
            }
        </div>
    )
}

export default CartList