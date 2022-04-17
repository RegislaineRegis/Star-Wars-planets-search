import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
