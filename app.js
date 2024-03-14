const express=require('express');
const bodyParser=require('body-parser')
const app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/',(req,res,next)=>{
    console.log('This always runs')
    next();
})

app.use('/add-products',(req,res,next)=>{
    console.log('Hey there! ')
    res.send('<form action="/products" method="POST">Product name<input type="text" name="title">Procuct Size<input type="number" name="title"><button type="submit">Add product</button></form>')
})
app.use('/products',(req,res,next)=>{
    console.log(req.body)
    
    res.redirect('/')
})


app.use('/',(req,res,next)=>{
    console.log('In the Middleware! ')
    res.send('<h1>Record Submitted successfully</h1>')
})

app.listen(8080);