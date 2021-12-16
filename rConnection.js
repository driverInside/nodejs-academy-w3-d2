import client from './db/redis'

(async () => {
  console.log(await client.ping()) // pong

  const result = await client.get('4')
  console.log(result)
})()
