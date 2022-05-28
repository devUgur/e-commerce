const router = require('express').Router();
const Product = require('../objects/product/product.class');

router.get('/', async (req, res) => {
    try{

        const newProduct = new Product();

        newProduct.setName("Moroccan Hash");

        res.json({
            error: false,
            data: "product.route.js response",
            item: newProduct.toJSON()
        });

    }catch (e){
        console.log(e);
    }
});

router.get('/:id', async (req, res) => {
    try{

        res.json({
            error: false,
            data: "product.route.js response for product: " + req.params.id,
        });
    }catch (e){
        console.log(e);
    }
});

router.post('/', async (req, res) => {
    try{
        res.json({
            error: false,
            data: "product.route.js response for product: " + req.params.id,
        });
    }catch (e){
        console.log(e);
    }
});

module.exports = router;