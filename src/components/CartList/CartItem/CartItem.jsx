import {PlusCircleFill, DashCircleFill, XCircleFill} from 'react-bootstrap-icons';

const CartItem = ({prod, remove, remove_all, add}) => {
    const {name, price, quantity, id} = prod
    const total = (price * quantity)

    return(
        <div className="bg-dark d-flex text-light m-2 p-3 rounded justify-content-between">
            <h4>{name}</h4>
            <div>
                <h5>Precio individual: {price}</h5>
                <h5>Total: ${total}</h5>
            </div>
            <div className="d-flex align-items-center">
                <DashCircleFill id="plus-minus_button" onClick={() => remove(id)}/>
                <p className="m-0 p-2">{quantity}</p>
                <PlusCircleFill id="plus-minus_button" onClick={() => add(id)}/>
            </div>
            <div className="d-flex align-items-center">
                <XCircleFill id="plus-minus_button" onClick={() => remove_all(id)}/>
            </div>
        </div>
    )
}

export default CartItem