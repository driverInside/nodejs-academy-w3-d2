import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const POSTGRES_USER = process.env.POSTGRES_USER
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD

// Option 1: Passing a connection URI
const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/postgres`)

Promise.resolve(sequelize.authenticate())
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    // console.error('Unable to connect to the database:', err)
  })

// (async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// })()

export default sequelize
