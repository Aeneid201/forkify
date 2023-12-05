let bookmarksArray = [];
if(localStorage.bookmarks) bookmarksArray= JSON.parse(localStorage.bookmarks);

export const addToLocalStorage = (id) => {
    if(bookmarksArray.indexOf(id) > -1) return;
    bookmarksArray.push(id);
    localStorage.bookmarks = JSON.stringify(bookmarksArray);
};

export const isBookmarked = (id) => {
    if(bookmarksArray.indexOf(id) > -1) return true;
    else return false;
}

export const removeFromLocalStorage = (id) => {
    let index = bookmarksArray.indexOf(id);
    if(index > -1) bookmarksArray.splice(index, 1);
    localStorage.bookmarks = JSON.stringify(bookmarksArray);
}