import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { filterByName, setFilterByName } = useContext(PlanetsContext);

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
    </form>
  );
}

export default Search;
