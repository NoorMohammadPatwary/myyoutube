import { combineReducers } from "redux";
import { counterNumber } from "./incrementdecrement";

export const rootReducer= combineReducers({
    counterNumber,
})