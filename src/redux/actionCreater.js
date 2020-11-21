import { UPDATESLIDE } from "./actionContants";
export default function updateSlide(newSlideNum) {
	console.log("calling action.....");
	return {
		type: UPDATESLIDE,
		payload: newSlideNum
	};
}
