import express from 'express'

import config from './config.js'// .jsが必要になった

/**ROUTES */

import productRoutes from './routes/product.routes.js'






/** MIDDLEWARE */




const app = express();
app.use('/', productRoutes)


/** SERVER  */
app.set('port', config.port || 3000)

export default app