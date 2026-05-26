import React from 'react';
import { useState } from 'react';
import './App.css'

const App = () => {

  const [inputVal, setInputVal] = useState('');
  const [cardList, setCardList] = useState([]);

  const handleBar = (e) => {
    e.preventDefault();
    if(inputVal.trim() === '') {
    alert('Plz fill the input')
      return;
    }

    const newObject = {
      id: Date.now(),
      text: inputVal
    }

    setCardList([...cardList, newObject]);
    setInputVal('');
  }

  const deleteFunc = (indexToDelete) => {
    const newCard = cardList.filter((card) => card.id !== indexToDelete);
    setCardList(newCard);
  }

  return (
    <>
      <div className='test'>
      <form onSubmit={handleBar}>
      <input type="text" placeholder='search anything...' value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
      <button type='submit'>click now</button> 
      </form>
      <div>
          {
            cardList.map((card) => (
              <div className="resultDiv" key={card.id}>
              <div className='resultCard'>{card.text}
              <button onClick={() => {deleteFunc(card.id)}}>Delete</button>
              </div>
              </div>
            ))
          }
    </div>
    </div>
    </>

  )
}

export default App; 
