import { useState } from "react"

export function App() {
    const [numero, setNumero] = useState(100)
    const [mostrarEsconder, setMostrarEsconder] = useState(false)

    function handleAcrescentar() {
        setNumero(numero + 100)
    }

    function handMostrarEsconderParagrafo() {
        if (mostrarEsconder === true) {
            setMostrarEsconder(false)
            return
        }


        setMostrarEsconder(true)
    }

    return (
        <div>
            <h1>Atividade useState</h1>

            <div>
                <h2>Número: {numero}</h2>

                <button onClick={handleAcrescentar}>Acrescentar 100</button>
            </div>

            <div>
                <h2>O parágrafo Sumidouro</h2>

                {mostrarEsconder === true ? <p>Em breve irei sumir</p> : ""}

                <button onClick={handMostrarEsconderParagrafo}>Esconder</button>
            </div>
        </div>
    )
}