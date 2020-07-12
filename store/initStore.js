import {rootReducer} from "./rootReducers";
import { createStore } from "redux";

export const initStore = (state) =>{
  return createStore(rootReducer,state)
}