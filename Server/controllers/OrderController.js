import asyncHandler from "../middleware/asyncHandler.js";


export const CreateOrder = asyncHandler(async(req,res) => {


    return res.status(201).json({
        message : "Berhasil tambah order",
    })
})


export const AllOrder = asyncHandler(async (req, res) => {

    return res.status(200).json({
        message : "Tampil All Order"
    })
})


export const DetailOrder = asyncHandler(async (req, res) => {

    return res.status(200).json({
        message : "Tampil Detail Order"
    })
})


export const CurrentUserOrder = asyncHandler(async (req, res) => {

    return res.status(200).json({
        message : "Berhasil Tampil CUO"
    })
})