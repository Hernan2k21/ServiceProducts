const productModel = require("../Database/models/product")

const getAllProducts = async () =>{
    try {
        const products =  await productModel.find({})
        return  products
    
    } catch (e) {
        throw(e)
    }
   
}
const saveProduct = async (productData) => {
    try {
        const product =  await productModel.create(productData)
        return  product
    
    } catch (e) {
        throw(e)
    }
}
const getProductById = async (productId) => {
    try {
        const product =  await productModel.findById(productId)
        return  product
    
    } catch (e) {
        throw(e)
    }
}
module.exports = {getAllProducts, saveProduct, getProductById}