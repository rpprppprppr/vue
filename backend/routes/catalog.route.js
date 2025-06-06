import express from 'express'
import { getCatalogEndpoint } from '../controllers/catalog.controller.js'

const router = express.Router()

router.get('/', getCatalogEndpoint)

export default router