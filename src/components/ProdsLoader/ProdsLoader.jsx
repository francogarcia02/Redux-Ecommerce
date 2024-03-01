import { collection, getDocs} from "firebase/firestore";
import {useDispatch} from 'react-redux';
import {create} from '../../actions/cartActions';
import { db } from '../../firestore/config';
import { useState, useEffect } from 'react';

const ProdsLoader = () => {

    const dispatch = useDispatch()
    const [prods, setProds] = useState([])
    const productosDB = collection(db, 'productos');

    useEffect(() => {
        getDocs(productosDB)
        .then((resp) => {
            setProds(
                resp.docs.map(prod=>{
                    return{...prod.data(), id: prod.id}
                })
            )
        })
    }, [productosDB]);

    useEffect(() => {
        dispatch(create(prods));
    }, [dispatch, prods]);

    return(
        <div></div>
    )
}

export default ProdsLoader