import './App.css';
import Cart from './Component/cart/Cart';
import ShoppingCart from './Component/cart/ShoppingCart';
import Nav from './Component/nav/Nav';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
const App = () => {
 
  return (
    <div className='app'>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element ={<Cart />} />
      <Route path='/cart' element ={<ShoppingCart />} />
      </Routes>    
    </BrowserRouter>
 
    </div>
  )
}
export default App;
