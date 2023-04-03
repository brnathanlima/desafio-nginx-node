const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    const config = {
        host: "db-desafio-node-nginx",
        user: "root",
        password: "root",
        database: "desafio_node_nginx"
    };
    const mysql = require('mysql');
    const connection = mysql.createConnection(config);

    const { faker } = require('@faker-js/faker');

    const names = [];
    for (let i = 0; i <= 10; i++) {
        names.push(faker.name.fullName());
    }

    const nomeAleatorio = names[Math.floor(Math.random() * names.length)];

    const sql = `INSERT INTO people (name) VALUES("${nomeAleatorio}")`;
    connection.query(sql, (error, result, fields) => {
        if (error) throw error;
    });

    let response = '<h1>Full Cycle</h1>';

    connection.query(`SELECT * FROM people ORDER BY id DESC`, (error, result, fields) => {
        if (error) throw error;

        response += '<ul>';
        result.forEach(element => {
            response += `<li>${element.name}</li>`;
        });
        response += '</ul>';

        resp.send(response);
    });


    connection.end();
});

const port = 3000;
app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});