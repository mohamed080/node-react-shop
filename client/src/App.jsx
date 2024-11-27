import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { useSelector } from 'react-redux'
import Checkout from './pages/Checkout'
import PlaceOrder from './pages/PlaceOrder'
import OrderHistory from './pages/OrderHistory'
import OrderConfirmation from './pages/OrderConfirm'


function App() {

  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const {userInfo} = userLoginReducer

  return (
    <Router  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/login" element={userInfo ? <Navigate to= "/"></Navigate> : <Login />} />
        <Route exact path="/register" element={ userInfo ? <Navigate to= "/"></Navigate> : <Register />} />

        <Route path="/order/:id" element={<OrderConfirmation />} />
        <Route exact path="/order-history" element={<OrderHistory/>} />

        <Route exact path="/checkout" element={<Checkout/>} />
        <Route exact path="/placeorder" element={<PlaceOrder/>} />

      </Routes>
    </Router>
  )
}

export default App
