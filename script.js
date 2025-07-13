let recipeCount = 0; // Initialize recipe count

document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    const imageFile = document.getElementById('recipe-image').files[0];
    const videoUrl = document.getElementById('recipe-video').value;

    const recipeList = document.getElementById('recipe-list');
    const newRecipe = document.createElement('div');
    newRecipe.classList.add('recipe');

    let imageUrl = '';
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imageUrl = event.target.result;
            displayRecipe();
        };
        reader.readAsDataURL(imageFile);
    } else {
        displayRecipe();
    }

    function displayRecipe() {
        recipeCount++; // Increment recipe count
        newRecipe.innerHTML = `
            <div class="recipe-number">${recipeCount}</div>
            <h3>${title}</h3>
            <h4>Ingredients:</h4>
            <p>${ingredients}</p>
            <h4>Instructions:</h4>
            <p>${instructions}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="${title} image">` : ''}
            ${videoUrl ? `<video controls><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>` : ''}
        `;
        recipeList.appendChild(newRecipe);
        document.getElementById('recipe-form').reset();
    }
});