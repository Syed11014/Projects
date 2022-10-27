const express = require('express');
const { read } = require('fs');
const app = express()
const port = 3500
const path = require('path')
const fs = require('fs').promises;

//text
app.get('/', (req, res) => {
  res.send('Its Working!')
})
//image
app.get('/Image', (req, res) => {
  let imagepath = path.join(__dirname, 'img3.jpg');

  res.sendFile(imagepath)
})
//dynamic image
app.get('/Dynamicimage', (req, res) => {
  imageName = req.query.imagename
  let imagepull = path.join(__dirname, imageName)
  
  if (imageName == "img1.jpg" || imageName == "img2.jpg" || imageName=="download.jpg" || imageName== "img3.jpg"){
    res.sendFile(imagepull)
    
  }
  else {
    res.send("Image not found")
  }
  app.get('/', (req, res) => {
    res.send('Its nots Working!')
  })

})

app.listen(port, () => {
  console.log(`Ready! ${port}`)
}) 
