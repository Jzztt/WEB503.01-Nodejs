import express from "express";
import { ProductController } from "../controllers/ProductController.js";
const router = express.Router();

router.get("/product",ProductController.getProduct);

router.get("/product/:id",ProductController.getDetailProduct);

router.post("/product", ProductController.createProduct);

router.put("/product/:id", (req, res) => {
  res.send("Product Update Page");
});

router.delete("/product/:id",ProductController.deleteProduct);

export const ProductRouter = router;
