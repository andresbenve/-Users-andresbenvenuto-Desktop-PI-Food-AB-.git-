// La lógica la tenés que hacer acá
//const {GET_RECIPES}  = require('../actions');
import { GET_RECIPES, GET_ALL_RECIPES, CREATE_ACTIVITIES, PAGINADO } from '../actions'
const initialState = {
    allrecipes: [],
    diets: [],
    pagesrecipes: []
}

function reducer (state = initialState, { type, payload }) {
    switch (type) {

    case GET_ALL_RECIPES:
    
        return {
          ...state, 
          allrecipes: payload,
        }
    case GET_RECIPES:
    
        return {
          ...state, 
          diets: payload,
        }
    case CREATE_ACTIVITIES:
    
        return {
          ...state, 
          allrecipes: state.allrecipes.concat(payload),
        }
    // case PAGINADO:
    // for (let i = payload * 10; i < ((payload + 1) * 10) - 1; i++) {
    //   var array = []
    //   array.push(state.allrecipes[i])
    //   return array
      
    // }
        // return {
        //   ...state, 
        //   pagesrecipes: array,
        // } // ndo paginar
    
    default:
        return state
    }
}

export default reducer;