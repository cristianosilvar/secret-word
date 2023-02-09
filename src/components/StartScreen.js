import './StartScreen.css'

export default function StartScreen({startGame}) {
    return (
        <div className='start_screen'>
            <h5 className='fw-normal text-center'>Clique no botão abaixo para iniciar</h5>
            <button onClick={startGame}>Começar a jogar</button>
        </div>
    )
}