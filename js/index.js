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

function reset() {
    inNumAntipasti.val(0);
    inNumPrimi.val(0);
    inNumSecondi.val(0);
    inNumDolci.val(0);

    divAntipasti.empty();
    divPrimi.empty();
    divSecondi.empty();
    divDolci.empty();
}

function generateIngredients( numIngredients=1 ) {
    let ingredients = []
    for(let i = 0; i < Math.max(0, numIngredients); i++){
        ingredients.push({
            "nome": Quantity.generate()
        });
    }
    return ingredients;
}

function generateRecipe() {
    return generateIngredients()
}

function addRecipes() {
    console.log(generateRecipe())
}

window.onload = () => {
    $('#btn_reset').click(function(){
        reset();
    });

    $('#btn_generate').click(function(){
        addRecipes();
    });
};