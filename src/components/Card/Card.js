import { useState } from 'react';
import { Button } from '../../Form';

import './styles.css';

const Card = ({ title, pic, alt, intro, content, date }) => {
	const [show, setShow] = useState(false);
	console.log(show);
	return (
		<div>
			<h2>{title}</h2>
			<div>{date}</div>
			<img src={pic} alt={alt} />
			<div> {intro}</div>
			<Button onClick={() => setShow((prevShow) => !prevShow)}>
				Click for more...
			</Button>
			<div className={!show ? 'visible' : null}>{content}</div>
		</div>
	);
};

export default Card;
