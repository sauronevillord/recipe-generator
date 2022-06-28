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

// ----------------------- Input Num Ricette -------------------------------------- //

const inNumAntipasti = $('#in_num_antipasti');
const inNumPrimi = $('#in_num_primi');
const inNumSecondi = $('#in_num_secondi');
const inNumDolci = $('#in_num_dolci');

const divAntipasti = $('#div_antipasti');
const divPrimi = $('#div_primi');
const divSecondi = $('#div_secondi');
const divDolci = $('#div_dolci');

function getNumAntipasti() {
    return Math.max(0, inNumAntipasti.val());
}

function getNumPrimi() {
    return Math.max(0, inNumPrimi.val());
}

function getNumSecondi() {
    return Math.max(0, inNumSecondi.val());
}

function getNumDolci() {
    return Math.max(0, inNumDolci.val());
}