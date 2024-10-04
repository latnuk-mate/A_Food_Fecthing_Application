const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;


app.get('/', (req,res)=>{
    res.end("hello world!");
});


app.listen(PORT, ()=>{
    console.log('server is running on port ', PORT);
});