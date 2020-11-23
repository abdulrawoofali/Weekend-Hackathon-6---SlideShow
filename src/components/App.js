import React from "react";
import MySlide from "./MySlideView/MySlide";
import ButtonList from "./ButtonList/ButtonList";
import "../styles/App.css";

const App = () => {
	return (
		<>
			<MySlide>
				<ButtonList />
			</MySlide>
		</>
	);
};

export default App;
