import React from 'react'
import { useSelector, useDispatch } from "react-redux"

function Teste() {
    const data = useSelector(state => state.repositories.data)
    const dispatch = useDispatch()

    console.log(data)
    
    return (
        <div onClick={() => dispatch({ type: "ADD", title: "teste" })}>
            teste
        </div>
    )
}

export default Teste
