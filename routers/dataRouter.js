const express = require ('express');
const router = express.Router();
const dataRouterService = require ('../service/dataRouterService');

router.get ('/api/data', async function (req, res, next){
    try{
        res.json(await dataRouterService.getMultiple(req.query.page));
    } catch (err){
        console.error('Error mengambil data',err.massage);
        next(err)
    }
})
module.exports = router