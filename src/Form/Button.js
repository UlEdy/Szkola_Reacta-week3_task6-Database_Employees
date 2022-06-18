import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children, bgColor = 'grey', color = 'coral', onClick }) => {
	const styles = {
		background: bgColor,
		color,
		padding: 5,
		margin: 5,
	};
	return (
		<button style={styles} onClick={onClick}>
			<FontAwesomeIcon icon={faCat} /> {children}
		</button>
	);
};

export default Button;
