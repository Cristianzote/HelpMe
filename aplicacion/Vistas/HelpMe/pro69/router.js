const express = require('express');
const router = express.Router();


router.get('/pato',(req,res)=>{
    res.send("datos dela ruta");
 });

 router.get('/datos', (req,res)=>{
    res.render('index.ejs');
})

module.exports = router;