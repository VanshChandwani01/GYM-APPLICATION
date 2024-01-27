const express = require('express');
const gymroutes = require ('./index/src/gymlist/routes.js');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Hello World");
})

app.use('/api/v1/gymlist',gymroutes );

app.listen(port, ()=> console.log(`app listening to port ${port}` ));
