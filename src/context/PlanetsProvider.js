import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/fetchPlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanetsApi = async () => {
      const apiResults = await getPlanets();
      setData(apiResults);
    };
    getPlanetsApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
