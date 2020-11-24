import React, { Component, useState } from "react";
import "../styles/App.css";
const App = (props) => {
	const { slides } = props;
	//console.log(props);
	//console.log(slides.length);

	const [index, setIndex] = useState(0);

	let title = slides[index].title;
	let text = slides[index].text;

	function handleClick(action) {
		//console.log(action);
		if (action === "prev") {
			//if (show.index === 0) return;

			let newIndex = index - 1;
			setIndex(newIndex);
		} else if (action === "next") {
			//if (show.index === slides.length - 1) return;

			let newIndex = index + 1;
			setIndex(newIndex);
		} else if (action === "restart") {
			setIndex(0);
		}
	}

	return (
		<>
			<h1 data-testid="title">{title}</h1>
			<p data-testid="text">{text}</p>
			<button
				onClick={() => handleClick("prev")}
				data-testid="button-prev"
				disabled={index === 0 ? true : false}>
				Prev
			</button>
			<button
				onClick={() => handleClick("next")}
				data-testid="button-next"
				disabled={index === slides.length - 1 ? true : false}>
				Next
			</button>
			<button
				onClick={() => handleClick("restart")}
				data-testid="button-restart"
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
