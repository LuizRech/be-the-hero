const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())//Determina quem pode acessar o backend
app.use(express.json()); //Para o JS poder ler 
app.use(routes);


app.listen(3333);