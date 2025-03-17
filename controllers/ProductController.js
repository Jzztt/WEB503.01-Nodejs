import Product from "../models/ProductModel.js";

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();

        if(products && products.length === 0) {
            return res.status(404).json({
                message: "No products found",
                success: false
            })
        }
        res.status(200).json({
            success: true,
            data: products,
            message: "Products fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message : "Some thing error",
        })
    }
};


export const ProductController = {
    getProduct
}