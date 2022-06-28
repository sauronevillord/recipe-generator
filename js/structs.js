const Measure = {
    Kg: "kg",
    g: "g",
    ciotola: "ciotola",
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
    first.concat(second);
}

function all( arr ) {
    let a = [];
    for(let i=0; i<arr.length; i++) {
        a = a.concat(arr[i]);
    }
    return a;
}

class Ingredient{
    constructor( name, measures ){
        this.name = name;
        this.measures = measures;
    }
}

function i( name, measures ){
    return new Ingredient(name, measures);
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