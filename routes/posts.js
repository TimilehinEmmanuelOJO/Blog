const express = require('express')

const postRouter = express.Router()

const posts = [
    {
        title: 'New Sickness in town',
        Body: "On 13 February 2023, the Ministry of Health and Social Welfare of Equatorial Guinea declared an outbreak of MVD after suspected viral hemorrhagic fever deaths were reported between 7 January and 7 February 2023, and a case tested positive on 12 February for Marburg virus by real-time polymerase chain reaction (RT-PCR)",
        id: 1
    },
    {
      title: "origin of work",
      body: "Etymology. From the phrase jobbe of work, of uncertain origin. Perhaps from a variant of Middle English gobbe or perhaps related to Middle English jobben, or Middle English choppe",
      id: 2
    }
]


postRouter.get('/', (req, res) => {
    res.json(posts)
});


//Get one post with id

postRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const post = posts.find(post => post.id == id)

    if (!post) {
        res.status(404)
        res.end("Post with provided id not found")
        return
    }

    res.json(post)
})

postRouter.post('/', (req, res) => {
    const post = req.body
    posts.push(post)
    res.json(post)
})


postRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const post = req.body
    const index = posts.findIndex(post => post.id == id)

    if (index == -1){
        res.status(404)
        res.end('Post not found')
        return
    }
    posts[index] = post
    res.json(book)
})


postRouter.delete('/:id', (req,res) => { 
    const id = req.params.id
    const index = posts.findIndex(post => post.id = id)

    if (index == -1) {
        res.status(404)
        res.end('post not found')
        return
    }

    posts.splice(index, 1)
    res.json(posts)

})
module.exports = postRouter;