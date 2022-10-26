import React from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  // initialize state
  const [pokemonList, setpokemonList] = useState([]);
  const [pokemonFilteredList, setPokemonFilteredList] = useState([]);

  async function fetchData()  {
    const response = await fetch(pokeApi);
    const json = await response.json();
    setpokemonList(json)
    setPokemonFilteredList(json)}

  // add useEffect here ⬇️
  useEffect(() => {
  

  fetchData()
    
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = pokemonList.filter((pokemon) => {
      return pokemon.name.match(regex);
    });
    setPokemonFilteredList(filtered);
  }
  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
