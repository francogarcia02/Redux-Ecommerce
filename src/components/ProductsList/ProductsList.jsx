import {useSelector, useDispatch} from 'react-redux';
import {add, create} from '../../actions/cartActions';
import ProductItem from './ProductItem/ProductItem';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../../firestore/config';
import { useState, useEffect } from 'react';

const ProductsList = () =>{
    const state = useSelector(state => state)
    const {carrito} = state
    const {products, cart} = carrito
    const dispatch = useDispatch()
    const [prods, setProds] = useState([])
    const productosDB = collection(db, 'productos');

    getDocs(productosDB)
    .then((resp) => {
        setProds(
            resp.docs.map(prod=>{
                return{...prod.data(), id: prod.id}
            })
        )
    })

    useEffect(() => {
        dispatch(create(prods));
    }, [dispatch, prods]);

    console.log(cart)

    return(
        <div className="d-flex flex-wrap justify-content-center">
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