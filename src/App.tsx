import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/Skills';

const skills = ["HTML", "CSS", "JS"]
function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
