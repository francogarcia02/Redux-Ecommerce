import {Link} from 'react-router-dom';
import {BagFill} from 'react-bootstrap-icons';

const Navbar = () => {
    return(
        <div className="navbar justify-content-between bg-danger text-light p-2 ps-3 pe-3">
            <h1 className="text-center">Redux-Ecommerce</h1>
            <div className="d-flex">
                    <Link className="text-decoration-none text-light bag-width pe-4" to="/cart"><BagFill/></Link>
                    <Link className="text-decoration-none text-light pe-2" to="/products">Productos</Link>
            </div>
        </div>
    )
}

export default Navbar