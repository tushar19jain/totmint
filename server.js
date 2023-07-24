const express = require('express');
const mysql = require('mysql');
const app = express();
const port =3000;
app.use(express.static('pages'));
app.get('/',(req,res)=>{
    res.sendFile('pages/homepage/index.html',{root:__dirname});
})
app.listen(port,(req,res)=>{
    console.log(`App running on port:${port}`);
})