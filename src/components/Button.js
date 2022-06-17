import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Button = ({ label, bgColor = 'yellow', color = 'green' }) => {
	return (
		<button style={{ background: bgColor, color }}>
			<FontAwesomeIcon icon={faCat} /> {label}
		</button>
	);
};

export default Button;
