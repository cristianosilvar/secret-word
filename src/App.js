// CSS
import './App.css';

// React
import { useState, useCallback, useEffect} from 'react';

// Components
import StartScreen from './components/StartScreen';
import End from './components/End';
import Game from './components/Game';

// Data

import { wordsList } from './data/words';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


  const pickWordAndCategory = () => {
    //
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    //
    return { word, category }
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(word)
    console.log(category)
    console.log(letters)

    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      <h2 className='text-center fw-medium'>Secret Word</h2>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>} 
      {gameStage === 'game' && 
      <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />
      }
      {gameStage === 'end' && <End retry={retry}/>}
    </div>
  );
}

export default App;
