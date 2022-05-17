import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted =  useRef(true)
    const [state, setState] = useState({data:null,loading:true,error:null})

    useEffect(() => {
       
        /* puede suceder qe un usuario consulte datos de la api, pero antes
        de qe la api retorne respuesta, el usuario cancele la solicitud, 
        esto debe manejarse de manera qe la memoria no sufra */
        return () => {
            /* desmonta el componente */
            isMounted.current = false;
        }

    },[])

    useEffect(() => {
        
        /* para mostrar "loading" al presionar boton "sig" */
        setState({data:null, loading:true,error:null})
        
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                /* valida si el componente esta montado o no */
                if (isMounted.current) {    
                    setState({
                        loading:false,
                        error: null,
                        data // data: data, proveniente de la api
                    })
                }else {

                    console.log('set state no se llamo')
                }
                

            })
    },[url])
  
    return state;
}
