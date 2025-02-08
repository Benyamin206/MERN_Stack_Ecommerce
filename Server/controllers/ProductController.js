import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


export const CreateProduct = asyncHandler(async(req,res) => {
    // res.send("Create Product")
    const newProduct = await Product.create(req.body)

    res.status(201).json({
        message : "Berhasil tambah produk",
        data : newProduct
    })
})

export const AllProduct = asyncHandler(async(req,res) => {
    // res.send("All Product")
    const data = await Product.find()

    return res.status(200).json({
        message : "Berhasil tampil semua produk",
        data
    })
})

export const detailProduct = asyncHandler(async (req, res) => {
    const paramId = req.params.id
    const dataProduct = await Product.findById(paramId)

    if(!dataProduct){
        res.status(404)
        throw new Error("Id tidak ditemukan")
    }

    res.status(200).json({
        message : "Detail produk berhasil ditampilkan",
        data : dataProduct 
    })
})


export const updateProduct = asyncHandler(async (req, res) => {
    // res.send("Update Product")
    const paramId = req.params.id
    const updateProduct = await Product.findByIdAndUpdate(paramId,
        req.body,
        {
            runValidator : false,
            new : true
        }
    )

    return res.status(201).json({
        message : "Update product berhasil",
        data : updateProduct
    })
})

export const deleteProduct = asyncHandler(async(req,res) => {
    // res.send("Delete Product")
    const paramId = req.params.id
    const deleteProduct = await Product.findByIdAndDelete(paramId)

    return res.status(200).json({
        message : "Berhasil hapus produk"
    })
})

export const fileUpload = asyncHandler(async(req, res) => {
    // res.send('File upload product')
    const file = req.file
    if(!file){
        res.status(400)
        throw new Error("Tidak ada file yang diinput")
    }

    const imageFileName = file.filename
    const pathImageFile = `uploads/${imageFileName}`

    res.status(200).json({
        message : "Image berhasil diupload",
        image : pathImageFile
    })

})