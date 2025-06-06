import express from 'express'
import { getUserEndpoint } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', getUserEndpoint)

export default router