const express = require("express");
const app = express();

app.post('/hola',(req, res)=>{
    res.send('[POST]Hola mundo');
})
app.get('/hola',(req, res)=>{
    res.send('[GET]Hola mundo');
})






const express = require("express");
const bodyParser = requiere ('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use (bodyParser.json());


let usuario = {
    nombre:'',
    apellido: ''
};

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

app.get('/',(req, res) =>{
    respuesta = {
        error: true,
        codigo: 200,
        mensaje:'punto de inicio'
    };
    res.send(respuesta);
});

app.get('/usuario',function (req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: '',
        
    };
    if(usuario.nombre ==''|| usuario.apellido ==='') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'Elusuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje:'respuesta del usuario',
            respuesta: usuario
        };
    }
    res.send(respuesta);
})





app.listen(3000, ()=>{
    console.log("El servidor está inicializado en el puerto 30002");
})