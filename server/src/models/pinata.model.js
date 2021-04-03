const Database = require('../database')

const Pinata = function(pinata) {
    this.id = pinata.id,
    this.name = pinata.name,
    this.description = pinata.description,
    this.price = pinata.price,
    this.date = pinata.date
}