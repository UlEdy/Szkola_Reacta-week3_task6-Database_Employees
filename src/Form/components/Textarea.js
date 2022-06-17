const Textarea = ({
	bgColor = 'wheat',
	color = 'orange',
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
		<textarea style={styles} type='text' placeholder='More text...'></textarea>
	);
};
export default Textarea;
