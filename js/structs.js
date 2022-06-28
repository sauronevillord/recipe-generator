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



// =========================================================================== //
// =========================== INGREDIENTS ==================================== //
// =========================================================================== //

const INGREDIENTS = shuffle([
    i("Sale", powder),
    i("Pepe", powder),
    i("Zucchero", powder),
    i("Olio", liquid),

    i("Aceto", liquid),
    i("Aceto Balsamico", liquid),
    i("Acqua", liquid),
    i("Albicocche", divisible),
    i("Alcool", liquid),
    i("Alici", both(light, heavy)),
    i("Amarene", light),
    i("Ananas", both(divisible, heavy)),
    i("Anguria", both(divisible, heavy)),
    i("Arancia", divisible),
    i("Aglio", divisible),
    i("Anacardi", light),
    i("Alga Nori", light),
    i("Albumi", divisible),
    i("Asparagi", light),
    i("Aroma di Vaniglia", lightLiquid),
    i("Avocado", divisible),
    i("Asiago", both(light, heavy)),

    i("Baccala", both(light, heavy)),
    i("Banane", divisible),
    i("Bietole", both(light, heavy)),
    i("Birra", liquid),
    i("Brandy", lightLiquid),
    i("Brie", both(light, heavy)),
    i("Brodo di Carne", liquid),
    i("Brodo di Pollo", liquid),
    i("Brodo di Verdure", liquid),
    i("Burro", light),
    i("Bresaola", divisible),
    i("Basilico", light),
    i("Burro di Arachidi", light),

    i("Cacao", powder),
    i("Caciotta di Capra", both(light, heavy)),
    i("Caffe", powder),
    i("Cannella", powder),
    i("Carciofi", both(light, heavy)),
    i("Carne Macinata", both(light, heavy)),
    i("Carne di Manzo", both(light, heavy)),
    i("Carne di Pollo", both(light, heavy)),
    i("Carne di Agnello", both(light, heavy)),
    i("Carne di Tacchino", both(light, heavy)),
    i("Carne di Faraona", both(light, heavy)),
    i("Carne di Anatra", both(light, heavy)),
    i("Carne di Maiale", both(light, heavy)),
    i("Castagne", group),
    i("Chiodi di garofano", both(light, powder)),
    i("Ciliege", group),
    i("Cioccolato Fondente", light),
    i("Cioccolato al Latte", light),
    i("Cioccolato bianco", light),
    i("Coca cola", liquid),
    i("Cognac", lightLiquid),
    i("Curry", powder),
    i("Curcuma", powder),
    i("Cozze", light),

    i("Erba Cipollina", group),

    i("Farina", both(powder, heavy)),
    i("Finocchi", both(light, heavy)),
    i("Fiori di Zucca", group),
    i("Formaggio", both(powder, heavy)),
    i("Frutta Secca", group),
    i("Funghi", group),

    i("Gamberetti", group),
    i("Guanciale", light),

    i("Ketchup", lightLiquid),
    i("Kiwi", divisible),

    i("Lamponi", divisible),
    i("Latte", liquid),
    i("Limoni", divisible),
    i("Lime", divisible),
    i("Liquirizia", group),
    i("Lievito", light),

    i("Maionese", lightLiquid),
    i("Mandorle", group),
    i("Mandarini", divisible),
    i("Mango", divisible),
    i("Marmellata di Arancia", grabbable),
    i("Marmellata di Castagne", grabbable),
    i("Marmellata di Albicocca", grabbable),
    i("Marmellata di Lamponi", grabbable),
    i("Marmellata di Frutti di Bosco", grabbable),
    i("Menta", group),
    i("Melone", both(divisible, heavy)),
    i("Mele", divisible),
    i("Mirtilli", group),
    i("More", group),
    i("Mortadella", light),
    i("Mozzarella", light),

    i("Nduja", light),
    i("Noci", group),

    i("Olive", group),

    i("Pane", both(light, heavy)),
    i("Panna", light),
    i("Pasta", both(light, heavy)),
    i("Spaghetti", both(light, heavy)),
    i("Polipo", both(light, heavy)),
    i("Piselli", group),
    i("Pinoli", group),
    i("Pistacchi", group),
    i("Pomodori", both(heavy, light)),
    i("Polenta", both(heavy, light)),
    i("Pesce", both(heavy, light)),
    i("Pere", divisible),
    i("Prosciutto", both(heavy, light)),
    i("Provola", both(heavy, light)),
    i("Prugne", light),
    i("Pesche", both(heavy, light)),
    i("Peperoni", both(heavy, light)),

    // Q https://www.gnamgnam.it/elenco-ingredienti
]);

/*
const INGREDIENTS = {
    
    "pasti": {
        "principali": shuffle([
            i("Albicocche", divisible),
            i("Alici", both(light, heavy)),
        ]),
        "secondari": shuffle([

        ])
    },
    

    "dolci": shuffle([

    ]),
}
*/