import Employees from './Employees';
import { data } from './data';

import './styles_Employees.css';

const EmployeesList = () => (
	<div>
		<h3>Employees</h3>
		{data.map((emp) => (
			<Employees key={emp.id} data={emp} />
		))}

	</div>
);

export default EmployeesList;
