import styled from 'styled-components';
import StartGame from './components/startGame.jsx';
import React from 'react';
import GamePlay from './components/GamePlay.jsx';

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);

  const toggle=()=>{
    setGameStarted(!gameStarted);
  };

  return(

    <>{gameStarted ? <GamePlay/> :<StartGame toggle={toggle}/> } </>
  ) }


const Button= styled.button`
background-color: black;
color: white;
padding: 10px 20px;
`;
export default App
