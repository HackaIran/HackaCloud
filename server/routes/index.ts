import express from 'express'

console.log(express)

const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' })
})

export default router
