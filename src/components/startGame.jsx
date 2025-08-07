import React from 'react'
import styled from 'styled-components';
const startGame = ({toggle}) => {
  return (
    <Container>
      <div>
 <img src="./images/dices.png" alt="dice-image" />
 </div>
 <div className='content'>
    <h1>Dice Game</h1>
    <Button onClick={toggle}>Start Game</Button>

 </div>
    </Container>
  )
}

export default startGame;



const Container= styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
  // justify-content: center;
  height: 100vh;
  


  .content h1{
  font-size: 96px;
  white-space: nowrap;
  }
  
  
  `;



  const Button= styled.button`
background-color: black;
color: white;
padding: 10px 16px;
min-width: 220px;
border-radius: 5px;
border: 1px solid transparent;
font-size: 16px;
transition: background 0.3s ease-in;
cursor: pointer;
&:hover {
background-color: white; 
color: black;
border: 1px solid black;
transition: background 0.2s ease-in;
cursor: pointer;

}
`;