// La lógica la tenés que hacer acá
//const {GET_RECIPES}  = require('../actions');
import { GET_RECIPES, GET_ALL_RECIPES } from '../actions'


const initialState = {
    allrecipes: [],
    diets: []
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
    
    default:
        return state
    }
}

export default reducer;