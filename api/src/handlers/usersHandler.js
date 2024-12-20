const getUsersHandler = (req, res)=>{
    const {name} = req.query;
        if(name) {
            res.status(200).send(`Aqui esta el usuario ${name}`)
        }else
        res.status(200).send('Todos los usuarios')
}

const getDetailsHandler = (req, res)=>{
    const {id} = req.params
    res.status(200).send(`Detalle del usuario ${id}`)
} 

const createUsersHandler = (req, res)=>{
    const {name, email} = req.body
    res.status(200).send(`Usuario ${name} creado con el email ${email}`)
}

module.exports = {
    getUsersHandler,
    getDetailsHandler,
    createUsersHandler
}