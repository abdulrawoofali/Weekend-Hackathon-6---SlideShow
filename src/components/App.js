import React, { useState } from "react";
import MySlide from "./MySlide";
import Button from "./Button";
import "../styles/App.css";

const NEXT = "next";
const PREV = "prev";
const RESART = "resart";
const button = [
	{ name: NEXT, isEnabled: true },
	{ name: PREV, isEnabled: false },
	{ name: RESART, isEnabled: false }
];
const App = (props) => {
	const { slides } = props;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [buttons, setButtons] = useState(button);

	const handleClick = (buttonName) => {
		console.log(buttons[0].isEnabled);
		let newPos = currentSlide;
		console.log("new Slide", newPos);
		const buttonsCopy = [...buttons];
		switch (buttonName) {
			case NEXT:
				if (newPos === slides.length - 1) {
					break;
				}
				++newPos;
				break;
			case PREV:
				if (newPos === 0) {
					break;
				}
				--newPos;
				break;
			case RESART:
				newPos = 0;
				break;
			default:
				break;
		}
		setCurrentSlide(newPos);
		//enabling reset and prev
		if (newPos > 0 && currentSlide === 0) {
			buttonsCopy[2].isEnabled = true;
			buttonsCopy[1].isEnabled = true;
			setButtons(buttonsCopy);
			return;
		}

		if (newPos === slides.length - 1) {
			buttonsCopy[0].isEnabled = false;
			setButtons(buttonsCopy);
			return;
		}

		if (newPos > 0 && newPos < slides.length - 1) {
			buttonsCopy[2].isEnabled = true;
			buttonsCopy[1].isEnabled = true;
			buttonsCopy[0].isEnabled = true;
			setButtons(buttonsCopy);
			return;
		}

		if (newPos === 0) {
			buttonsCopy[2].isEnabled = false;
			buttonsCopy[1].isEnabled = false;
			setButtons(buttonsCopy);
			return;
		}
	};
	return (
		<>
			<MySlide
				title={slides[currentSlide].title}
				text={slides[currentSlide].text}
			/>
			{buttons.map((button, index) => (
				<Button
					key={index}
					enabled={button.isEnabled}
					name={button.name}
					handleClick={handleClick}
				/>
			))}
		</>
	);
};

export default App;
