const productModel = require("../Database/models/product")
const { OrderValidationError } = require("../Helpers/error")
const errorResponses = require('../Responses/error')
const mongoose =  require("mongoose");
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

const validateProductsFromOrder = async (productsList) => {
        try {
            const session = await mongoose.startSession()
            await session.withTransaction(async () => {
                for (let index = 0; index < productsList.length; index++) {
                    const productInList = productsList[index];
                    try {
                        const product =  await productModel.findOne({_id: productInList.productId}).session(session)
                         if(!product){
                            throw new OrderValidationError(errorResponses.product_not_found)
                         }
                        product.stock = product.stock - productInList.quantity
                        if(product.stock < 0){
                            throw new OrderValidationError(errorResponses.not_enought_stock)
                        }
                        product.markModified("stock");
                        await product.save()
                    } catch (e) {
                        await session.abortTransaction();
                        session.endSession(); 
                         throw(e)
                    }
                }
            })

          return {valid: true}
        } catch (e) {
            throw(e)
        }
        
}

module.exports = {getAllProducts, saveProduct, getProductById, validateProductsFromOrder}