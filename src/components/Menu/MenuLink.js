const MenuLink = ({ to, children, isActive = 'red' }) => {
	const styles = {
		color: isActive,
		fontSize: '15px',
		margin: 0,
	};
	return (
		<a className='link' style={styles} href={to}>
			{children}
		</a>
	);
};

export default MenuLink;
