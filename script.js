import "@fontsource/poppins";
import '@fortawesome/fontawesome-free/css/all.css';

'use strict';

const resultsList = document.querySelector('.results');
const search__form = document.querySelector('.search');
const errorMsg = document.querySelector('.errorMsg');


const getSearch = async function(keyword) {
    try{
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
        const data = await response.json();

        if(data.error) {
            errorMsg.classList.remove('d-none');
            throw new Error('No results found for query');
        };

        return data['recipes'];
    }catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

const getRecipe = async function(id) {
    try{
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        const data = await response.json();

        if(data.error) {
            errorMsg.classList.remove('d-none');
            throw new Error('Invalid recipe ID');
        };

        return data['recipe'];
    }catch (err) {
        console.error(`Error: ${err.message}`);
    }
}


const createRecipeItem = function(data) {
    let layout = `<li class="singleRecipe" data-recipeID="${data['recipe_id']}">
    <a href="#" data-action="preview__recipe">
        <img src="${data['image_url']}" alt="${data['title']}">
        <div class="details">
            <p class="title text-uppercase">${data['title']}</p>
            <span class="publisher">${data['publisher']}</span>
        </div>
    </a>
</li>`;

resultsList.insertAdjacentHTML('beforeend', layout);
}

search__form.addEventListener('submit', function(e){
    e.preventDefault();

    resultsList.innerHTML = "";
    let keyword = this.elements[0];
    if(!keyword.value) return;

    let results  = getSearch(keyword.value);
    results.then(res => {
        if(!res) return;
        errorMsg.classList.add('d-none');
        res.map(recipe => {createRecipeItem(recipe);});
    });
});