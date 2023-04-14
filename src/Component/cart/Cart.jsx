import {useState , useEffect} from 'react'
import instanceCart from '../../api/instanceCart';
import {Rating , Button} from '@mui/material'
import {useDispatch} from 'react-redux'
import './cart.css'
import { addCart } from '../../rtk/reducer/cartSlice';
const Cart = () => {
    const [cart , setCart] = useState([]);
    const cartFun = ()=>{
        instanceCart.get('products').then(res => setCart(res.data)).catch(err => console.error(err))
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        cartFun()
    }, [])
   
    console.log(cart);
    const filterCarts = cart?.products?.map((cart)=>(
         cart.id <= 28?       
        <div className="row mb-5 ">
            <div className="col-md-3">
            <img src={cart.thumbnail} alt={cart.title} className=' img-cart img-fluid' />
            </div>
            <div className="col-md-9">
            <h3> {cart.title}</h3>
          <h6>   ({cart.stock} unit)</h6>
          <span>price : $ {cart.price}</span>
          <span className='ps-5 text-decoration-line-through'>discount : $ {cart.discountPercentage}</span><br/>
          <Rating name="size-small" defaultValue={cart.rating} size="small" /> <br/>
          <Button variant="contained" color='secondary' className='mt-2'  onClick={()=> dispatch(addCart(cart))}>Add Cart</Button>

            </div>
        </div>: ''
    ))
  return (
    <div className='mt-5 shopping-page'>
        <div className="container">
        <div className="row">
        {filterCarts}
        </div>
        </div>

    </div>
  )
}

export default Cart