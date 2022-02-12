const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

const ejsEngine = require('./engines/ejs')
const ejsRouter = require('./routes/home')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));

ejsEngine(app)

app.use("/", ejsRouter)




app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))