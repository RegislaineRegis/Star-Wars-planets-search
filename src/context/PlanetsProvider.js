import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/fetchPlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [renderFilters, setRenderFilters] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: 0,
  }]);

  async function getPlanetsApi() {
    const apiResults = await getPlanets();
    setData(apiResults);
    setFilteredPlanets(apiResults);
  }

  const contextValue = {
    data,
    getPlanetsApi,
    filterByName,
    filterByNumericValues,
    filteredPlanets,
    renderFilters,
    setFilterByName,
    setFilterByNumericValues,
    setFilteredPlanets,
    setRenderFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
