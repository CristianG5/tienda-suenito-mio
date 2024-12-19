const {Router} = require('express');

const productsRouter = Router();


    productsRouter.get("/", (req, res)=>{
        res.status(200).send('Todos los productos')
    })

    productsRouter.get("/:id", (req, res)=>{
        res.status(200).send('Detalle del producto')
    })


    productsRouter.post("/", (req, res)=>{
        res.status(200).send('Creando productos')
    })

module.exports = productsRouter;