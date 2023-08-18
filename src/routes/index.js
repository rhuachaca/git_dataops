
const { render } = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
const client = require('../libs/connect')()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/registrarUsuario', (req,res) => {
    res.render('reg_usuario')
})

router.get('/registrar', (req,res) => {
    res.render('registrar')
})
router.get('/comprobantes', (req,res) => {
    res.render('comprobante')
})
router.get('/reportes', (req,res) => {
    res.render('reportes')
})

router.post('/insertar', (req, res)=>{
    var c="";
    const Dni = req.body.Dni
    client.connect(async (err) =>{
        if (!err){
            const collection = client.db("Pagina").collection("usuarios")
            collection.find().toArray((err,result) => {
                var i = 0
                while(i < result.length){
                    if(Dni == result[i].Dni){
                        c = "Error, Usuario ya Registrado";
                        break;
                    }
                    i++;
                }
                if(i==result.length){
                    collection.insertOne( req.body )
                    c = "Usuario Registrado";
                }
                res.render('reg_usuario',{error:c})
                })
        }else{
            console.log("Error")
        }
    })
})

router.post('/autenticar', (req,res) => {
    const Dni = req.body.Dni;
    const Contrasena = req.body.Contrasena;
    var c = "";
    client.connect(async (err) =>{
        if (!err){
            const collection = client.db("Pagina").collection("usuarios")
            collection.findOne({Dni},(err, result)=>{
                if(!err){
                    if(result==undefined){
                        c = "Usuario no registrado"
                    }else if(Contrasena == result.Contrasena){
                        res.render('comprobante')
                    }else{
                        c = "Contraseña Incorrecta"
                    }
                    res.render('ingresar_usuario',{error:c})
                }else {
                    console.log("Error")
                }
            })
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'}, {'mensaje':" + err + "}]")
        }
    })
})

router.post('/generar',(req,res) => {
    const FoB = req.body.FoB
    const cadena = req.body.Producto
    client.connect(async (err) =>{
        if(!err){
            if(FoB == 'F001'){
                const collection = client.db("Pagina").collection("facturas")
                collection.insertOne( req.body )
                collection.find().toArray((err,result) => {
                    var c = result.length
                    var array = result[c-1].Cantidad
                    //console.log(array)
                    var val=false;
                    if(Array.isArray(array)){
                        val = true;
                    }
                    res.render('imprimir',{datos:result[c-1],cont:c,fob:FoB,validar:val})
                })
            }else if(FoB=='B001'){
                const collection = client.db("Pagina").collection("boletas")
                collection.insertOne( req.body )
                collection.find().toArray((err,result) => {
                    var c = result.length
                    var array = result[c-1].Cantidad
                    //console.log(array)
                    var val=false;
                    if(Array.isArray(array)){
                        val = true;
                    }
                    res.render('imprimir',{datos:result[c-1],cont:c,fob:FoB,validar:val})
                })
            }
        }
    })
})

router.post('/pedir',(req,res) => {
    const FoB = req.body.FoB
    const money = req.body.money
    const mes = req.body.mes
    client.connect(async (err) =>{
        if(!err){
            if(FoB == 'F001'){
                const collection = client.db("Pagina").collection("facturas")
                collection.find().toArray((err,result) => {
                    res.render('tablas',{datos:result,serie:["Facturas-Serie","F001"],
                                tipomon:money,fecha:mes})
                })
                
            }else{
                const collection = client.db("Pagina").collection("boletas")
                collection.find().toArray((err,result) => {
                    res.render('tablas',{datos:result,serie:["Boletas-Serie","B001"],
                                tipomon:money,fecha:mes})
                })
            }
        }
    })
})

module.exports = router;