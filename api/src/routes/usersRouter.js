const {Router} = require('express');

const usersRouter = Router();

    usersRouter.get("/", (req, res)=>{
        res.status(200).send('Todos los usuarios')
    })

    usersRouter.get("/:id", (req, res)=>{
        res.status(200).send('Detalle del usuario')
    })

    usersRouter.post("/", (req, res)=>{
        res.status(200).send('Creando usuario')
    })

module.exports = usersRouter;