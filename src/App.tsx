import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/Application';
import { Skills } from './components/skills/Skills';
import Counter from './components/counter/Counter';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './components/mui/MuiMode';
import { CounterTwo } from './components/counter-two/Counter-two';

const skills = ["HTML", "CSS", "JS"]
function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
        <Skills skills={['HTML', 'CSS']} />
        <Counter />
        <CounterTwo count={1} />
        <Users /> */}
        {/* <MuiMode /> */}
        <CounterTwo count={1}/>
      </div>
    </AppProviders>
  );
}

export default App;
