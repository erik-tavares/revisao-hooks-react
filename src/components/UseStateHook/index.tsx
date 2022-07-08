import { useState } from "react";

export default function UseStateHook() {
    let [valor, setValor] = useState('Teste');
    let valor2 = 10;
    const [nome, setNome] = useState('')

    function onMudarValor() {
        setValor('Outro Valor')
        valor2 = 20
    }

    return (
        <>
            <h2>UseState</h2>
            {valor} - {valor2}
            <button onClick={onMudarValor}>Alterar Nome</button>
            <div>
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            </div>

        </>
    );
}