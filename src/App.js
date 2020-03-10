import React from 'react';
import './App.css';
import Table from './components/Table';
import Props from './components/Props';
import Event from './components/Event';

function App() {
  return (
    <div className="App">
      <Table />
      <Props name="Mozarella Keju"/>
      <Event />
    </div>
  );
}

export default App;
