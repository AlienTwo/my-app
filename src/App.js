import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

	const [count, setCount] = useState(0);
	const [age, setAge] = useState(22);

	useEffect(() => {
		document.title = `You click ${count} times feature`
	})
	
	return (
		<div className="App">
		<p>You clicked {count} times</p>
		<p>my age is {age}</p>
		<button onClick={() => {
			setCount(count + 1);
			setAge(age + 1);
		}}>
			Click me
		</button>
		</div>
	);
}

export default App;
