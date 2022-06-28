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