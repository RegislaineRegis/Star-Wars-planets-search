import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Search />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
