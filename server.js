// Llamado de la ruta de API
const apiRouter = require('./routes');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Instancia de express
const app = express();

app.use(cors());
//bodyParser
// app.use(function(req, res, next){
//     res.header("Access-Control-Allow-Origin" , "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
//     next();
// });

// Middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// // Primera ruta
// app.use('/', (req, res) => {
//     res.send('Hello World!');
// });

//Ruta de la API
app.use('/api', apiRouter);

// // Metodo alternativo
// app.set('PORT',3000);
// app.listen(app.get('PORT'), ()=>{
//     console.log('Server up')
// });
// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = app;