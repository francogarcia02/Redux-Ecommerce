import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar justify-content-between bg-danger text-light p-2">
            <h1 className="text-center">Redux-Ecommerce</h1>
            <div>
                <Link className="text-decoration-none text-light" to="/products">Productos</Link>
            </div>
        </div>
    )
}

export default Navbar