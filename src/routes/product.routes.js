


import { Router } from 'express'
const router = Router();
import { getProducts } from '../controllers/products.controller.js'



router.get('/products', getProducts)

router.get('/products/:id', getProducts)


router.post('/products', getProducts)

router.put('/products', getProducts)

router.delete('/products', getProducts)







export default router