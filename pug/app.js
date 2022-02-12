const express = require('express');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 8080
const pugEngine = require('./engines/pug')

const homeRouter = require('./routes/home')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')))

/* engine */
pugEngine(app)

/* Router */
app.use("/", homeRouter)


app.listen(8080, () => console.log('listening on http://localhost:8080'))
