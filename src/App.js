// App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from '../src/Components/Footer/Footer'
import man_banner from '../src/Components/Assets/man_banner.jpg'
import woman_banner from '../src/Components/Assets/women_banner.jpg'
import kids_banner from '../src/Components/Assets/Kids_banner.jpg'

function App() {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          {/* <Route path='/mens' element={<ShopCategory category="mens" />} /> */}
          <Route path='/men' element={<ShopCategory banner={man_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={woman_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
