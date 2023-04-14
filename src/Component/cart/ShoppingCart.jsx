import {useSelector , useDispatch} from 'react-redux';
import {Rating , Button} from '@mui/material'
import { clearCart, deleteCart } from '../../rtk/reducer/cartSlice';
const ShoppingCart = () => {
    const shopping = useSelector(state => state.cart.cart);
    const amount = useSelector(state => state.cart.amount);
    console.log(amount);
    const dispatch = useDispatch();
    const filterationCart = shopping.map((cart)=>(
      <>
            <div key={cart.id} className='row'>
        <div className="col-md-3 mb-3" >
          <img src={cart.images?.[0]} className='img-fluid img-cart' alt={cart.title} />
        </div>
        <div className="col-md-9 mb-5">
          <h3> {cart.title}</h3>
          <h5> {cart.brand}</h5>
          <h6>{cart.description}</h6>
          <Rating name="size-small" defaultValue={cart.rating} size="small" />
          <h6>Stock : {cart.stock} unit</h6>
          <span>price : $ {cart.price}</span>
          <span className='ps-5 text-decoration-line-through'>discount : $ {cart.discountPercentage}</span><br/>
          <Button variant="contained" className='mt-3' onClick={()=> dispatch(deleteCart(cart.id)) }>delete Cart</Button>            
          
        </div>  
        
        </div>
      </>
      
    ))
  return (
    <div className='shopping ms-auto'>
        <div className="container">
        <div className='d-flex justify-content-evenly'>
          <h4 className=''>Items {amount} </h4>
          <Button variant="contained" color='secondary' onClick={()=> dispatch(clearCart()) }>Clear Cart </Button>            
        </div>     
        {amount == 0? 
        <>
                <h3 className='mt-5'>Your Cart is Empty</h3>
        </> :
        <div className='shop'>
        {filterationCart}
        </div>  
      }
        </div>
    </div>
  )
}

export default ShoppingCart