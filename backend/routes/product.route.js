const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        res.json({
            error: false,
            data: "product.route.js response"
        });
    }catch (e){
        console.log(e);
    }
});

module.exports = router;