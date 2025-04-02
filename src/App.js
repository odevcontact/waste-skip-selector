import React from 'react';
import './App.css';
import SkipSelector from './SkipSelector';




function App() {

const scrollToContent = () => {
    const element = document.getElementById('skip-options');
    element.scrollIntoView({ behavior: 'smooth' });
  };


	return (
    <div className="App">
      <header className="App-header">
        <h1>Waste Skip Selector</h1>
      </header>
      <SkipSelector />


	<div className="scroll-arrow" onClick={scrollToContent}>
        ↓
      </div>

	  </div>


  );
}

export default App;

