var express = require('express');
var app = express(); 
var port = 3000;
app.use(express.static('public')) ;
app.use(express.static('src/views')) ;
app.get('/ahmed',function(req,res){
    res.send('hello ahmed');
});
app.get('/',function(req,res){
    res.send('first app in nodejs');
});
app.listen(port,function(err){
    console.log('first app in nodejs');
});