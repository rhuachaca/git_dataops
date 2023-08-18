const path = require('path')
const http = require('http')
const express = require('express')
const logger = require('morgan')

const bodyParse = require('body-parser')
const app = express()
const server = http.createServer(app)
const indexRoutes = require('./src/routes/index')
const { Socket } = require('dgram')



app.set('port', process.env.PORT || 3000 )
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use('/static', express.static(path.join(__dirname,'src/views/css')))
app.use('/img', express.static(path.join(__dirname,'src/views/image')))
app.use('/java', express.static(path.join(__dirname,'src/views/JS')))

app.use('/', indexRoutes)

/*app.listen(app.get('port'), ()=>{
    console.log("Servidor en Puerto", app.get('port'))
})
*/
server.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'))
})

