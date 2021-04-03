module.exports = app => {
  const pinatas = require('../controllers/pinata.controller')

  //metodo POST => /api/pinatas => Creacion de una nueva pinata
  app.post('/api/pinatas', pinatas.CreatePinata)
  
  //metodo GET => /api/pinatas => Obtener todas las pinatas
  app.get('/api/pinatas', pinatas.GetAll)
}