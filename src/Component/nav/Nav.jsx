import React from 'react'
import './nav.css'
// import {GiShoppingBag} from 'react-icons/gi'
// import {AiTwotoneHeart} from 'react-icons/ai'
import {AiTwotoneHeart  , AiOutlineHome , AiOutlineShoppingCart} from 'react-icons/ai'
import {Box , BottomNavigation , BottomNavigationAction} from '@mui/material'
import {BiShoppingBag} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Nav = () => {
  const amout = useSelector(state => state.cart.amount);
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  return (
    <div className="navigation">
          <Box>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction id='icon' label = 'Home' icon={<AiOutlineHome />} onClick={()=> navigate('/')} />
      {/* <BottomNavigationAction id='icon' label = 'Shop' onClick={()=> navigate('shop')}   icon={<AiOutlineShoppingCart />} /> */}
               <span className='amount'>{amout}</span>
    <BottomNavigationAction id='icon' label ='Cart'  onClick={()=> navigate('/cart')}  icon={<BiShoppingBag />} />
      

    </BottomNavigation>
  </Box>
    </div>
  )
}

export default Nav;