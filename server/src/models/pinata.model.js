const Database = require("../services/database")
const { TABLE_NAME } = require("../constants/index")

/**
 * @description Modelo a seguir para el objeto Pinata
 * @param {*} pinata Modelo previo
 * @returns none
 */
const Pinata = function (pinata) {
  this.id = pinata.id,
  this.name = pinata.name,
  this.description = pinata.description,
  this.price = pinata.price,
  this.existence = pinata.existence,
  this.createAt = pinata.createAt,
  this.updateAt = pinata.updateAt
}
 /**
  * @description Logica para manejar el errores surgido
  * @param {*} error 
  * @param {*} result 
  * @returns void
  */
const Error = (error, result) => {
  console.log(`Error: ${error}`)
  result(null, error)
  return
}

/**
 * @description Llamado a la base de datos para crear la nueva pinata
 * @param {*} newPinata Contenido de la nueva pinata
 * @param {*} result
 * @returns none
 */
Pinata.createPinata = (newPinata, result) => {
  Database.query(`INSERT INTO ${TABLE_NAME} SET ?`, newPinata, (err, res) => {
    if (err) Error(err, result)
    console.log(`Created Pinata ${{ id: res.insertId, ...newPinata }}`)
    result(null, { id: res.insertId, ...newPinata })
  })
}

/**
 * @description Llamado a la base de datos para obtener todas las pinatas
 * @param {*} result 
 * @returns none
 */
Pinata.GetAll = (result) => {
  Database.query(`SELECT * FROM ${TABLE_NAME}`, (err, res) => {
    if (err) Error(err, result)
    console.log(`Pinata:`, res)
    result(null, res)
  })
}

module.exports = Pinata