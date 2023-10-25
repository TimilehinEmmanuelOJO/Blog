const express = require('express')

const userRouter = express.Router()

const userDetails= [
    {
        name: 'Timi Ojo',
        email: 'timilehin175@gmail.com',
        gender: 'm',
        id: 1,
        role: 'admin'
    },
    {
        name: 'funke adewale',
        email: 'adefunke@gmail.com',
        gender: 'f',
        id: 2,
        role: 'admin'
    },
    {
        name: 'james ibori',
        email: 'james@gmail.com',
        gender: 'm',
        id: 3,
        role: 'user'
    }
]


//get all users
userRouter.get('/', (req, res) => {
    res.json(userDetails)
})



module.exports = userRouter