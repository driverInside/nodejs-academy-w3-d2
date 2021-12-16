import debug from 'debug'
import dotenv from 'dotenv'
import { redisConnection } from './db/redis'
import app from './app'

dotenv.config()

const log = debug('globant:index')
const PORT = process.env.PORT || 3000

Promise
  .resolve(redisConnection())
  .then(() => {
    app.listen(PORT, async () => {
      log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => {
    log(`Error!!!!!!!! ${err}`)
  })
  .finally(() => {
    log('It always happen')
  })

