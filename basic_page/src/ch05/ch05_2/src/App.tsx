import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";

function App() {
	const store = useStore()
	return (
		<ReduxProvider store={store}>
			<div>1</div>
		</ReduxProvider>
	);
}

export default App;
