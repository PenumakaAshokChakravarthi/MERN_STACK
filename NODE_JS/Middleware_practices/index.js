const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3000;
const {Querychecking,parrammiddlewarechecking,bodymiddlewarechecking,headerchecking,allchecking,bodychecking} = require('./middleware/middleware')

app.use(express.json())


app.get('/',Querychecking,(req,res)=>{
    res.send('query checking in GET request');
})
app.post('/',bodymiddlewarechecking,(req,res)=>{
    res.send('body checking in POST request');
})
app.put('/:id',parrammiddlewarechecking,(req,res)=>{
    res.send('parram checking in PUT request');
})

app.delete('/',bodymiddlewarechecking,(req,res)=>{
    res.send('body checking in DELETE request');
}) 
app.patch('/',headerchecking,(req,res)=>{
    res.send('header checking in PATCH request')
})
app.put('/',bodychecking,(req,res)=>{
    res.send('body checking in PUT request')
})
app.put('/hello/:id',allchecking,(req,res)=>{
    res.send('all checking in PUT request');
})







app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});