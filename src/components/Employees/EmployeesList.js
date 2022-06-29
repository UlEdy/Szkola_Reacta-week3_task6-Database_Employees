import Employees from './Employees';
import { data } from './data';

import './styles_Employees.css';

const EmployeesList = () => (
	<div>
		<h3>Employees</h3>
		{data.map(({ id, name, surname }) => (
			<Employees key={id} num={id} nameEmp={name} surnameEmp={surname} />
		))}
	</div>
);

export default EmployeesList;
