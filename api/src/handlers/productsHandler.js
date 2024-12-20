const getProductsHandler = (req, res)=>{
    const {name} = req.query
    if(name){
        res.status(200).send(`Este es el producto ${name}`)
    }else
    res.status(200).send('Todos los productos')
}

const getProDetalisHandler = (req, res)=>{
    const {id} = req.params
    res.status(200).send(`Detalle del producto ${id}`)
}

const createProductsHandler = (req, res)=>{
    const {name} = req.body
    res.status(200).send('Producto creado')
}

module.exports = {
    getProductsHandler,
    getProDetalisHandler,
    createProductsHandler
}