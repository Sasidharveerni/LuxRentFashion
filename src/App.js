
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ProductSearchPage from './components/ProductSearchPage';
import ProductDetails from './components/ProductDetails';
import { Provider } from 'react-redux';
import store from './store/index';
import ConfirmOrder from './components/ConfirmOrder';
import OrderPlaced from './components/OrderPlaced';
import StyleWithUs from './components/StyleWithUs';

function App() {
  return (
    <>
    <Provider store={store}>

    <BrowserRouter>

    <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductSearchPage />} />
        <Route path='/product/rent' element={<ProductDetails />} />
        <Route path='/order/placed' element= {<OrderPlaced />} />
        <Route path='/confirm/order' element = {<ConfirmOrder />} />
        <Route path='/stylewithus' element = {<StyleWithUs />} />
    </Routes>
    
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
