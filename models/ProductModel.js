import mongoose from "mongoose";
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
},{
    timestamps: true,
    versionKey: false
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
