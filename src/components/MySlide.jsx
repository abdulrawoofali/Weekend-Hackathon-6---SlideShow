import React from "react";
const MySlide = (props) => {
	return (
		<>
			<h1 data-testid="title">{props.title}</h1>
			<p data-testid="text">{props.text}</p>
		</>
	);
};

export default MySlide;
