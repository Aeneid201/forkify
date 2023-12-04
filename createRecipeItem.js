const resultsList = document.querySelector('.results');
export const createRecipeItem = function(data) {
    let layout = `<li class="singleRecipeItem" data-recipeID="${data['recipe_id']}">
    <a href="javascript:void(0);" data-action="preview__recipe">
        <img src="${data['image_url']}" alt="${data['title']}">
        <div class="details">
            <p class="title text-uppercase">${data['title']}</p>
            <span class="publisher">${data['publisher']}</span>
        </div>
        </a>
    </li>`;
    resultsList.insertAdjacentHTML('beforeend', layout);
}