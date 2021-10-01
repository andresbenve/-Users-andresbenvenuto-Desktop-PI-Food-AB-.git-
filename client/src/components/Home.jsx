import React, { useEffect, //useState
} from 'react' 
    import { useDispatch, useSelector} from 'react-redux'
    import CardHome from "./CardHome";
    import { getRecipes } from '../actions'
    import { NavLink } from 'react-router-dom';
    

    export default function Home() {
    const dispatch = useDispatch()
    //const [page, setPage] = useState(0)
    // const [order, setOrder] = useState('ASC')
    // const [filter, setFilter] = useState('Select')

useEffect(() => {
    dispatch(getRecipes(//page, order, filter
        ))
}, [dispatch //page, order, filter
])    
const allrecipes = useSelector(state => state.allrecipes)
const diets = useSelector(state => state.diets)
    return (
        <div>
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
                 dieta={e.dieta}
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
