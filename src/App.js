import React from 'react'
import ManipulationPanel from './components/ManipulationPanel'
import Button from './components/Button'
import Field from './components/Field'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation />
      </header>
      <main className="main">
        <Field />
      </main>
      <footer className="footer">
        <Button />
        <ManipulationPanel />
      </footer>
    </div>
  );
}

export default App;
