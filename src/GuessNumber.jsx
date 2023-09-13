import React from 'react'
import { useEffect, useState } from 'react';

const GuessNumber = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1)
    const [answer, setAnswer] = useState("El número ingresado es... ");
    const [tries, setTries] = useState(0);
    const [numberInput, setNumberInput] = useState();

    const newRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }
    
    const checkNumber = () => {
        let input = parseFloat(numberInput);

        setTries(tries + 1);
        if (randomNumber === input) {
            newRandomNumber();
            alert("Correcto lo lograste en " + {tries} + " intentos! Se cambió a un nuevo numero aleatorio.");
            setTries(0);
            setAnswer("El número ingresado es... ");
        } else if (randomNumber < input) {
            console.log("Input:", numberInput, " Numero:", randomNumber);
            setAnswer("El número aleatorio es menor");
        } else {
            console.log("Input:", numberInput, " Numero:", randomNumber);
            setAnswer("El número aleatorio es mayor");
        }
    }

    const handleClick = () =>{
        console.log('click')
        checkNumber();
    }

    useEffect(() => {
        if(String(numberInput).length === 2){
            checkNumber();
        }
    }, [numberInput]);

    return (
        <div className="main-div">
            <h1>Adivina un número aleatorio: del 1 al 100.</h1>
            <br></br>
            <input
                type="number"
                id="number-input"
                onChange={(e) => setNumberInput(e.target.value)}
                placeholder="Número del 1 al 100"
            >
            </input>
            <button onClick={handleClick}>=</button>
            <br></br>
            <p id="answer">{answer}</p>
            <p id="tries">Intentos: {tries}</p>
        </div>
    )
}

export default GuessNumber