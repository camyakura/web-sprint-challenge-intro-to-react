import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'


const StyledApp= styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items:center;


    .container {
      width: 60%;
    }

    h1 {
      font-size: 5rem
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [character, setCharacter] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people`)
        .then( resp => {
          setCharacter(resp.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

  return (
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
        <div className='container'>
            { character.map(char => {
              return <Character name={char.name} birth={char.birth_year} key={char.created}/>
            }) }
        </div>
    </StyledApp>
  );
}

export default App;
