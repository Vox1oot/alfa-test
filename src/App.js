import './App.css';
import Products from './components/Products';

import { Provider } from 'react-redux';
import store from './redux/index.js';

const App = () => {
  return (
	<Provider store={store}>
		<main className="main">
			<div className="main-container">
				<Products />
			</div>
		</main>
	</Provider>
  );
}

export default App;
