const Joi = require('joi');

module.exports.validateProduct = (clientValues) => {
    const schema = Joi.object({
        productName: Joi.string().max(255).required(),
        type: Joi.string().max(255).required(),
        brand: Joi.string().max(255).required(),
        regularPrice: Joi.number().required(),
        salePrice: Joi.number().required(),
        quantity: Joi.number().required(),
        length: Joi.number().required(),
        height: Joi.number().required(),
        width: Joi.number().required(),
        weight: Joi.number().required(),
        color: Joi.string().required(),
        quality: Joi.string().required(),
        description: Joi.string().required(),
        
    })
    return schema.validate(clientValues);
}