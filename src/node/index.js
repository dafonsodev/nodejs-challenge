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

app.get('/', (req,res) => {
    const conn = mysql.createConnection(config)
    conn.query(`insert into people (name) values ('Larry'), ('Moe'), ('Curly')`)
    conn.query('select * from people', (error, results, fields) => {
        res.send(
            `<h1>Full Cycle Rockzzz!!!</h1>
            <ol>
                ${
                    !!results.length ? results.map((p) => `<li>${p.name}</li>`).join("") : ""
                }
            </ol>`
        );
    });
    conn.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})