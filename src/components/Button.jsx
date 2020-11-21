import React from "react";

const Button = (props) => {
	return (
		<button
			data-testid={`button-${props.name}`}
			onClick={() => props.handleClick(props.name)}
			disabled={!props.enabled}>
			{props.name}
		</button>
	);
};

export default Button;
