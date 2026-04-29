require('dotenv').config()
console.log('ENV:', process.env.DATABASE_URL)
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})


pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Erro:', err)
    } else {
        console.log('Conectado', res.rows)
    }
})

module.exports = pool