const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

const homeRouter = require('./routes/home')

const {engine} = require('express-handlebars')

app.engine('handlebars', engine({
  layoutDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'index',
}))

app.set('view engine', "handlebars")


/* express */
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/static", express.static(path.join(__dirname, '/public')))

/* Router al home */
app.use("/", homeRouter)


app.use((err, req, res, next)=>{
  console.log(err.stack)
  res.status(500).send('Error en middleware')
})

app.listen(
  PORT, ()=>console.log(`Escuchando en: http://localhost:${PORT}`)
)