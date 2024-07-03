
import React, { useState, useEffect } from "react";

const Home = () => {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() =>{
        if (completed){
            setTarefa('Parabéns! você concluiu a tarefa');
        }

    }, [completed])

    return (
        <div>
            <h1>Tarefa</h1>
            <h1>{tarefa}</h1>
            <p>Concluia a tarefa</p>
            <button onClick={() => setCompleted(true)}>Concluir tarefa </button>
        </div>
    )

}

export default Home