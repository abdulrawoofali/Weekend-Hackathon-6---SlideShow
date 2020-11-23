import React from "react";
import { connect } from "react-redux";
import updateSlide from "../../redux/actionCreater";
const [NEXT, PREV, RESART] = ["next", "prev", "resart"];

const ButtonList = (props) => {
	const handleClick = (event) => {
		const clickedButtonName = event.target.dataset.testid.slice(7);
		let newPos = props.currentSlide;

		switch (clickedButtonName) {
			case NEXT:
				console.log("dealting next...");
				++newPos;
				break;
			case PREV:
				--newPos;
				break;
			case RESART:
				newPos = 0;
				break;
			default:
				break;
		}
		props.updateSlide(newPos);
		console.log(newPos);
	};
	return (
		<>
			<button
				id="prev"
				onClick={handleClick}
				data-testid={`button-${PREV}`}
				disabled={props.currentSlide === 0 ? true : false}>
				Prev
			</button>
			<button
				onClick={handleClick}
				data-testid={`button-${NEXT}`}
				disabled={
					props.currentSlide === props.slides.length - 1 ? true : false
				}>
				Next
			</button>
			<button
				onClick={handleClick}
				data-testid={`button-${RESART}`}
				disabled={props.currentSlide === 0 ? true : false}>
				Restart
			</button>
		</>
	);
};
const mapStateToProps = (store) => {
	return {
		currentSlide: store.slideReducer.slideNo,
		slides: store.slideReducer.slides
	};
};
export default connect(mapStateToProps, { updateSlide })(ButtonList);
