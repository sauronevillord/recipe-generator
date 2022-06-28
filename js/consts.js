// =========================================================================== //
// =========================== INGREDIENTS ==================================== //
// =========================================================================== //

const INGREDIENTS = shuffle([
    i("Sale", powder, "il"),
    i("Pepe", powder, "il"),
    i("Zucchero", powder, "lo"),
    i("Olio", liquid, "l'"),

    i("Aceto", liquid, "l'"),
    i("Aceto Balsamico", liquid, "l'"),
    i("Acqua", liquid, "l'"),
    i("Albicocche", divisible, "le"),
    i("Alcool", liquid, "l'"),
    i("Alici", both(light, heavy), "le"),
    i("Amarene", light, "le"),
    i("Ananas", both(divisible, heavy), "l'"),
    i("Anguria", both(divisible, heavy), "l'"),
    i("Arancia", divisible, "l'"),
    i("Aglio", divisible, "l'"),
    i("Anacardi", light, "gli"),
    i("Alga Nori", light, "le"),
    i("Albumi", divisible, "gli"),
    i("Asparagi", light, "gli"),
    i("Aroma di Vaniglia", lightLiquid, "l'"),
    i("Avocado", divisible, "l'"),
    i("Asiago", both(light, heavy), "l'"),

    i("Baccala", both(light, heavy), "il"),
    i("Banane", divisible, "le"),
    i("Bietole", both(light, heavy), "le"),
    i("Birra", liquid, "la"),
    i("Brandy", lightLiquid, "il"),
    i("Brie", both(light, heavy), "il"),
    i("Brodo di Carne", liquid, "il"),
    i("Brodo di Pollo", liquid, "il"),
    i("Brodo di Verdure", liquid, "il"),
    i("Burro", light, "il"),
    i("Bresaola", divisible, "la"),
    i("Basilico", light, "il"),
    i("Burro di Arachidi", light, "il"),

    i("Cacao", powder, "il"),
    i("Caciotta di Capra", both(light, heavy), "la"),
    i("Caffe", powder, "il"),
    i("Cannella", powder, "la"),
    i("Carciofi", both(light, heavy), "i"),
    i("Carne Macinata", both(light, heavy), "la"),
    i("Carne di Manzo", both(light, heavy), "la"),
    i("Carne di Pollo", both(light, heavy), "la"),
    i("Carne di Agnello", both(light, heavy), "la"),
    i("Carne di Tacchino", both(light, heavy), "la"),
    i("Carne di Faraona", both(light, heavy), "la"),
    i("Carne di Anatra", both(light, heavy), "la"),
    i("Carne di Maiale", both(light, heavy), "la"),
    i("Castagne", group, "le"),
    i("Chiodi di garofano", both(light, powder), "i"),
    i("Ciliege", group, "le"),
    i("Cioccolato Fondente", light, "il"),
    i("Cioccolato al Latte", light, "il"),
    i("Cioccolato bianco", light, "il"),
    i("Coca cola", liquid, "la"),
    i("Cognac", lightLiquid, "il"),
    i("Curry", powder, "il"),
    i("Curcuma", powder, "la"),
    i("Cozze", light, "le"),

    i("Erba Cipollina", group, "l'"),

    i("Farina", both(powder, heavy), "la"),
    i("Finocchi", both(light, heavy), "i"),
    i("Fiori di Zucca", group, "i"),
    i("Formaggio", both(powder, heavy), "il"),
    i("Frutta Secca", group, "la"),
    i("Funghi", group, "i"),

    i("Gamberetti", group, "i"),
    i("Guanciale", light, "il"),

    i("Ketchup", lightLiquid, "il"),
    i("Kiwi", divisible, "il"),

    i("Lamponi", divisible, "i"),
    i("Latte", liquid, "il"),
    i("Limoni", divisible, "i"),
    i("Lime", divisible, "il"),
    i("Liquirizia", group, "la"),
    i("Lievito", light, "il"),

    i("Maionese", lightLiquid, "la"),
    i("Mandorle", group, "le"),
    i("Mandarini", divisible, "i"),
    i("Mango", divisible, "il"),
    i("Marmellata di Arancia", grabbable, "la"),
    i("Marmellata di Castagne", grabbable, "la"),
    i("Marmellata di Albicocca", grabbable, "la"),
    i("Marmellata di Lamponi", grabbable, "la"),
    i("Marmellata di Frutti di Bosco", grabbable, "la"),
    i("Menta", group, "la"),
    i("Melone", both(divisible, heavy), "il"),
    i("Mele", divisible, "le"),
    i("Mirtilli", group, "i"),
    i("More", group, "le"),
    i("Mortadella", light, "la"),
    i("Mozzarella", light, "la"),

    i("Nduja", light, "la"),
    i("Noci", group, "le"),

    i("Olive", group, "le"),

    i("Pane", both(light, heavy), "il"),
    i("Panna", light, "la"),
    i("Pasta", both(light, heavy), "la"),
    i("Spaghetti", both(light, heavy), "gli"),
    i("Polipo", both(light, heavy), "il"),
    i("Piselli", group, "i"),
    i("Pinoli", group, "i"),
    i("Pistacchi", group, "i"),
    i("Pomodori", both(heavy, light), "i"),
    i("Polenta", both(heavy, light), "la"),
    i("Pesce", both(heavy, light), "il"),
    i("Pere", divisible, "le"),
    i("Prosciutto", both(heavy, light), "il"),
    i("Provola", both(heavy, light), "la"),
    i("Prugne", light, "le"),
    i("Pesche", both(heavy, light), "le"),
    i("Peperoni", both(heavy, light), "i"),

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

const TITLES =  [
    "$1 accompagnato da $2",
    "$1 decomposto",
    "$1 con contorno di $2 e $3",
    "$1 vegetariano",
    "$1 vegano",
    "$1 carnivoro",
    "Panino con $1 e $2",
    "Pasta con $1",
    "$1 con spruzzatina di $2",
    "$1 e $2 con sapore di $3",
    "$1 con contorno di $2",
    "$1 agli scogli",
    "$1 all'italiana",
    "$1 all'americana",
    "$1 messicano con $2",
    "$1 con sapori di giappone",
    "Filetto di $1 alla milanese",
    "$1 al sugo di $2",
    "$1 al sugo di $2 e $3",
    "Cous cous di $1",
    "Cous cous di $1 con contorno di $2",
    "Sugo al $1",
    "Insalata di $1",
]

const ACTIONS = [
    "Versate $ing in una ciotola e mescolate",
    "Aggiungete $ing mentre mescolate piano il composto",
    "Aggiungete $ing in un pentolino con l'acqua",
    "Mondate e Tritate finemente $ing",
    "Versate $ing in una padella e lasciatelo tostare",
    "Mescolate $ing in una ciotola",
    "Aggiungete $ing e coprite con un coperchio per un'ora",
    "Tagliate finemente $ing e versate il tutto in una padella, accendete e lasciatelo cuocere a fuoco lento per un'ora",
    "Aggiungete $ing in una padella e lasciate cuocere, fate attenzione a non bruciarlo",
    "Aggiungete $ing e amalgamate il tutto con una frusta a mano",
    "Togliete dal fuoco e aggiungete $ing",
    "Aggiungete $ing e mescolate velocemente",
    "Trasferite $ing in una ciotolina e lasciatelo da parte",
]

const ACTIONS_W = [
    "Prendete una ciotola",
    "Levate dal fuoco la padella e lasciatela da parte",
    "Lasciate evaporare completamente",
    "Lasciate in infusione per tutta la notte",
    "Lasciate in infusione per qualche ora",
]

const CONNECTORS = [
    ", dopodiche ",
    ". ",
    ", ",
    ", nel frattempo ",
    ", intanto ",
    ", mentre sobbolle, ",
    " e ",
] 