const { Router } = require('express');
const {
    getProductsHandler,
    getProDetalisHandler,
    createProductsHandler
} = require('../handlers/productsHandler')

const productsRouter = Router();

productsRouter.get("/", getProductsHandler)
productsRouter.get("/:id", getProDetalisHandler)
productsRouter.post("/", createProductsHandler)

module.exports = productsRouter;