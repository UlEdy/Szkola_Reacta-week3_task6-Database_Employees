import './App.css';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<div className='App'>
			<Button
				bgColor='red'
				color='yellow'
				icon={<FontAwesomeIcon icon={faUser} />}
				label='Click me!'
			/>
		</div>
	);
}

export default App;
