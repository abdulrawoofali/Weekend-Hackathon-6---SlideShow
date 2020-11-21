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
	const [lockResetAndPrev, unlockPrevAndReset, unlockNext, lockNext] = [
		0,
		1,
		slides.length - 2,
		slides.length - 1
	];
	const [currentSlide, setCurrentSlide] = useState(0);
	const [buttons, setButtons] = useState(button);
	const checkToUpdateNewStateForButtons = (pos) => {
		const buttonsCopy = [...buttons];
		switch (pos) {
			case lockResetAndPrev:
				buttonsCopy[1].isEnabled = false;
				buttonsCopy[2].isEnabled = false;
				buttonsCopy[0].isEnabled = true;
				break;
			case unlockPrevAndReset:
				buttonsCopy[1].isEnabled = true;
				buttonsCopy[2].isEnabled = true;
				break;
			case unlockNext:
				if (buttonsCopy[0].isEnabled) return;
				buttonsCopy[0].isEnabled = true;
				break;
			case lockNext:
				buttonsCopy[0].isEnabled = false;
				break;
			default:
				return;
		}
		console.log("updating buttons state...");
		console.log(pos);
		setButtons(buttonsCopy);
	};

	const handleClick = (buttonName) => {
		console.log(buttons[0].isEnabled);
		let newPos = currentSlide;
		console.log("new Slide", newPos);
		switch (buttonName) {
			case NEXT:
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
		setCurrentSlide(newPos);
		checkToUpdateNewStateForButtons(newPos);
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
