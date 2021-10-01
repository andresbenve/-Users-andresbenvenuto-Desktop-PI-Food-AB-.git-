import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesName } from '../actions'


export default function SearchBar() {
const dispatch = useDispatch()

const [input, setInput] = useState('')

const handleinput = (e) => {
e.preventDefault()
setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getRecipesName(input))
    setInput('')
}



return (
<div>
    <h1>Hola soy el SearchBar</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleinput(e)}/>
        <button type='submit'>Search</button>
    </form>
</div>
    )
}
