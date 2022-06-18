import './styles.css';

const Header = ({ title, author, date }) => {
	return (
		<div className='headerWrapper'>
			<span className='headerAuthor' style={{ textTransform: 'uppercase' }}>
				{author.substring(0, 2)}
			</span>
			<span className='headerText'>
				<h2 className='title'>{title}</h2>
				<span>{date}</span>
			</span>
		</div>
	);
};

export default Header;
