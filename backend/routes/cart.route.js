import express from 'express'
import { getCartEndpoint } from '../controllers/cart.controller.js'

const router = express.Router()

router.get('/', getCartEndpoint)

export default router