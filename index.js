import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'

const app = express()
app.use(cors())

const upload = multer({dest:"receivingFile/"})
app.post('/file', upload.any() ,(req,res)=>{
  console.log(req.body)
  console.log(req.file)
  console.log(req.files)
  res.send({ok:"сообщение от сервера"})
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/data',(req,res)=>{
  console.log(req.body)
  console.log(123);
})


app.get('/', function (req, res) {
//  res.writeHead 
  res.write('Hello ==>')
  res.end('end pesponse')
})
app.get('/hi', function (req, res) {
  // res.write('Hello World1')
  res.send('say hi')
})

app.listen(3000, ()=> {console.log('12345');})

//!команда запуска node index.js

//! Создание сервера
// https://github.com/andreyka101/Server---basic-nodeJS-express


// '.html' : 'text/html'
// '.js' : 'text/javascript'
// '.css' : 'text/css'
// '.json' : 'application/json'
// '.png' : 'image/png'
// '.jpg' : 'image/jpg'
// '.gif' : 'image/gif'
// '.svg' : 'image/svg+xml'
// '.wav' : 'audio/wav'
// '.mp4' : 'video/mp4'
// '.woff' : 'application/font-woff'
// '.ttf' : 'application/font-ttf'
// '.eot' : 'application/vnd.ms-fontobject'
// '.otf' : 'application/font-otf'
// '.wasm' : 'application/wasm'
