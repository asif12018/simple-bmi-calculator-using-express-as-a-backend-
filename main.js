const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000, function(req,res){
    console.log('Server is running in port 3000');
});

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
    
});
app.post('/',function(req,res){
    var height = req.body.height;
    var weight = req.body.weight;
    var result = weight / (height * height);
 
    res.send('Your BMI Is: '+result);
});