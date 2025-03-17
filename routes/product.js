import express from "express";
import { ProductController } from "../controllers/Product.js";
const router = express.Router();

router.get("/product",ProductController.getProduct);

router.get("/product/:id", (req, res) => {
  res.send("Product Detail Page");
});

router.post("/product", (req, res) => {
  res.send("Product Create Page");
});

router.put("/product/:id", (req, res) => {
  res.send("Product Update Page");
});

router.delete("/product/:id", (req, res) => {
  res.send("Delete Product");
});

export const ProductRouter = router;
