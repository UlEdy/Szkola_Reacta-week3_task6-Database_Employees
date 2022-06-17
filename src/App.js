import './App.css';
import { Button, Input, Textarea } from './Form/components';

function App() {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		bgColor: 'red',
		color: 'yellow',
		borderSize: '5px',
		borderRadius: '5px',
		borderColor: 'orange',
	};
	return (
		<div className='App' style={styles}>
			<Button bgColor='red' color='yellow'>
				Click me!
			</Button>
			<Input style={styles} />
			<Textarea style={styles} />
		</div>
	);
}

export default App;
