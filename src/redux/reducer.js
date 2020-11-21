import { UPDATESLIDE } from "./actionContants";
import slides from "../data";
import React from "react";
console.log("your data", slides);
const INIT_STATE = {
	slideNo: 0,
	slides: [...slides]
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case UPDATESLIDE:
			return {
				...state,
				slideNo: action.payload
			};
		default:
			return state;
	}
};
