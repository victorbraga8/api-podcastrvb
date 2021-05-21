const express = require('express');
const app = express();
const server = require('http').Server(app);
const fs = require('fs');
// import { readFileSync } from 'fs';

data = fs.readFileSync('server.json');
retorno = JSON.parse(data);

app.get('/',(req,res)=>{
    res.json(retorno);
})

server.listen(process.env.PORT || 3000);