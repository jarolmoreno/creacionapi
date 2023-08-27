const express = require (`express`)
const mongoose = require (`mongoose`)
require(`dotenv`).config()
const userRoutes = require (`./routes/user`)


const app = (express)

//Midlleware
app.use(`/api`, userRoutes)
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Conectandose a mi servidor ')
})
mongoose.connect(process.env.MONGODB_URI);

const port =  3000;



app.listen(port, () => {

    console.log(`el servidor esta funcionando en http:/localhost:${PORT}`)
    .then(() => console.log("conectado a mongo DB atlas"))
    .catch((error) => console.error(error));
      
  }) 

    
  

