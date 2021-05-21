const express = require('express');
const app = express();
const fs = require('fs');
// import { readFileSync } from 'fs';

data = fs.readFileSync('server.json');
retorno = JSON.parse(data);

app.get('/',(req,res)=>{
    res.json(retorno);
})

app.listen(3000);