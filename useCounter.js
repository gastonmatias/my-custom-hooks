/* un hook qe extrae la logica de un contador,
para ser reutilizado en cualquier otro componente */

import { useState } from "react"


/* si el usuario no manda nada initialState 
tendra valor inicial = 10*/
export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter-1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    /* para retornar se puede utilizar objeto o array */
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
