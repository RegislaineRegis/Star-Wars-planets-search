import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/fetchPlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '0' }]);

  useEffect(() => {
    const getPlanetsApi = async () => {
      const apiResults = await getPlanets();
      setData(apiResults);
    };
    getPlanetsApi();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { data,
        filterByName,
        setFilterByName,
        filterByNumericValues,
        setFilterByNumericValues } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
