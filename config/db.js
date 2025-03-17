import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my-project");
    console.log("Connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
