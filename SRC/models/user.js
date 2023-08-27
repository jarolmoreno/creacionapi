const mongoose = require (`mongoose`)

const userSchema= mongoose.Schema({

    id:{
        type: Number,
        required: true
    },

    nombre:{
        type: String,
        required: true
    },

    apellido:{
        type: String,
        required: true
    },

    nacimiento:{
        type: Date,
        required: true
    },

    rol:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        
    },

    email:{
        type: String,
        
    },

    password:{
        type: String,
        required: true
    },


    usuario:{
        type: String,
        required: true
    },

    clientes :{
        type: String,
        required: true
    },

    



})

module.exports= mongoose.model(`user`, userSchema)