import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductsList from './components/ProductsList/ProductsList';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/products" element={<ProductsList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
