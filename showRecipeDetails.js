const recipes = document.querySelector('.recipes');
export const showRecipeDetails = function (data) {
    recipes.innerHTML = "";
    let layout = `<div class="singleRecipe">
    <div class="img position-relative">
        <img src="${data['image_url']}" alt="${data['title']}">
        <h2>${data['title']}</h2>
    </div>

    <div class="info text-center">
        <a href="#" data-recipeid="${data['recipe_id']}" class="default add__bookmark"> <i class="fa-solid fa-bookmark"></i> Add</a>
    </div>

    <div class="ingredients">
        <h3 class="text-center text-uppercase">Recipe ingredients</h3>
        <ul class="nolist">`;
        data['ingredients'].map(ingredient => {layout+=`<li>${ingredient}</li>`;})

       layout+= `</ul>
    </div>

    <div class="how text-center">
        <h3 class="text-uppercase">How to cook it</h3>
        <p>This recipe was carefully designed and tested by <strong>${data['publisher']}</strong>. Please check out directions at their website.                        </p>

        <a href="${data['source_url']}" target="_blank" class="default round">Directions</a>
    </div>
</div>`;
recipes.insertAdjacentHTML('beforeend', layout);
}