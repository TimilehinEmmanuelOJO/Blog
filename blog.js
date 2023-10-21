const express = require('express')
const bodyParser = require('body-parser')




const PORT = 4000
const app = express();

app.get('/', (req, res) => {
    res.end('This is Home Route')
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})