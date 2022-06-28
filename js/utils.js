// ----------------------- Array and obj-related -------------------------------------- //

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

function objSize(obj) {
    return Object.keys(obj).length;
}

function getRandomArrayItem(array) {
    return array[ Math.floor( Math.random() * array.length ) ];
}

function getObjItemFromIndex(obj, index=0) {
    return Object.keys(obj)[index];
}

function getRandomObjItem(obj) {
    return obj[ getObjItemFromIndex( obj, Math.floor ( Math.random() * objSize(obj) ) ) ];
}

function randomInt( min=0, max=10 ) {
    return Math.floor ( Math.random() * (max - min) ) + min;
}

// ----------------------- Input Num Ricette -------------------------------------- //

// const inNumAntipasti = $('#in_num_antipasti');
// const inNumPrimi = $('#in_num_primi');
// const inNumSecondi = $('#in_num_secondi');
// const inNumDolci = $('#in_num_dolci');
const inNum = $('#in_num');
const inNumIngr = $('#in_num_ingr');

// const divAntipasti = $('#div_antipasti');
// const divPrimi = $('#div_primi');
// const divSecondi = $('#div_secondi');
// const divDolci = $('#div_dolci');
const divRicette = $('#div_ricette');

function getNumRecipe() {
    return Math.max(1, inNum.val());
}

function getNumIngr() {
    return Math.max(0, inNumIngr.val());
}

// function getNumAntipasti() {
//     return Math.max(1, inNumAntipasti.val());
// }

// function getNumPrimi() {
//     return Math.max(1, inNumPrimi.val());
// }

// function getNumSecondi() {
//     return Math.max(1, inNumSecondi.val());
// }

// function getNumDolci() {
//     return Math.max(1, inNumDolci.val());
// }

// ----------------------- Recipes and Ingredients related -------------------------------------- //

function getRandomIngredientName( ingredientsArray ) {
    return getRandomArrayItem(ingredientsArray).ingredient.name;
}

function ingredientsToString( ingredients ) {
    let str = "";

    ingredients.forEach( (ingredient) => {
        str += ingredient.toStr() + "\n";
    });

    return str;
}

function recipeIngredientsToString( recipe ) {
    return ingredientsToString(recipe["ingredients"]);
}

function areThereIngredients( recipe ) {
    recipe["ingredients"].forEach( (ingredient) => {
        if ( ingredient.isThereMore() ) {
            return true;
        }
    });

    return false;
}