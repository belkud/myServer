import express from 'express'
// import nodemon from 'nodemon'
const app = express()

app.get('/', function (req, res) {
  res.send('New3 project')
  // res.send('New project')
  // res.end('end')
})

app.listen(3000)


//! Создание сервера
// https://github.com/andreyka101/Server---basic-nodeJS-express