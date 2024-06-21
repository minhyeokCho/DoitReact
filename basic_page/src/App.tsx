import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventMe from './ch01/EventMe';
import EventListener from './ch01/EventListener';
import OnClick from './ch01/OnClick';
import Callback from './ch04/src/pages/Callback';
import NumberState from './ch04/src/pages/NumberState';
import InputTest from './ch04/src/pages/InputTest';
import RadioInputTest from './ch04/src/pages/RadioInputTest';
import BasicForm from './ch04/src/pages/BasicForm';
import ClassLifecycle from './ch04/src/pages/ClassLifecycle';
import WindowResizeTest from './ch04/src/pages/WindowResizeTest';
import FetchTest from './ch04/src/pages/FetchTest';
import ClickTest from './ch04/src/pages/ClickTest';

function App() {
	return (
		<>
			<OnClick/>
			{/* <EventListener/> */}
			<Callback/>
			<NumberState/>
			<RadioInputTest/>
			<BasicForm/>
			<ClassLifecycle/>
			<WindowResizeTest/>
			<FetchTest/>
			<ClickTest/>
		</>
	);
}

export default App;
