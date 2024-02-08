import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart2.png'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <>
      <div className='navbar'>
        <div className="shop">
          <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>SHOPPER</p>
          </div>
          <ul className="nav-menu">
            <li onClick={() => { setMenu("shop") }}>Shop{menu === "shop" ? <hr /> : <></>} </li>
            <li onClick={() => { setMenu("mens") }}>Men{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("women") }}>Women{menu === "women" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kid") }}>Kids{menu === "kid" ? <hr /> : <></>}</li>
          </ul>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
              <div className="nav-cart-count">0</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;




//
{/* <ul className="nav-menu">
<li onClick={() => { setMenu("shop") }}><Link style={{textDecoration: 'none'}} to='/' >Shop</Link>{menu === "shop" ? <hr /> : <></>} </li>
<li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
<li onClick={() => { setMenu("women") }}><Link to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
<li onClick={() => { setMenu("kid") }}><Link to='/kid'>Kids</Link>{menu === "kid" ? <hr /> : <></>}</li>
</ul> */}

{/* <div className="nav-login-cart">
<Link to='/login'> <button>Login</button></Link>
<Link to='/cart'><img src={cart_icon} alt="" /></Link>
  <div className="nav-cart-count">0</div>
</div> */}