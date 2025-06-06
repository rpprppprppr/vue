import express from 'express'

import userRoutes from './routes/user.route.js'
import productRoutes from './routes/product.route.js'
import catalogRoutes from './routes/catalog.route.js'
import cartRoutes from './routes/cart.route.js'

const app = express()
app.use(express.json())

app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/catalog', catalogRoutes)
app.use('/cart', cartRoutes)

app.get('/', (req, res) => {
  res.send('Backend API is up and running')
})

export default app