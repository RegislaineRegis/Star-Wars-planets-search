import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/fetchPlanetsAPI';

const arrayInicialOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [renderFilters, setRenderFilters] = useState([]);
  const [options, setOptions] = useState(arrayInicialOptions);
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
    options,
    arrayInicialOptions,
    setFilterByName,
    setFilterByNumericValues,
    setFilteredPlanets,
    setRenderFilters,
    setOptions,
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
