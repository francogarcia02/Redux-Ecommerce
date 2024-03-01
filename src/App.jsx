import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductsList from './components/ProductsList/ProductsList';
import CartList from './components/CartList/CartList';
import Landing from './components/Landing/Landing';
import ProdsLoader from './components/ProdsLoader/ProdsLoader';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
            <ProdsLoader/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/products" element={<ProductsList/>}/>
                    <Route path="/cart" element={<CartList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
