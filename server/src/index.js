const app = require("./server")
require("dotenv").config()
require("./services/database")

app.listen(app.get("port"), () => {
  console.log(`Servidor encendido en el puerto ${app.get("port")}`)
})
