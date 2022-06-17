import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children, bgColor = 'green', color = 'orange' }) => {
	const styles = {
		background: bgColor,
		color,
		padding: 5,
		margin: 5,
	};
	return (
		<button style={styles}>
			<FontAwesomeIcon icon={faCat} /> {children}
		</button>
	);
};

export default Button;
