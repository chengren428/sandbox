import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { PropStateChangeComp } from './cards/PropStateChange';

function App() {
  return (
    <div className='App'>
      <h1>React Typescript Sandbox by CRen</h1>
      <Container className='container'>
        <PropStateChangeComp />
      </Container>
    </div>
  );
}

export default App;
