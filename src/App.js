import './App.css';
import { Button, Input, Textarea } from './Form';
import Card from './components/Card/Card';

function App() {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: 20,
		padding: 10,
	};
	return (
		<div className='App' style={styles}>
			<Card
				title='Shrimp and Chorizo Paella'
				date='June 18 2022'
				pic='https://img.taste.com.au/khmxuX4n/w720-h480-cfill-q80/taste/2017/03/onepan-prawn-chor-paella-125252-1.jpg'
				alt='Shrimp and Chorizo Paella'
				intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
				showMore
				content='Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
			/>
			<Input />
			<Textarea />
		</div>
	);
}

export default App;
