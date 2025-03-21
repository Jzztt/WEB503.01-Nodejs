import Joi from "joi";

const ProductSchema = Joi.object({
    name: Joi.string().min(3).max(50).required({
        message : "Please enter your name"
    }),
    price: Joi.number().min(0).required({
        message : "Please enter your Price"
    }),
    description: Joi.string().optional().allow(''),
})

export default ProductSchema;