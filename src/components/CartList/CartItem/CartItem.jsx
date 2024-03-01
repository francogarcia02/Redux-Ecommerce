import {PlusCircleFill, DashCircleFill, XCircleFill} from 'react-bootstrap-icons';

const CartItem = ({prod, remove, remove_all, add}) => {
    const {name, price, quantity, id, img} = prod
    const total = (price * quantity)

    console.log(prod)

    return(
        <div className="cart-card bg-dark text-light m-2 rounded shadow position-relative">
            <img className="cart-img" src={img} alt="img"/>
            <div className="p-3">
                <h4>{name}</h4>
                <h5>Precio individual: {price}</h5>
                <h5>Total: ${total}</h5>
            </div>
            <div className="cart-buttons d-flex">
                <div className="d-flex align-items-center p-1 me-3">
                    <DashCircleFill id="plus-minus_button" onClick={() => remove(id)}/>
                    <p className="m-0 p-2">{quantity}</p>
                    <PlusCircleFill id="plus-minus_button" onClick={() => add(id)}/>
                </div>
                <div className="d-flex align-items-center p-1 me-3">
                    <XCircleFill id="plus-minus_button" onClick={() => remove_all(id)}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem