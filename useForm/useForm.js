import { useState } from 'react'

export const useForm = (initialState = {}) => { /* initialState = {}, inicializado como objeto vacio para evitar problemas */
  
    /* values: equivalen a los input del form */
    const [values, setValues] = useState(initialState)

    /*  para limpiar casilla de los inputs luego
    de ingresar un valor exitosamente */
    const reset = () => {
        setValues(initialState)
    }

    /* fx que manejará los cambios hechos en cada input del form */
    const handleInputChange = (e) => {
        /* setValues: los valores nuevos serán... */
        setValues({
            /* copia de lo valores ya existentes (si es que hay) */
            ...values,
            /* valor de cada input, identificado por su "name" */
            [e.target.name]: e.target.value
        })
    }

    /*  retorna los valores y la fx manejadora de cambios */
    return [values,handleInputChange, reset]
  
}
