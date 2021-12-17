const config = require('config')


const redisURL = config.get('redis.url')

console.log(`Redis url connection: ${redisURL}`)
