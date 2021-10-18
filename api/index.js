const express = require("express")
const app = express()
import path from 'path'

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

 /**
 * Configurações das páginas
 */
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')

/* app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem: 'Bem vinda!!'
    }));  */