import { Provider } from 'react-redux';
import './App.css';
import Header from './Componnets/Header';
import ProductList from './Componnets/ProductList';
import appStore from './utils/appStore'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './Componnets/Cart';
import ReactDOM from "react-dom/client";


function App() {
  return (
    <Provider store={appStore}>
    <Header />
    <Outlet />       
    </Provider>
  );
}
export default App;
