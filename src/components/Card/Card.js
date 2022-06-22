import { useState } from 'react';
import { Button } from '../Form';
import Header from './Header';

import './styles_Card.css';

const Card = ({ title, author, date, pic, alt, intro, content }) => {
	const [showMore, setShowMore] = useState(false);
	const clickMore = () => setShowMore((prevShow) => !prevShow);

	return (
		<div>
			<Header author={author} title={title} date={date} />
			<img className='cardImg' src={pic} alt={alt} />
			<div> {intro}</div>
			<div className={!showMore ? 'visible' : null}>{content}</div>
			<Button
				onClick={() => clickMore}
				label={!showMore ? 'Click for more' : 'Less info'}
			/>
		</div>
	);
};

export default Card;
