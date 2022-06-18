const Input = ({
	bgColor = 'wheat',
	color = 'coral',
	borderSize = 'medium',
	borderRadius = 100,
	borderColor = 'red',
}) => {
	const styles = {
		backgroundColor: bgColor,
		color,
		borderRadius,
		border: `${borderSize} solid ${borderColor}`,
		padding: 5,
		margin: 5,
	};

	return (
		<input style={styles} type='text' placeholder='Type some text...'></input>
	);
};

export default Input;
