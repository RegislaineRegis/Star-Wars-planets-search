import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const {
    data,
    filterByName,
    filterByNumericValues,
    filteredPlanets,
    renderFilters,
    options,
    setFilterByName,
    setFilterByNumericValues,
    setFilteredPlanets,
    setRenderFilters,
    setOptions,
  } = useContext(PlanetsContext);

  const [{ column, comparison, value }] = filterByNumericValues;

  function handleSearch({ target }) {
    const filteredSelectoption = options.filter((option) => option !== target.value);

    setOptions(filteredSelectoption);
    setRenderFilters([...renderFilters, { column, comparison, value }]);
    switch (comparison) {
    case 'maior que':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[column]) > Number(value)));
    case 'menor que':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[column]) < Number(value)));
    case 'igual a':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[column]) === Number(value)));
    default:
      return setFilteredPlanets(data);
    }
  }

  return (
    <form>
      <input
        type="text"
        name="planet"
        data-testid="name-filter"
        value={ filterByName.name }
        placeholder="Digite o planeta..."
        onChange={ ({ target }) => setFilterByName({ name: target.value.toLowerCase() }) }
      />
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          value={ column }
          id="column"
          onChange={ ({ target }) => setFilterByNumericValues([{
            column: target.value, comparison, value }]) }
        >
          { options.map((option, index) => (
            <option key={ index }>{ option }</option>
          )) }
        </select>
      </label>
      <label htmlFor="operador">
        Operador
        <select
          data-testid="comparison-filter"
          id="operador"
          value={ comparison }
          onChange={ ({ target }) => setFilterByNumericValues([{
            column, comparison: target.value, value }]) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        type="number"
        name="value-filter"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => setFilterByNumericValues([{
          column, comparison, value: target.value }]) }
      />
      <button
        type="button"
        data-testid="button-filter"
        value={ column }
        onClick={ handleSearch }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Search;
