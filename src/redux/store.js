import { createStore, combineReducers } from "redux";
import SlideReducer from "./reducer";

const rootReducer = combineReducers({
	slideReducer: SlideReducer
});

export default createStore(rootReducer);
