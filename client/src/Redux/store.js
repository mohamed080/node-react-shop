import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { ProductDetailReducer, ProductListReducer } from './Reducers/Product'
import {thunk} from 'redux-thunk'
import { userLoginReducer, userRegisterReducer } from './Reducers/User'
import { cartReducer } from './Reducers/Cart'
import { orderDetailReducer, orderListReducer, orderPaymentReducer, orderReducer } from './Reducers/Order'
const persistConfig = {
    key: 'root',
    storage,
    version: 1
  }


  const rootReducer = combineReducers({
    productListReducer: ProductListReducer,
    productDetailReducer: ProductDetailReducer,
    userLoginReducer: userLoginReducer,
    userRegisterReducer: userRegisterReducer,
    cartReducer: cartReducer,
    orderReducer: orderReducer,
    orderDetailReducer: orderDetailReducer,
    orderPaymentReducer: orderPaymentReducer,
    orderListReducer: orderListReducer
  })


  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = createStore(
    persistedReducer,
     applyMiddleware(thunk))

  export let persistor = persistStore(store)