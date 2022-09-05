
const {getAllProducts, saveProduct, getProductById}= require('../Actions/products')
const {validateSchema} = require('../Validations')
const productSchema = require('../Validations/Schemas/product')
module.exports = {
	async getAllProducts(req, res, next) {
        try { 
            const data = await getAllProducts()
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	},
    async postProduct(req, res, next) {

        try {
            const productData = await validateSchema(req.body , productSchema)
            const product = await saveProduct(productData)
            res.json(product)
        } catch (e) {
            next(e)
        }
    },
    async getProductById(req, res, next) {

        try {
            const product = await getProductById(req.params.id)
            res.json(product)
        } catch (e) {
            next(e)
        }
    }
		
}
