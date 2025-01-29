import asyncHandler from "../middleware/asyncHandler.js";

export const CreateProduct = asyncHandler(async(req,res) => {
    res.send("Create Product")
})

export const AllProduct = asyncHandler(async(req,res) => {
    res.send("All Product")
})

export const updateProduct = asyncHandler(async (req, res) => {
    res.send("Update Product")
})

export const deleteProduct = asyncHandler(async(req,res) => {
    res.send("Delete Product")
})

export const fileUpload = asyncHandler(async(req, res) => {
    res.send('File upload product')
})