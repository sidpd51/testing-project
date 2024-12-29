import express from 'express'
import { query, validationResult } from 'express-validator';

type postType = {
    title: string,
    description: string
}

const app = express()
const post: postType[] = [];

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/post/create',query('title').isString().withMessage('only string acceptable!').isEmpty().withMessage("title can't be empty"),(req,res)=>{
    console.log('post created')
    post.push(req.body)
    console.log(validationResult(req))
    res.json({
        posts: post
    })
})

app.listen(3008,()=>{
    console.log('app is listening on port no 3008')
})