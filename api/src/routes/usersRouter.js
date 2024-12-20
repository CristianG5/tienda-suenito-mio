const { Router } = require('express');
const { getUsersHandler, getDetailsHandler, createUsersHandler } = require('../handlers/usersHandler')

const usersRouter = Router();



usersRouter.get("/", getUsersHandler)

usersRouter.get("/:id", getDetailsHandler)

usersRouter.post("/", createUsersHandler)

module.exports = usersRouter;