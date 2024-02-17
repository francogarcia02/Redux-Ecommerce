import { Suspense } from 'react';

const ProductItem = ({prod, add}) => {
    let {name, price, id, img} = prod

    return(
        <div className="card-width bg-dark text-light d-flex justify-content-start align-items-start m-2 shadow flex-column rounded">
            <Suspense fallback={<p className="text-light" >Loading...</p>}>
                <img className="img-width" src={img} alt="img" loading="lazy"/>
            </Suspense>
            <div className="p-2">
                <h5 className="m-0 p-1">{name}</h5>
                <p className="m-0 p-1">${price}</p>
                <button className="btn btn-primary" onClick={ () => add(id) }>add</button>
            </div>
        </div>
    )
}

export default ProductItem