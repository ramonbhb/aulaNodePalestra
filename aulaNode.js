const http = require('http');
express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
}); */

app.listen(port, hostname, () => {
  console.log(`O servidor está rodando no http://${hostname}:${port}/`);
});

app.get('/produtos', (req, res) => {
    produtos = [
        {
            "titulo": "Televisao",
            "preco": 799.99
        },
        {
            "titulo": "Geladeira",
            "preco": 1500.00
        }
    ]
    /* escrever o código que comunica com o banco de dados
    e pega os produtos */

    res.json(produtos);
})

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/QualOMelhorTime', (req,res) => {
    res.send("Cruzeiro!!");
})