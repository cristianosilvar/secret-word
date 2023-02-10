import './End.css'

export default function End({retry ,score}) {
    return (
        <div className='end mt-6'>
            <h2>Fim de Jogo</h2>
            <h4>A sua pontuação final foi de <span className='fw-medium'>{score}</span> pontos</h4>
            <button onClick={retry}>Reiniciar</button>
        </div>
    )
}