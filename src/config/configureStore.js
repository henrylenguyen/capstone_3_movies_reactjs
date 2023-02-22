import { compose, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "reduxs/rootReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
  reducer: rootReducer,
  composeEnhancers,
});
export default store;