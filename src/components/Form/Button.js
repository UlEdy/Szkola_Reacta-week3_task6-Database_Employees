import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Button = ({
	label,
	backgroundColor = 'wheat',
	color = 'darkgoldenrod',
	onClick,
}) => {
	const styles = {
		backgroundColor,
		color,
		padding: 5,
		margin: 5,
		border: 'none',
	};
	return (
		<button style={styles} onClick={onClick}>
			<FontAwesomeIcon icon={faCat} /> {label}
		</button>
	);
};

export default Button;
