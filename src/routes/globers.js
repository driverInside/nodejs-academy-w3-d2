import { Router } from 'express'
import GlobersService from '../services/glober'

const globersService = new GlobersService()

const router = Router()

router
  .get('/', async (req, res) => {
    try {
      const globers = await globersService.get()

      res.json(globers)
    } catch (err) {
      console.error(err)
    }
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params
    const glober = await globersService.getById(id)

    if (!glober) {
      return res.status(404).json({
        message: 'Glober not found'
      })
    }

    res.json(glober)
  })
  .post('/', async (req, res) => {
    try {
      const { name, password, email, notes } = req.body

      const newGlober = await globersService.create({ name, password, email, notes })
      res.json(newGlober)
    } catch (err) {
      console.error(err)
    }
  })
  .put('/:id', (req, res) => {
    res.json({
      message: 'update a glober'
    })
  })
  .delete('/:id', (req, res) => {
    res.json({
      message: 'get all the globers'
    })
  })

export default router
