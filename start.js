const express=require('express')
const path=require('path')

const PORT=process.env.PORT || 3000

const app=express()

const requestTime = require('./middlewares.js');

app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'ejs'))

//app.use(express.static(path.resolve(__dirname,'image')));
app.use('/image',express.static('image'));
app.use('/css',express.static('css'));

//app.use(express.static(path.resolve(__dirname,'static')))

app.get('/',(req,res)=>{
	//console.log(requestTime.reqTime())
    res.render('index', {title:'Main page',active:'main'})
	
})



app.get('/contact',(req,res)=>{
    res.render('contact', {title:'Contact page',active:'contact'})
})

/*
app.get('/',(req,res)=>{
   // res.send('<h1>Main page</h1><div><p>Content</p></div>')
    res.sendFile(path.resolve(__dirname,'static','index.html'))
})

app.get('/contact',(req,res)=>{
    // res.send('<h1>Main page</h1><div><p>Content</p></div>')
    res.sendFile(path.resolve(__dirname,'static','contact.html'))
})


app.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname,'static','index.html'))
})
*/

app.listen(PORT, ()=>{
    console.log(`Server start on port ${PORT}...`)
})