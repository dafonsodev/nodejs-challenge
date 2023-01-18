const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const conn = mysql.createConnection(config)

var sql = `INSERT INTO people (name) values ('Larry'), ('Moe'), ('Curly')`
conn.query(sql)

app.get('/', (req,res) => {
    var sql = 'SELECT * FROM people'
    connection.query(sql, (error, results, fields) => {
        res.send(
            `<h1>Full Cycle Rocks!</h1>
            <ol>
                ${
                    !!results.length ? results.map((p) => `<li>${p.name}</li>`).join("") : ""
                }
            </ol>`
        );
    });
})

conn.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})