import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { filterByName, setFilterByName, filterByNumericValues,
    setFilterByNumericValues } = useContext(PlanetsContext);
  const [{ column, comparison, value }] = filterByNumericValues;

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
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador
        <select
          data-testid="comparison-filter"
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
      <button type="submit" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default Search;
