/* eslint-disable arrow-body-style */
import apiResult from '../apiResult.json';

const getPlanets = async () => {
  // const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  // const planetsResults = await result.json();
  // return planetsResults.results;

  return apiResult.results;
};

export default getPlanets;
