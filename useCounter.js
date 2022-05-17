/* hook qe extrae la logica de un contador,
para ser reutilizado en cualquier otro componente */
import { useState } from "react"

/* si el usuario no ingresa nada initialState 
tendra valor inicial = 10*/
export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState)

    /* fx incrementadora */
    const increment = () => {
        setCounter(counter+1)
    }

    /* fx de resta */
    const decrement = () => {
        setCounter(counter-1)
    }

    /* fx para resetear al valor inicial */
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
