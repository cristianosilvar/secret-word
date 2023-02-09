import './End.css'

export default function End({retry}) {
    return (
        <div>
            <button onClick={retry}>reiniciar</button>
        </div>
    )
}