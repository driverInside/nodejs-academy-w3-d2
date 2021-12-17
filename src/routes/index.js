import { Router } from 'express'
import globersRouter from './globers'

const router = Router()

router.use('/globers', globersRouter)

export default router
