const express = require('express');
const upload = require('../utils/multer.js');

const verify = require('../middleware/verify.js');

const { index,login,dashboar,usuarios,crearUsuarioPost,update,updatePost,eliminar,loginPost} = require('../controllers/controllers.js');

const routes = express.Router();

// Rutas
routes.get('/',index);
routes.get('/login',login);
routes.get('/dashboar',verify,dashboar);
routes.get('/usuarios',verify,usuarios);
routes.post('/loginPost',loginPost);
//ruta post 
routes.post('/crearUsuario/:role',crearUsuarioPost);
//////////////////////////////////////////////////////////
routes.get('/update/:id',verify,update);
routes.post('/updatePost/:id',updatePost);
/////////////////////////////////////////////////////////
routes.get('/delete/:id',verify,eliminar);
/////////////////////////////////////////////////////////
module.exports = routes;