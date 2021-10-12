import React, { useEffect, useState} from 'react' 
    import { useDispatch, useSelector} from 'react-redux'
    import CardHome from "./CardHome";
    import { getRecipes, paginado } from '../actions'
    import { NavLink } from 'react-router-dom';
    

    export default function Home() {
    const dispatch = useDispatch()
    //const [page, setPage] = useState(0)
    const [order, setOrder] = useState('ASC')
    const [Puntuacion, setPuntuacion] = useState('')
    const [dieta, setDieta] = useState('')
    //const [paginas, setPaginas] = useState(0) // Intentando paginar
    
useEffect(() => {
    dispatch(getRecipes(order, dieta, Puntuacion))}, 
    //dispatch(paginado(paginas))
    [dispatch, order, dieta, Puntuacion])   

const allrecipes = useSelector(state => state.allrecipes)
const diets = useSelector(state => state.diets)

const handleDieta = (e) => {
e.preventDefault()
setDieta(e.target.value)}

const handleOrder = (e) => {
e.preventDefault()
setOrder(e.target.value)}

const handlePuntuacion = (e) => {
e.preventDefault()
setPuntuacion(e.target.value)
}


    return (
        <div>
           
        <select type="select" name='dieta' value={dieta} onChange={(e) => handleDieta(e)}>
        <option value="">Filter by Diet</option>
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
        Orden
        <select type="select" name='dieta' value={order} onChange={(e) => handleOrder(e)}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
        </select>
        Puntuaciòn
        <select type="select" name='dieta' value={Puntuacion} onChange={(e) => handlePuntuacion(e)}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
        </select>
        
            
            <NavLink to='/addRecipe'>
            <h4>Add Recipe</h4>
            </NavLink>
            {
            diets.length === 0 ?
            allrecipes.length !== undefined ?
            allrecipes.map(e => 
             { return (
                
                <CardHome key={e.id}
                 id={e.id} //fix Mambo con el ID que llega tarde
                 title={e.title}
                 summary={e.summary}
                 spoonacularScore={e.spoonacularScore}
                 healthScore={e.healthScore}
                 image={e.image}
                 dishTypes={e.dishTypes}
                 dieta2={e.dieta2}
                 />
                 
                 )}) : 'Error Loading' 
                 :
                 diets.map(e => {
                     return (
                         
                            <CardHome key={e.id}
                            id={e.id} //fix Mambo con el ID que llega tarde
                            title={e.title}
                            // summary={e.summary}
                            // spoonacularScore={e.spoonacularScore}
                            // healthScore={e.healthScore}
                             image={e.image}
                            // dishTypes={e.dishTypes}
                            dieta={e.dieta}
                            />
                         
                     )
                 })
                 }
          

        </div>
    )
}
