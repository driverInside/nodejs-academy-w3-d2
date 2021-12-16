import { Router } from 'express'
import factorial from '../lib/factorial'
import client from '../db/redis'
import debug from 'debug'

const log = debug('globant:factorial')
const router = Router()

/**
 * 1. if factorial(n) is in redis: return redis.get(factorial, 'n')
 * 2. else factorial(n)
 */

router.get('/:n', async (req, res) => {
  const { n } = req.params
  // TODO: validation
  log(typeof n)
  // log(Number.MAX_VALUE)

  log(await client.ping()) // pong

  let result = await client.get(n)
  log(`previous result: ${result}`)

  if (!result) {
    result = factorial(parseInt(n))

    await client.set(n, result)
    // await client.set('tokenstring', JSON.stringify({ valid: true, exp: 123443243, user: 'hiram e. perez'}))
  }

  return res.json({
    message: `The factorial of ${n} is ${result}`
  })
})

/**
 * await client.connect()

  
 */

export default router
