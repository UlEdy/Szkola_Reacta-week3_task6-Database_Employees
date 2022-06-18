import { useState } from 'react';
import { Button } from '../Form';
import Header from './Header';

import './styles.css';

const Card = ({ title, author, date, pic, alt, intro, content }) => {
	const [showMore, setShowMore] = useState(false);
	return (
		<div>
			<Header author={author} title={title} date={date} />
			<img className='cardImg' src={pic} alt={alt} />
			<div> {intro}</div>
			<div className={!showMore ? 'visible' : null}>{content}</div>
			<Button
				onClick={() => setShowMore((prevShow) => !prevShow)}
				label={!showMore ? 'Click for more' : 'Less info'}
			/>
		</div>
	);
};

export default Card;
