import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Map from './map'


function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar/>
      {/* <Map />
      <Routes>
        <Route path='/' element={shop}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/mens' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
