import { Card, CardForm } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Card />
				<CardForm />
			</div>
		</Provider>
	);
}

export default App;
