const express = require (`express`)
const router = express.Router()

const userSchema = require (`../models/user`)

// Creacion de usuario 

router.post(`/user` ,(req,res) => {
    const user = userSchema(req, body)
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
    

  
  })

  //get users 

  router.get(`/user` ,(req,res) => {
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
    

  
  })

  router.get(`/user/:id` ,(req,res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
    

  
  })

  router.put(`/user/:id` ,(req,res) => {
    const {id} = req.params;
    const{nombre,apellido,nacimiento,rol,telefono,email,password,usuario,clientes} = req.body;
    userSchema
    .updateOne({_id:id},{$set:{nombre,apellido,nacimiento,rol,telefono,email,password,usuario,clientes}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
    

  
  })

  
  router.put(`/user/:id` ,(req,res) => {
    const {id} = req.params;
    
    userSchema
    .remove({_id:id})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
    

  
  })


  
  
  module.exports = router()