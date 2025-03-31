import express from "express";
import mongoose from "mongoose";
import { ProductRouter } from "./routes/product.js";
import { UserRouter } from "./routes/user.js";
import { AuthRouter } from "./routes/auth.js";
import 'dotenv/config'
const app = express();
const PORT = 3000;

app.use(express.json());

const {DB_LINK} = process.env

const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_LINK);
    console.log("Connected!");
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();

app.use('/api', ProductRouter);
app.use('/api', UserRouter);
app.use('/', AuthRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
