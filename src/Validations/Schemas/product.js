const Joi = require("joi");
const productSchema = Joi.object().keys({
    "name": Joi.string(),
    "description": Joi.string(),
    "details": Joi.object(),
    "price": Joi.number()

}).options({ presence: 'required' }).required();

module.exports = productSchema