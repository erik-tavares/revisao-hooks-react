import { useEffect, useState } from "react";

export default function UseEffectHook() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('Executou');

    })
    useEffect(() => {
        console.log('Executou 2');

    }, [])
    useEffect(() => {
        console.log('Executou 3');

    }, [count2])
    return (
        <>
            <h2>UseEffect</h2>
            <button onClick={() => setCount(old => ++old)}>+ 1</button>
            <br />
            <br />
            <button onClick={() => setCount2(old => old + 5)}>+ 5</button>
        </>
    )
}   