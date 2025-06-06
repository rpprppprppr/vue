import express from 'express'
import { getProductEndpoint } from '../controllers/product.controller.js'

const router = express.Router()

router.get('/', getProductEndpoint)

export default router