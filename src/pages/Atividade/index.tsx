import { useState, useEffect } from "react";

type TUser = {
    nome: string
    email: string
    number: string
}


export default function Atividade() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [lista, setLista] = useState<TUser[]>([]);

    useEffect(() => {
        setEmail('');
        setNome('');
        setNumber('');

        // if (lista.length > 10) {
        //     alert('Você ganhou frete gratis!!')
        // }

    }, [lista])


    function onAdicionarUsuario(event: React.MouseEvent) {
        event.preventDefault()
        const usuario = {
            nome,
            email,
            number,
        }

        setLista([usuario, ...lista]);
        setNome('')
        setEmail('')
        setNumber('')
    }

    // useEffect(() => {
    //     setNome('')
    //     setEmail('')
    //     setNumber('')
    // }, [])

    return (
        <>
            <h1>Atividade</h1>
            <h2>Formulário</h2>
            <fieldset>
                <form>
                    <label>
                        Nome:   <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Email: <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Telefone: <input type="number" value={number} onChange={(event) => setNumber(event.target.value)} />
                    </label>
                    <br />
                    <br />
                    <button onClick={(event) => onAdicionarUsuario(event)}>Adicionar</button>
                </form>
                <ul>
                    {lista.map(usuario => {
                        return (
                            <li>{usuario.nome}</li>
                        )
                    })}
                </ul>
                {lista.length > 10 ? 'Ganhou o porco' : null}
            </fieldset>
        </>
    )
}