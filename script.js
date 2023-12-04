import "@fontsource/poppins";
import '@fortawesome/fontawesome-free/css/all.css';
import {createBookmark} from "./createBookmark";
import { getSearch } from "./getSearch";
import { getRecipe } from "./getRecipe";
import { createRecipeItem } from "./createRecipeItem";
import { showRecipeDetails } from "./showRecipeDetails";
import { addToLocalStorage, removeFromLocalStorage } from "./localStorage";

const resultsList = document.querySelector('.results');
const search__form = document.querySelector('.search');
const errorMsg = document.querySelector('.errorMsg');
const recipes = document.querySelector('.recipes');
const bookmarksContainer = document.querySelector('.bookmarksContainer');
const getBookmarks = document.querySelector('[data-action="get__bookmarks"]');

resultsList.addEventListener('click', function(e){
    let current = e.target.closest('.singleRecipeItem');
    let recipeID = current.getAttribute('data-recipeid');
    let prom = getRecipe(recipeID);

    prom.then(res => {
        if(!res) return;
        showRecipeDetails(res);
    });
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
});


recipes.addEventListener('click', function(e){
    let target = e.target;
    if(!target.closest('.add__bookmark')) return;
    let current = target.closest('.add__bookmark');
    let recipeid = current.getAttribute('data-recipeid');

    addToLocalStorage(recipeid);
});

getBookmarks.addEventListener('mouseover', () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarksContainer.classList.add('show');
    // console.log(bookmarks);
    // bookmarks.map(bookmark => {
    //     let prom = getRecipe(bookmark);

    //     prom.then(res => {
    //         if(!res) return;
    //         createBookmark(res);
    //     });
    // });
});

getBookmarks.addEventListener('mouseout', () => {
    bookmarksContainer.classList.remove('show');
});

