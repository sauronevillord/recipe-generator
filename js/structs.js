const Measure = {
    Kg: "kg",
    g: "g",
    ciotola: "ciotole",
    pizzico: "pizzichi",
    cucchiaino: "cucchiaini",
    cucchiaio: "cucchiai",
    l: "l",
    cl: "cl",
    ml: "ml",
    spicchio: "spicchi",
}

const liquid = [Measure.l, Measure.cl, Measure.ml];
const heavy = [Measure.Kg];
const light = [Measure.g];
const lightLiquid = [Measure.cl, Measure.ml];
const heavyLiquid = [Measure.l];
const powder = [Measure.pizzico, Measure.cucchiaio, Measure.cucchiaino];
const grabbable = [Measure.cucchiaino, Measure.cucchiaio, Measure.g];
const group = [Measure.ciotola, Measure.g, Measure.Kg];
const divisible = [Measure.g, Measure.spicchio];

function both( first, second ) {
    return first.concat(second);
}

class Ingredient{
    constructor( name, measures, art="il" ){
        this.name = name;
        this.measures = measures;
        this.art = art;
    }
}

function i( name, measures, art ){
    return new Ingredient(name, measures, art);
}

class Quantity{
    constructor( quantity, measure ) {
        this.quantity = Number(quantity.toFixed(2));
        this.measure = measure;
        this.currQuantity = this.quantity;
    }

    use(x) {
        x = Math.min(x, this.currQuantity);
        this.currQuantity -= x;
        this.currQuantity = Number(this.currQuantity.toFixed(2));
        return x
    }

    canUse(x) {
        return x <= this.currQuantity;
    }

    isThereMore() {
        return this.currQuantity > 0;
    }

    toStr() {
        return "" + this.quantity + " " + this.measure;
    }

    static generate( measure=Measure.Kg, useRandom=true ) {
        let m = measure;
        if ( m != Measure.Kg ) {
            useRandom = false;
        }
        if ( useRandom ) {
            m = getRandomObjItem(Measure);
        }
        let M = 0;
        switch(m){
            case Measure.Kg:
                M = 2;
                break;
            case Measure.g:
                M = 1000;
                break;
            case Measure.ciotola:
                M = 2;
                break;
            case Measure.pizzico:
                M = 5;
                break;
            case Measure.l:
                M = 2;
                break;
            case Measure.cl:
                M = 200;
                break;
            case Measure.ml:
                M = 2000;
                break;
            case Measure.spicchio:
                M = 10;
                break;
            case Measure.cucchiaino:
                M = 5;
                break;
            case Measure.cucchiaio:
                M = 3;
                break;
            default:
                M = 10;
                break;
        }

        return new Quantity( Math.random() * M, m );
    }
}

class RecipeIngredient {
    
    constructor( ingredient, quantity ) {
        this.ingredient = ingredient;
        this.quantity = quantity;
    }

    toStr() {
        return this.ingredient.name + ": " + this.quantity.toStr();
    }

    inSentence() {
        return this.ingredient.art + " " + this.ingredient.name;
    }

    isThereMore() {
        return this.quantity.isThereMore();
    }

    static generate( ingredientsArray ) {
        let ingredient = getRandomArrayItem( ingredientsArray );
        let measure = getRandomArrayItem( ingredient.measures );
        let quantity = Quantity.generate(measure, useRandom=false);
        return new RecipeIngredient(ingredient, quantity);
    }

}