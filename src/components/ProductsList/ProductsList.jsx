import {useSelector, useDispatch} from 'react-redux';
import {add} from '../../actions/cartActions';
import ProductItem from './ProductItem/ProductItem';



const ProductsList = () =>{
    const state = useSelector(state => state)
    const {carrito} = state
    const {products} = carrito
    const dispatch = useDispatch()

    return(
        <div className="d-flex flex-wrap justify-content-start">
            <h3 className="text-uppercase justify-content-center m-3">Productos</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-start mx-auto">
                {products && products.map(prod => (
                    <ProductItem prod={prod} add={() => dispatch(add(prod.id))} />
                ))
                }
            </div>
        </div>
    )
}

export default ProductsList