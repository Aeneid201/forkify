import { getRecipe } from "./getRecipe";
import { singleRecipePage } from "./singleRecipePage";

export const showRecipeDetails = (e) => {
    let current = e.target.closest('.singleRecipeItem');
    let recipeID = current.getAttribute('data-recipeid');
    let prom = getRecipe(recipeID);

    prom.then(res => {
        if(!res) return;
        singleRecipePage(res);
    });
}