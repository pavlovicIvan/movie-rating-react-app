// Redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./rootReducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export default store;
