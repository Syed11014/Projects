const express = require ('express')
const app = express()
const port = 3000

app.get('/user',(req, res)=>{
    res.send('Hello Syed Hassan Raza Rizvi')
})
 app.get('/image', (req, res)=>{
    res.send('Show Image!')
 })
app.listen(port,()=>{
    console.log('example app listening on port &{port}')

})
