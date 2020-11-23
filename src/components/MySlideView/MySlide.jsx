import React from "react";
import { connect } from "react-redux";
const MySlide = (props) => {
	console.log(props.slides[props.slideNo].title);
	return (
		<>
			<h1 data-testid="title">{props.slides[props.slideNo].title}</h1>
			<p data-testid="text">{props.slides[props.slideNo].text}</p>
			{props.children}
		</>
	);
};

const mapStateToProps = (store) => {
	return {
		slideNo: store.slideReducer.slideNo,
		slides: store.slideReducer.slides
	};
};

export default connect(mapStateToProps, null)(MySlide);
