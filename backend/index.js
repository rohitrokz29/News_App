const { default: axios } = require('axios');
const express = require('express')
const cors=require('cors')
require('dotenv').config();
const app = express()

app.use(cors())


app.get('/:category/:pageSize/:page',async (req, res) => {
    const {category,pageSize,page}=req.params;
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.NEWS_API_KEY}&pageSize=${pageSize}&page=${page}`)
    .then(result=>
        res.status(200).json(result.data)
    )
    .catch(err=>
        res.status(400).json({message:"Error"})
    )
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})