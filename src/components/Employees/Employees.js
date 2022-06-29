import { useState } from 'react';

import './styles_Employees.css';

const Employees = ({ nameEmp, surnameEmp, salary, position, num }) => {
	const [showMore, setShowMore] = useState();
	const clickMore = () => setShowMore((prevShow) => !prevShow);
	return (
		<div className='table'>
			<section>
				<h6>Person {num}</h6>
				<div onClick={clickMore}>
					<div>Name: {nameEmp}</div>
					<div>Surname: {surnameEmp}</div>
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
