import './Game.css'

export default function Game({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) {
    console.log(letters)
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
                            <span>a, </span>
                            <span>b, </span>
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
                    letters.map((letter, i) => {
                        guessedLetters.includes(letter) ? (
                            <span key={i} className="letter">{letter}</span>
                        ) : (
                            <span key={i} className="blackSquare"></span>
                        )
                    })
                }
            </div>
            <div className="letterContainer mt-4">
                <p>Tente advinhar uma letra da palavra</p>
                <form>
                    <input type="text" name='letter' maxLength='1' className='inputLetter' required autoComplete='off'/>
                    <button className='buttonPlay'>Jogar</button>
                </form>
            </div>
        </div>
    )
}