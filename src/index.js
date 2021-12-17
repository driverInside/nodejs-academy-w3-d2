import debug from 'debug'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const log = debug('globant:index')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`)
})
