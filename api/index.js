const express = require("express")
const app = express()

/**
 * Configuração do parser para requisições post
 */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

/**
* Colocar servidor no ar
*/
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, function () {
    console.log(`Servidor rodando na porta ${PORTA}`)
})

/**
 * Rotas
 */
 const routes = require('./routes');
 routes(app);

/* app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem: 'Bem vinda!!'
    }));  */