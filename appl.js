const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const port=80;
//serving static files
app.use('/static',express.static('static'))
app.use(express.urlencoded())
//setting pug
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
//endpoints
app.get('/',(req,res)=>{
    const con="this is best content in world"
    const params={'title':'pug is template',"content":con}
    res.status(200).render('index.pug');
})
app.post('/',(req,res)=>{
    fs.appendFileSync("output.txt",`${req.body.username}\n`);
    fs.appendFileSync("output.txt",`${req.body.email}\n`);
    fs.appendFileSync("output.txt",`${req.body.date}\n`);
    fs.appendFileSync("output.txt",`${req.body.text}\n`);
    fs.appendFileSync("output.txt",`${req.body.number}\n`);
    const mess={"message":"Form submitted"};
    res.status(200).render("index.pug",mess);
}) 

//port activating
app.listen(port,()=>{
    console.log(`the application started succesfully on ${port}`);
})