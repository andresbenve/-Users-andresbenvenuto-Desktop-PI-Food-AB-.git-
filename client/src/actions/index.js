const axios = require('axios')
export const GET_RECIPES = 'GET_RECIPES'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'

export const getRecipes =  (page, order, filter) => { // Si no empiezas con export no vas a ningún lado 
  return async function (dispatch) {
    try {
    let recipe = await axios.get('http://localhost:3001/recipe?page=' + page + '&order=' + order + '&filter=' + filter) // fix back request
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



