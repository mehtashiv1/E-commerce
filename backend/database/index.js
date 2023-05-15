import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://127.0.0.1:27017/Ecommerce-Website`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;