import React, {useState, Suspense} from 'react'
import fetchPokemon from './fetch-pokemon'

const cache = {}

function PokemonInfo({pokemonName}) {
  const pokemon = cache[pokemonName]
  if (!pokemon) {
    const promise = fetchPokemon(pokemonName).then(
      p => (cache[pokemonName] = p),
    )
    throw promise
  }
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function App() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <input id="pokemonName-input" name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default App
