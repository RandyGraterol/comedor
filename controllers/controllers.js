const user = require('../models/usuarios.js');
//////////////////////////////////////////////////
const login = (req,res)=>{
    try{
        res.render('login');
    }catch(error){
        console.error(error.message);
    };
}
const index = (req,res)=>{
    try{
        res.render('index');
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});;
    }
}
/////////////////////////////////////////////////////////////////
const dashboar = async(req,res)=>{
    try{
        const data = await user.findAll();
        let procesados = data.filter(usuario=>usuario.status == 'true').length;
        let noProcesados = data.filter(usuario=>usuario.status == 'false').length;
        
        res.render('admin',{data,procesados,noProcesados});

    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message})
    }
}
//////////////////////////////////////////////////////////////)
const usuarios = async(req,res)=>{
    try{
        const data = await user.findAll();
        let procesados = data.filter(usuario=>usuario.status == 'true').length;
        let noProcesados = data.filter(usuario=>usuario.status == 'false').length;

        res.render('usuarios',{data,procesados,noProcesados});
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false});
    }
}
//////////////////////////////////////////////
const crearUsuarioPost = async(req,res)=>{
    try{
        const role = req.params.role;
        const {nombre,email,carrera,password} = req.body;
        let c = carrera.toLowerCase();
        await user.create({nombre,email,carrera:c,password});
        if(role=="admin"){
            res.redirect('/usuarios');
        }else{
            res.redirect('/login');
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});
    }
}
//////////////////////////////////////////////////////
const updatePost = async(req,res)=>{
    try{
        const id = req.params.id;
        const {nombre,email,carrera,password,status} = req.body;
        await user.update({nombre,email,carrera,password,status},{where:{id}});
        res.redirect('/usuarios');
    }catch(error){
       console.error(error.message);
       res.status(500).json({status:false,error:error.message});
   }
}
///////////////////////////////////////////////////////
const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const u = await user.findOne({where:{id}});
        res.render('./formularios/update',{u});
    }catch(error){
       console.error(error.message);
       res.status(500).json({status:false,error:error.message});
   }
}
////////////////////////////////////////////////////////////////
const eliminar = async(req,res)=>{
    try{
        const id = req.params.id;
        await user.destroy({where:{id}});
        res.redirect('/usuarios');
    }catch(error){
        console.error(error.message);
        res.status(500).json({status:false,error:error.message});
    }
}
////////////////////////////////////////////////////////////////
const loginPost = async(req,res)=>{
     try{
        let u = 'admin@gmail.com';
        let security = '1234567Admin.'
        const {email,password} = req.body;
        if( u == email && security == password){
            req.session.isAdmin = true;// Establecer propiedad en la sesión
        res.json({status:true});
     }else{
        res.json({status:false});
    }
}catch(error){
    console.error(error.message);
    res.status(500).json({status:'X',error:error.message});
}

}
////////////////////////////////////////////////////////////////
module.exports= {
    index,
    login,
    dashboar,
    usuarios,
    crearUsuarioPost,
    update,
    updatePost,
    eliminar,loginPost

}