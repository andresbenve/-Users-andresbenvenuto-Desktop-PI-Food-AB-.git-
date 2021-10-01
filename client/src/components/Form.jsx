import React, {  useState} from 'react' 
    import { useDispatch, useSelector} from 'react-redux'
    import { getRecipes } from '../actions'

export default function Form() {

const [input, setInput] = useState({
    title: '',
    resume: '',
    image: '',
    score: '',
    healthyfoodscore: '',
    diet: [],  
})


const handleChange = (e) => {
e.preventDefault()
setInput({
    ...input,
    [e.target.name]: e.target.value
})}
const handleSubmit = (e) => {
e.preventDefault()
// A qué hora tenemos que pasar la acction con el post
}
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>title</label>
        <p></p>
        <input 
        type="text"
        name='title'
        value={input.title}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>resume</label>
        <p></p>
        <textarea 
        type="text"
        name='resume'
        value={input.resume}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>image</label>
        <p></p>
        <input 
        type="text"
        name='image'
        value={input.image}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>score</label>
        <p></p>
        <input 
        type="number"
        name='score'
        value={input.score}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>healthyfoodscore</label>
        <p></p>
        <input 
        type="number"
        name='healthyfoodscore'
        value={input.healthyfoodscore}
        onChange={(e) => handleChange(e)}
        />
        <p></p>
        <label>diet</label>
        <p></p>
        <select 
        type="select"
        name='diet'
        value={input.diet}
        onChange={(e) => handleChange(e)}
        >
        <option value="vegan">vegan</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="primal">primal</option>
        <option value="gulten free">gulten free</option>
        <option value="dairy free">dairy free</option>
        <option value="Pescetarian">Pescetarian</option>
        <option value="paleolithic">paleolithic</option>
        <option value="Ketogenic">Ketogenic</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
        <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
        <option value="Low FODMAP">Low FODMAP</option>
        <option value="Whole30">Whole30</option>
        </select>
        <p></p>
        <button type='submit'>Send</button>
            </form>
            
        </div>
    )
}
