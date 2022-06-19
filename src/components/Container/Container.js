const Contener = ({ children, clName }) => {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '82%',
		minHeight: '20vh',
		width: 'max-content',
		maxWidth: '60vh',
	};
	return (
		<div className={clName} style={styles}>
			{children}
		</div>
	);
};

export default Contener;
