const errorMsg = document.querySelector('.errorMsg');
export const getRecipe = async (id) => {
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