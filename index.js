const express = require('express')
const app = express()
const port = 3000;

app.use(express());

app.listen(port,"localhost",()=>{
    
    console.log(`El servidor esta corriendo en el puerto: ${port}`); //Con el comando Ctrl C detiene el proceso del servidor
});