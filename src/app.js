import express, { urlencoded } from 'express'

import config from './config.js'// .jsが必要になった

/**ROUTES */

import productRoutes from './routes/product.routes.js'

/** INSTANCE */
const app = express();




/** MIDDLEWARE */

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.use('/', productRoutes)


/** SERVER  */
app.set('port', config.port || 3000)

export default app