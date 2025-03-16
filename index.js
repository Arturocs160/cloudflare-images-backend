const express = require('express');
const app = express();
const routes = require('./src/routes')

const PORT = 3001;

routes(app)

app.listen(PORT, (req,res)=>{
    console.log(`Server corriendo en el puerto ${PORT}`);
});
