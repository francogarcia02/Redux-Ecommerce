const CartItem = ({prod, remove}) => {

    const {name, price, quantity, id} = prod
    return(
        <div className="bg-dark d-flex text-light m-2 p-3 rounded">
            <h5>{name}</h5>
            <h5>total: ${price}</h5>
            <h5>{quantity}</h5>
            <button onClick={() => remove(id, false)}>remove</button>
        </div>
    )
}

export default CartItem