const express = require('express')

const postRouter = express.Router()

const posts = [
    {
        title: 'New Sickness in town',
        Body: "On 13 February 2023, the Ministry of Health and Social Welfare of Equatorial Guinea declared an outbreak of MVD after suspected viral hemorrhagic fever deaths were reported between 7 January and 7 February 2023, and a case tested positive on 12 February for Marburg virus by real-time polymerase chain reaction (RT-PCR)"
    },
    {
      title: "origin of work",
      body: "Etymology. From the phrase jobbe of work, of uncertain origin. Perhaps from a variant of Middle English gobbe or perhaps related to Middle English jobben, or Middle English choppe"
    }
]


postRouter.get('/', (req, res) => {
    res.json(posts)
});

postRouter.post('/', (req, res) => {
    const post = req.body
    posts.push(post)
    res.json(post)
})

module.exports = postRouter;