// import styles from './App.module.css'
import './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Favourites from './Pages/Fave'
import LoginSignup from './Pages/LoginSignup'


function App() {

  return (
    <div>
    <BrowserRouter scrollTtoTop={false}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/shoesAndSlides' element={<ShopCategory category="shoesAndSlides"/>}/>
      <Route path='/topsAndTees' element={<ShopCategory category="topsAndTees"/>}/>
      <Route path='/hoodiesAndPullovers' element={<ShopCategory category="hoodiesAndPullovers"/>}/>
      <Route path='/shorts' element={<ShopCategory category="shorts"/>}/>
      <Route path='/accessoriesAndEquip' element={<ShopCategory category="accessoriesAndEquip"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/fave' element={<Favourites/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  )
}

export default App
