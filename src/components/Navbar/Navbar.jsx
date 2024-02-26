import React, {useState} from 'react';
import { BagFill, ArrowBarLeft, ArrowBarRight } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [clicked ,setClicked] = useState(false)
    const toggleClick = () =>{
        setClicked(!clicked)
    }

    return (
        <nav className="d-flex bg-danger justify-content-between p-2 align-items-center">
            <Link to="/" className="text-light text-uppercase text-decoration-none">
                <img src="assets/img/logos/logoipsum-329.svg" alt="logo"/>
            </Link>
            <div>
                <ul id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
                    <li>
                        <Link to="/cart" className="text-light p-2 text-uppercase text-decoration-none d-flex align-items-center" aria-current="page"><BagFill className="pe-1"/>Carrito</Link>
                    </li>
                    <li>
                        <Link to="/products" className="text-light p-2 text-uppercase text-decoration-none">Productos</Link>
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <p id="bar" onClick={() => toggleClick()}>
                    {clicked
                    ?
                    <ArrowBarRight className="text-light icon-width"/>
                    :
                    <ArrowBarLeft className="text-light icon-width"/>
                    }
                </p>


            </div>
        </nav>
    );
};

export default Navbar;

