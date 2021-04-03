const Mysql = require('mysql2')

/**
 * @description Parametros necesarios para inicializar la conexion hacia la base de datos
 * @param none
 * @returns none
 */
const Connection = Mysql.createConnection({
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'pinatas_nino_feliz',
    user: process.env.USER || 'nodejs_server',
    password: process.env.PASSWORD || 'NodeJs_2021',
})

Connection.connect(err => {
    if(err) throw err
    console.log('La base de datos se ha conectado correctamente')
})

module.exports = Connection