import { createStore } from "redux";
import rootReducer from "./reducer.js";

import { generateContractsInitialState } from 'drizzle'
import drizzleOptions from '../drizzle/options'

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions)
}

const store = createStore(
  rootReducer,
  initialState
);

export default store;
