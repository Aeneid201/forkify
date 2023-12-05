import "@fontsource/poppins";
import '@fortawesome/fontawesome-free/css/all.css';
import {updateBookmarks} from "./handleBookmark";
import { getSearch } from "./getSearch";
import { createRecipeItem } from "./createRecipeItem";
import { addToLocalStorage, removeFromLocalStorage, isBookmarked } from "./localStorage";
import { showRecipeDetails } from "./showRecipeDetails"; 

const resultsList = document.querySelector('.results');
const search__form = document.querySelector('.search');
const errorMsg = document.querySelector('.errorMsg');
const recipes = document.querySelector('.recipes');
const bookmarksContainer = document.querySelector('.bookmarksContainer');
const getBookmarks__button = document.querySelector('[data-action="get__bookmarks"]');

resultsList.addEventListener('click', (e) => {
    showRecipeDetails(e);
});


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
    keyword.value = "";
});

bookmarksContainer.addEventListener('click', (e) => {
    showRecipeDetails(e);
});

recipes.addEventListener('click', (e) => {
    let target = e.target;
    if(!target.closest('.handleBookmark')) return;
    let current = target.closest('.handleBookmark');
    let recipeid = current.getAttribute('data-recipeid');

    if(isBookmarked(recipeid)) {
        removeFromLocalStorage(recipeid);
        current.classList.add('add__bookmark');
        current.classList.remove('remove__bookmark');
        current.innerHTML = `<i class="fa fa-add"></i>`;
        
    }else{
        addToLocalStorage(recipeid);
        current.classList.remove('add__bookmark');
        current.classList.add('remove__bookmark');
        current.innerHTML = `<i class="fa fa-remove"></i>`;;
    }   
});

getBookmarks__button.addEventListener('mouseover', () => {
    updateBookmarks();
});
