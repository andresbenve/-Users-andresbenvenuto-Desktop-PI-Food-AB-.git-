const  axios  = require("axios")
const {Recipe, Type, recipe_type, Op} = require('../db');
const { API_KEY2, API_KEY, API_KEY3} = process.env

const data = async () => {
    let arr = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true`)).data.results
    return arr
}

const getRecipes = async (req, res) => {
    
    const name = req.query.name
    // const page = req.query.page
    // const filter = req.query.filter
    // const order = req.query.order
 
    let apiFood = await data()
    apiFood = apiFood.map(e => {
        return {
        id: e.id,
        title: e.title,
        summary: e.summary,
        spoonacularScore: e.spoonacularScore,
        healthScore: e.healthScore,
        image: e.image,
        dishTypes: e.dishTypes,
        dieta: e.diets
    }})             
        try {
             let hay = await Recipe.findAll()
             if(!hay.length) await Recipe.bulkCreate(apiFood)  
         } catch (error) {
             console.log(error);    
         }
  // De acá para abajo código de Andres Benvenuto
    if(name){
        try {
            console.log(name);
            let coun = await Recipe.findAll({ 
                 where: {
                     title: { [Op.iLike]: '%' + name + '%' }}
         })
        console.log(coun, 'un poco mas de datita no le viene mal a');
        return res.status(200).json(coun)
        } catch (error) {
            console.log(error);    
        }} 
// } else if (filter){
//     try { // fix
//         let filtered_recipe = await Recipe.findAll({
//             dishTypes: { query }
//     })
//     return res.status(200).json(filtered_recipe)
//     } catch (error) {
//         console.log(error);
//     }
// } 
        else {
        let coun = await Recipe.findAll()
    return res.status(200).json(coun)
}
}

const postRecipes = async (req, res, next) => {
    
    let {id, title, summary, image, spoonacularScore , healthScore , dieta} = req.body
    try {

    let newRecipe = await Recipe.findOrCreate({ 
        // Siempre que uso Await lo tengo que guardar en una variable
        // Le digo que busque o cree en base a los siguientes campos
        where: {
           id: id, 
           title: title,
           summary: summary,
           image: image,
           spoonacularScore: spoonacularScore,
           healthScore: healthScore,
           dieta: dieta,

        }
    })
    console.log(newRecipe);
    
  
        //  await newRecipe[0].addRecipe()
        return res.status(200).json(newRecipe)
    } catch (error) {
        next(error);
    }}

          

module.exports = {
    getRecipes,
    postRecipes
}