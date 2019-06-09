var express = require('express');
var router = express.Router();

function formatNumber(number) {
    if (number >= 1 && number < 10) {
        return "00" + number;
    } else if (number >= 10 && number < 100) {
        return "0" + number;
    } else {
        return number;
    }
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.formatNumber = formatNumber;
    res.render("./pokemons/pokemons.ejs");
    // res.send('我是產品清單');
});

router.get('/:pokemonId', function (req, res, next) {
    res.locals.pokemonId = req.params.pokemonId;
    res.locals.formatNumber = formatNumber;
    // console.log(req.params.productId);
    res.render("./pokemons/pokemon.ejs");
});

module.exports = router;