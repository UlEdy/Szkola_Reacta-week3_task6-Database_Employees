const Input = ({
	bgColor = 'wheat',
	color = 'darkgoldenrod',
	borderSize = '1px',
	borderRadius = 10,
	borderColor = 'coral',
}) => {
	const styles = {
		backgroundColor: bgColor,
		color,
		borderRadius,
		border: `${borderSize} solid ${borderColor}`,
		padding: 5,
		margin: 5,
	};

	return <input style={styles} type='text' placeholder='Type some text...' />;
};

export default Input;
