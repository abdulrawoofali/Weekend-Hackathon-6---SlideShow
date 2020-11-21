import React from "react";

const Button = (props) => {
	let buttonName = props.name;
	return (
		<button
			data-testid={`button-${props.name}`}
			onClick={() => props.handleClick(props.name)}
			disabled={!props.enabled}>
			{buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
		</button>
	);
};

export default Button;
