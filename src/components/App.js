import MainPage from '../components/MainPage/MainPage'
import products_store from '../store/products_store';
import ProductsPage from './ProductsPage';
import Header from '../pages/Header/Header';
import FilteredProducts from '../pages/FilteredProducts/FilteredProducts';
import NewsPage from '../pages/News/NewsPage';
import MonitorsSort from './ProductsFilter/Monitors/MonitorsSort';
import Login from '../pages/Auth/Login/Login';
// import pr from '../store/products_store';

import { observer } from 'mobx-react-lite';

import { Route, Routes, Link } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Payment from '../pages/Payment/Payment';
import Register from '../pages/Auth/Register/Register';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';
import ProductPage from '../pages/ProductPage/ProductPage';
import Footer from '../pages/Footer/Footer';

import './App.css'


const App = () => {
    return (
        <div>
            <Header />
            {/* <NewsPage/> */}

            {/* <Login/> */}
            {/* <FilteredProducts/> */}


            {/* <MainPage/>  */}


            {/* <ProductsPage/> */}
            <div style={{minHeight:"980px"}} >
                {products_store.isLogin ?
                    <Routes>


                        <Route path='*' element={<MainPage />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/products' element={<FilteredProducts />} />
                        <Route path='/productPage' element={<ProductPage />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/news' element={<NewsPage />} />

                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/*' element={<Login />} />

                        {products_store.isAdmin ?
                            <Route path='/admin' element={<Admin />} /> :
                            <Route path='/admin' element={<MainPage />} />

                        }
                    </Routes>}
            </div>


            <Footer />

        </div>
    );
}

export default observer(App)