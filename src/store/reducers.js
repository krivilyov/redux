import { combineReducers } from "redux";
import { cardReducer as card } from "./card";

export const reducers = combineReducers({
	card,
});
