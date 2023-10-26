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
    },
    {
        name: "tolu Ojo",
        email: "tolu@gmail.com",
        gender: "f",
        id: 4,
        role: "user"
    }
]


//get all users
userRouter.get('/', (req, res) => {
    res.json(userDetails)
})

//get one user by id
userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = userDetails.find(user => user.id == id)

    if (!user){
        res.status(404)
        res.send('User with this id not found')
        return
    }

    res.json(user)
})

//Post a user
userRouter.post('/', (req, res) => {
    const user = req.body
    userDetails.push(user)
    res.json(userDetails)
})

//update a user details
userDetails.put('/:id',(req, res) => {
    const id = req.params.id
})
module.exports = userRouter