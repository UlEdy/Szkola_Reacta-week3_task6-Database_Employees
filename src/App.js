import './App.css';
import { Input, Textarea } from './components/Form';
import Card from './components/Card';
import { Menu, MenuLink } from './components/Menu';

import './App.css';
import Container from './components/Container';

function App() {
	return (
		<div className='App'>
			<Container>
				<Menu>
					<MenuLink to='/'>Home</MenuLink>
					<MenuLink to='/about'>About</MenuLink>
					<MenuLink to='/contact' isActive>
						Contact
					</MenuLink>
					<MenuLink to='/posts'>Posts</MenuLink>
				</Menu>
			</Container>
			<Container clName='container'>
				<Card
					title='Shrimp and Chorizo Paella'
					date='June 18, 2022'
					author='Edyta'
					pic='https://img.taste.com.au/khmxuX4n/w720-h480-cfill-q80/taste/2017/03/onepan-prawn-chor-paella-125252-1.jpg'
					alt='Shrimp and Chorizo Paella'
					intro='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
					content='Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes....'
				/>
				<Input />
				<Textarea />
			</Container>
		</div>
	);
}

export default App;
