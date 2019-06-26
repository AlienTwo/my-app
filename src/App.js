import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

	const [count, setCount] = useState(0);
	const [age, setAge] = useState(22);

	useEffect(() => {
		document.title = `YYYYou click ${count} times still develop release-0.0.1`
	})
	
	return (
		<div className="App">
<<<<<<< HEAD
		<p>You clicked {count} times hotfix</p>
		<p>my age is {age}</p>
=======
		<p>You clicked {count} times</p>
		<p>dong's age is {age}</p>
>>>>>>> release/release-0.0.1
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
