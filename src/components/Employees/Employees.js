import { useState } from 'react';

import './styles_Employees.css';

const Employees = ({ data }) => {
	const { name, surname, salary, position, num } = data;

	const [showMore, setShowMore] = useState(false);
	const clickMore = () => setShowMore((prevShow) => !prevShow);
	return (
		<div className='table'>
			<section>
				<h6>Person {num}</h6>
				<div onClick={clickMore}>
					<div>Name: {name}</div>
					<div>Surname: {surname}</div>
				</div>
			</section>
			<section>
				<div className={!showMore ? 'visible' : null}>
					<div>Position: {position}</div>
					<div>Salary: {salary}</div>
				</div>
			</section>
		</div>
	);
};
export default Employees;
