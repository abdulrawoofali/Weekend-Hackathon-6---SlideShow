import React, { Component, useState } from "react";
import "../styles/App.css";
const App = (props) => {
	const { slides } = props;

	const [slideNo, setSlideNo] = useState(0);

	let title = slides[slideNo].title;
	let text = slides[slideNo].text;

	function handleClick(action) {
		if (action === "prev") {
			let newSlideNo = slideNo - 1;
			setSlideNo(newSlideNo);
		} else if (action === "next") {
			let newSlideNo = slideNo + 1;
			setSlideNo(newSlideNo);
		} else if (action === "restart") {
			setSlideNo(0);
		}
	}

	return (
		<>
			<h1 data-testid="title">{title}</h1>
			<p data-testid="text">{text}</p>
			<button
				onClick={() => handleClick("prev")}
				data-testid="button-prev"
				disabled={slideNo === 0 ? true : false}>
				Prev
			</button>
			<button
				onClick={() => handleClick("next")}
				data-testid="button-next"
				disabled={slideNo === slides.length - 1 ? true : false}>
				Next
			</button>
			<button
				onClick={() => handleClick("restart")}
				data-testid="button-restart"
				disabled={slideNo === 0 ? true : false}>
				Restart
			</button>
		</>
	);
};

export default App;

//redux - code
// import React from "react";
// import MySlide from "./MySlideView/MySlide";
// import ButtonList from "./ButtonList/ButtonList";
// import "../styles/App.css";

// const App = () => {
// 	return (
// 		<>
// 			<MySlide>
// 				<ButtonList />
// 			</MySlide>
// 		</>
// 	);
// };

// export default App;
