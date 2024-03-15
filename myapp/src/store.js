import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import { registerUserReducer,loginUserReducer, getAllUsersReducer } from "./reducers/userReducer"
import { addPizzaReducer, getAllPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer } from "./reducers/pizzaReducer"
import { cartReducer } from "./reducers/cartReducer"
import { allUserOrdersReducer, getUserOrdersReducer, placeOrderReducer } from "./reducers/orderReducer"

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const rootReducer=combineReducers({
    
    getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,

})


const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
    cartReducer: {
      cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
      },
  
  };
const middleware=[thunk]

const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store


