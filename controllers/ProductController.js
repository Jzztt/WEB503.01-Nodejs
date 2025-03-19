import Product from "../models/ProductModel.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();

    if (products && products.length === 0) {
      return res.status(404).json({
        message: "No products found",
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some thing error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    // const newProduct = new Product(req.body);
    // await newProduct.save();
    const newProduct = await Product.create(req.body);
    return res.status(200).json({
      success: true,
      data: newProduct,
      message: "Product created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Some thing error",
    });
  }
};

const getDetailProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    // Nếu không tìm thấy product nào theo id
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // tìm thấy product theo id thì return product
    return res.status(200).json({
      success: true,
      data: product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    // Lỗi trong quá trình try
    res.status(500).json({
      success: false,
      message: "Some thing error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: product,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some thing error",
    });
  }
};
export const ProductController = {
  getProduct,
  createProduct,
  getDetailProduct,
  deleteProduct,
};
