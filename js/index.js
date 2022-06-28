const MIN_INGREDIENTS = 3;
const MAX_INGREDIENTS = 15;

const SENTENCE_W_PROB = 1/10;

// function add_antipasto( txt, append=true ) {
//     if ( !append ) {
//         div_antipasti.empty();
//     }

//     if ( !$('#title_antipasti').length ) {
//         div_antipasti.append(`
//             <h1 id="title_antipasti">Antipasti</h1>
//         `);
//     }

//     div_antipasti.append(`
//         <h2>${recipe['title']}</h2>
//         <p>${recipe['preparation']}</p>
//     `);
// }

function addRecipe( recipe, num, append=true ){
    if ( !append ) {
        divRicette.empty();
    }
    divRicette.append(`\n
        <h2>${recipe["title"]}</h2>\n
    `)

    divRicette.append(`\n
        <ul class="collection with-header" id="${num}">\n
        <li class="collection-header" style="background-color: #1D2021"><h4>Ingredienti</h4></li>\n
        </ul>
    `)
    let ul = $('#'+num);
    recipe["ingredients"].forEach( (ingredient) => {
        ul.append(`\n
            <li class="collection-item" style="background-color: #1D2021">${ingredient.toStr()}</li>\n
        `)
    });

    divRicette.append(`\n
        <p class="flow-text">${recipe["preparation"]}</p>\n
    `)

    divRicette.append(`\n
        <div class="divider"></div>\n
    `)
}

function reset(values=true) {
    // inNumAntipasti.val(0);
    // inNumPrimi.val(0);
    // inNumSecondi.val(0);
    // inNumDolci.val(0);

    // divAntipasti.empty();
    // divPrimi.empty();
    // divSecondi.empty();
    // divDolci.empty();
    if ( values ) {
        inNum.val(1);
        inNumIngr.val(MAX_INGREDIENTS);
    }
    divRicette.empty();
}

function generateTitle( ingredients ) {
    let title = getRandomArrayItem(TITLES);
    
    let ing1 = getRandomIngredientName(ingredients);
    let ing2 = getRandomIngredientName(ingredients);
    let ing3 = getRandomIngredientName(ingredients);
    
    title = title.replace("$1", ing1);
    title = title.replace("$2", ing2);
    title = title.replace("$3", ing3);

    return title;
}

function generateIngredients( numIngredients=MIN_INGREDIENTS ) {
    let ingredients = []
    for(let i = 0; i < Math.max(MIN_INGREDIENTS, numIngredients); i++){
        ingredients.push(
            RecipeIngredient.generate(INGREDIENTS)
        );
    }
    return ingredients;
}

function generateRecipe() {
    let recipe = {
        "title": "",
        "ingredients": [],
        "preparation": "",
    };

    let numIngredients = randomInt(MIN_INGREDIENTS, getNumIngr());
    let usedIngr = [];

    let ingredients = generateIngredients(numIngredients);
    let title = generateTitle(ingredients);
    let preparation = "";

    while (usedIngr.length < ingredients.length) {
        let ing = getRandomArrayItem(ingredients);
        if ( !usedIngr.includes(ing) ) {
            usedIngr.push(ing);
        }

        preparation += getRandomArrayItem(ACTIONS).replace("$ing", ing.inSentence());
        
        if (usedIngr.length < ingredients.length) {
            
            preparation += getRandomArrayItem(CONNECTORS);
            
            if (Math.random() <= SENTENCE_W_PROB) {
                preparation += getRandomArrayItem(ACTIONS_W);
                preparation += getRandomArrayItem(CONNECTORS);
            }
        }
    }

    recipe["title"] = title;
    recipe["ingredients"] = ingredients;
    recipe["preparation"] = preparation;

    return recipe;
}

function addRecipes() {
    reset(false);
    for (let i=0; i<getNumRecipe(); i++) {
        addRecipe(generateRecipe(), i);
    }
}

window.onload = () => {
    $('#btn_reset').click(function(){
        reset();
    });

    $('#btn_generate').click(function(){
        addRecipes();
    });
};