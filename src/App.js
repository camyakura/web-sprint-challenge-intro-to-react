import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [character, setCharacter] = useState([]);
    const [error, setError] = useState(null)


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people`)
        .then( resp => {
          setCharacter(resp.data.results)
        })
        .catch(err => {
          setError(true)
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { error && <h2>NO ONE HOME</h2>}
      { character.map(char => {
        return <Character name={char.name} birth={char.birth_year} height={char.height} mass={char.mass} eye={char.eye_color} hair={char.hair_color} skin={char.skin_color} />
      })  }
    </div>
  );
}

export default App;
