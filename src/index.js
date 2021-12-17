import debug from 'debug'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const environment = process.env.NODE_ENV || 'default'

const log = debug(`${environment}:index`)

log(process.env.FIZZ)
console.log(process.env.FIZZ)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`)
})
