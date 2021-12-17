import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'NodeJS Academy w3d2'
  })
})

export default app
