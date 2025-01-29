import express from "express"
import { protectedMiddleware } from "../middleware/authMiddleware.js"
import { CreateProduct, updateProduct, deleteProduct, AllProduct, fileUpload } from "../controllers/ProductController.js"


const router = express.Router()

router.post('/', protectedMiddleware, CreateProduct)

router.get('/', protectedMiddleware, AllProduct)

router.put('/:id', protectedMiddleware, updateProduct)

router.delete('/:id', protectedMiddleware, deleteProduct)

router.post('/file-upload', protectedMiddleware, fileUpload)  

export default router