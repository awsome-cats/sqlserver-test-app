


import { Router } from 'express'
const router = Router();
import { getProducts, createNewProduct } from '../controllers/products.controller.js'



router.get('/products', getProducts)

router.get('/products/:id', getProducts)


router.post('/products', createNewProduct)

router.put('/products', getProducts)

router.delete('/products', getProducts)







export default router