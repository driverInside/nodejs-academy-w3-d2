import { createClient } from 'redis'
import debug from 'debug'
import logger from '../lib/logger'

const log = debug('globant:redis')

const client = createClient({
  // url: 'redis://192.168.145.25:6379',
  url: 'redis://localhost:6379',
  socket: {
    connectTimeout: 1000
  }
})

client.on('error', err => {
  // log(`Redis error: ${err}`)
  logger.error(`Redis error: ${err}`)
})

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Simulando que mi conexión está tardando 3s en realizarse')
  }, 100)
})

// client.connect() Returns promise
// async function () {} Runs as promise

// Promise
//   .resolve(p)
//   .then(_ => client.connect())
//   .then(() => {
//     log('Redis connection ready...')
//   })
//   .catch(err => {
//     log(`Error trying to connect: ${err}`)
//   })

export const redisConnection = async () => client.connect()

export default client
