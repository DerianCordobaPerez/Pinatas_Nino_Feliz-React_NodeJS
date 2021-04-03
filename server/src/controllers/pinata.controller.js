const Pinata = require("../models/pinata.model")

/**
 * @description Controlador con el objetivo para crear pinatas 
 * @param {*} req 
 * @param {*} res
 * @returns none 
 */
exports.CreatePinata = (req, res) => {
  if (!req.body)
    res.status(400).send({ message: "El contenido no puede estar vacio!" })

  const pinata = new Pinata({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    existence: req.body.existence,
    createAt: Date.now(),
    updateAt: Date.now(),
  })

  Pinata.createPinata(pinata, (err, data) => {
    if (err)
      res.status(500).send({ message: err.message || "Ha ocurrido un error al crear la pinata" })
    else res.send(data)
  })
}

/**
 * @description Controlador con el objetivo para obtener todas las pinatas
 * @param {*} req
 * @param {*} res
 * @returns none
 */
exports.GetAll = (req, res) => {
  Pinata.GetAll((err, data) => {
    if (err) 
      res.status(500).send({ message: err.message || 'Ha ocurrido un error al obtener todas las pinatas' })
    else res.send(data)
  })
}