import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Button = ({
	label,
	bgColor = 'wheat',
	color = 'darkgoldenrod',
	onClick,
}) => {
	const styles = {
		background: bgColor,
		color,
		padding: 5,
		margin: 5,
		// borderColor: 'coral',
		// borderRadius: 10,
		border: 'none',
	};
	return (
		<button style={styles} onClick={onClick}>
			<FontAwesomeIcon icon={faCat} /> {label}
		</button>
	);
};

export default Button;
