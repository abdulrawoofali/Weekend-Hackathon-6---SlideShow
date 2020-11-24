import React, { Component, useState } from "react";
import "../styles/App.css";
const [NEXT, PREV, RESART] = ["next", "prev", "resart"];
const App = (props) => {
	const { slides } = props;

	const [index, setIndex] = useState(0);

	let title = slides[index].title;
	let text = slides[index].text;

	function handleClick(clickedButtonName) {
		let newPos = index;
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
		setIndex(newPos);
	}

	return (
		<>
			<h1 data-testid="title">{title}</h1>
			<p data-testid="text">{text}</p>
			<button
				onClick={() => handleClick(PREV)}
				data-testid={`button-${PREV}`}
				disabled={index === 0 ? true : false}>
				Prev
			</button>
			<button
				onClick={() => handleClick(NEXT)}
				data-testid={`button-${NEXT}`}
				disabled={index === slides.length - 1 ? true : false}>
				Next
			</button>
			<button
				onClick={() => handleClick(RESART)}
				data-testid={`button-${RESART}`}
				disabled={index === 0 ? true : false}>
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
