var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render("./products/products.ejs")
    // res.send('我是產品清單');
});

router.get('/:productId', function (req, res, next) {
    res.locals.productId = req.params.productId;
    console.log(req.params.productId);
    res.render("./products/product.ejs");
});

module.exports = router;