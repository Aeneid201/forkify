let bookmarksArray = [];
export const addToLocalStorage = function (id){
    bookmarksArray.push(id);
    localStorage.bookmarks = JSON.stringify(bookmarksArray);
};

export const removeFromLocalStorage = function(id){
    const index = bookmarksArray.indexOf(id);
    if(index > -1) bookmarksArray.splice(index, 1);
    localStorage.bookmarks = JSON.stringify(bookmarksArray);
}