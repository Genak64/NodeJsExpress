const express=require('express')
const path=require('path')

const PORT=process.env.PORT ?? 3000

const app=express()

app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'ejs'))
console.log(app.get('views'))
console.log(app.get('view engine'))


//app.use(express.static(path.resolve(__dirname,'static')))

app.get('/',(req,res)=>{
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