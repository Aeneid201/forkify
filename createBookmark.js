const bookmarksContainer = document.querySelector('.bookmarksContainer');
export const createBookmark = function(data) {
    let layout = `<div class="singleRecipeItem" data-recipeID="${data['recipe_id']}">
    <a href="javascript:void(0);" data-action="preview__recipe">
        <img src="${data['image_url']}" alt="${data['title']}">
        <div class="details">
            <p class="title text-uppercase">${data['title']}</p>
            <span class="publisher">${data['publisher']}</span>
        </div>
        </a>
    </div>`;
    bookmarksContainer.insertAdjacentHTML('beforeend', layout);
}

//TODO: add new bookmark to bookmarksContainer