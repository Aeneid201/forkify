const errorMsg = document.querySelector('.errorMsg');
export const getSearch = async function(keyword) {
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