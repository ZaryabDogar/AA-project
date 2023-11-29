import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
const App = () => {
	return (
		<>
			<Navbar></Navbar>
			<main className="p-14 px-8 bg-white font-jost">
        <Login></Login>
      </main>
		</>
	);
};

export default App;
