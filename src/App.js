import { Provider } from 'react-redux';
import './App.css';
import Header from './Componnets/Header';
import ProductList from './Componnets/ProductList';
import appStore from './utils/appStore'

function App() {
  return (
    <Provider store={appStore}>
    <Header />
    <ProductList />
      
    </Provider>
  );
}

export default App;
