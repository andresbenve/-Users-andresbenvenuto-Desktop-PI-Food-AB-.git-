const axios = require('axios')
export const GET_RECIPES = 'GET_RECIPES'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES'
export const PAGINADO = 'PAGINADO'

export const getRecipes =  (order, dieta, Puntuacion) => { // Si no empiezas con export no vas a ningún lado 
  return async function (dispatch) {
    try {
    let recipe = await axios.get('http://localhost:3001/recipe?order=' + order + '&Puntuacion=' + Puntuacion + '&dieta=' + dieta) // fix back request
    //console.log(recipe.data);
    
    return dispatch({ type: GET_ALL_RECIPES, payload: recipe.data});
} catch (error) {
    console.log(error);   
}}}

export const getRecipesName =  (name) => { // Si no empiezas con export no vas a ningún lado 
  return async function (dispatch) {
    try {
    let recipe = await axios.get('http://localhost:3001/recipe?name=' + name) // fix back request
    return dispatch({ type: GET_RECIPES, payload: recipe.data});
} catch (error) {
    console.log(error);   
}}}

export const formCreateRecipe =  (payload) => { // Si no empiezas con export no vas a ningún lado 
  return async function (dispatch) {
    try {
    console.log(payload);
    let recipe = await axios.post('http://localhost:3001/recipe', payload) // fix back request
    console.log(recipe.data);
    return dispatch({ type: CREATE_ACTIVITIES, payload: recipe.data});
} catch (error) {
    console.log(error);   
}}}

// export const paginado = (payload) => {
//   return {
//     type: PAGINADO,
//     payload: payload
//   }
// } // Intentando paginar



