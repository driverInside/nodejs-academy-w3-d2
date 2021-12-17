import express from 'express'
import sequelize from './db/postgres'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send({
    message: 'NodeJS Academy w3d2'
  })
})

export default app
