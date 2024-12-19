const {Router} = require('express');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');

const mainRouter = Router();


    mainRouter.use("/users", usersRouter);
    mainRouter.use("/products", productsRouter)


module.exports = mainRouter;