const express = require('express')
const bodyParser = require('body-parser')


const postRoute = require('./routes/posts')


const PORT = 4000
const app = express();

app.use(bodyParser.json())

app.use('/posts', postRoute)

app.get('/', (req, res) => {
    res.end('This is Home Route')
})

app.get('/about', (req, res) => {
    res.send('This is about route')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})