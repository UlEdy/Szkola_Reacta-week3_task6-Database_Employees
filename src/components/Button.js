import React from 'react';

const Button = ({ label, bgColor, color, icon }) => {
	return (
		<button style={{ background: bgColor, color }}>
			{icon} {label}
		</button>
	);
};

export default Button;
