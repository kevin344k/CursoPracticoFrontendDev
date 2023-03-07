const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000
const path=require('path')

app.set('view engine','html')

app.use(express.static(__dirname+'/public'))



app.get('/',(req,res)=>{
  res.render('clase1-createPwd.html')
})

app.listen(PORT,()=>{
  console.log(`server on port ${PORT} `)
})