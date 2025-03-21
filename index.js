import express from "express";
import mongoose from "mongoose";
import { ProductRouter } from "./routes/product.js";
import { UserRouter } from "./routes/user.js";

const app = express();
const PORT = 3000;

app.use(express.json());

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my-project");
    console.log("Connected!");
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();

app.use('/api', ProductRouter);
app.use('/api', UserRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
