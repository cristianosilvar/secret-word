import './Game.css'

import { useState, useRef} from 'react'

export default function Game({
    verifyLetter, 
    pickedWord, 
    pickedCategory, 
    letters, 
    guessedLetters, 
    wrongLetters, 
    guesses, 
    score}) {

    const [letter, setLetter] = useState('')
    const letterInputRef  = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter)

        setLetter('')
        letterInputRef.current.focus()
    }

    return(
        <div className="game">
            <div className="top">
                <div>      
                    <h4 className="tip">
                        Dica da palavra: <span>{pickedCategory}</span>
                
                    </h4>    
                    <div className="wrongLettersContainer">
                        <p>
                            Letras já utilizadas: 
                            {
                                wrongLetters.map((letter, i) => 
                                <span key={i}> {letter}, </span>                              
                                )
                            }
                        </p>
                    </div>
                </div>
                <div>
                    <div className="points text-right">
                        <h4>
                        Pontuação: <span>{score}</span>
                        </h4>
                        <p>
                        Você ainda tem  <span>{guesses}</span> chance(s)
                        </p>
                    </div>
                </div>
            </div>
            <div className="wordContainer mt-6">
                {
                    letters.map((letter, i) => 
                        guessedLetters.includes(letter) ? (
                            <span key={i} className="letter">{letter}</span>
                        ) : (
                            <span key={i} className="blackSquare"></span>
                        )
                    )
                }
            </div>
            <div className="letterContainer mt-4">
                <p>Tente advinhar uma letra da palavra</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name='letter' 
                    maxLength='1' 
                    className='inputLetter' required autoComplete='off' 
                    onChange={(e) => setLetter(e.target.value)} 
                    value={letter}
                    ref={letterInputRef}
                    />
                    <button className='buttonPlay'>Jogar</button>
                </form>
            </div>
        </div>
    )
}