import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea para poder utilizar redux devtools en el navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea es para poder hacer peticiones a un server. El middleware traduce.
);

export default store;
