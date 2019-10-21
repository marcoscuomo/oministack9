const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://bytecore:marcos83@omnistack9-vwo0t.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//GET, POST, PUT, DELETE
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (Para criação e edição)

app.use(cors());
//Permitir receber req.body
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

// app.get('/users', (req, res) => {
//     return res.json({idade: req.query.idade});
// })

// app.post('/users', (req, res) =>  {
//     return res.json({message: req.body});
// })

// app.put('/users/:id', (req, res) => {
//     return res.json({id: req.params.id});
// })

app.listen(3333);

