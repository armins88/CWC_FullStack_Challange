import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import escrowReducer from './Escrows/reducers';


const logger = createLogger({ collapsed: true })
const middleware = [thunk, logger];

const reducers = combineReducers({
  Escrows: escrowReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

export default store;