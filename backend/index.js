import express from "express";
import dotenv from "dotenv";
import { loginController } from "./controllers/login/index.js";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/index.js";
import {  homeConroller } from "./controllers/home/index.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", loginController);
app.use("/",homeConroller)
const PORT = 5500;

app.listen(PORT, () =>
  console.log(`server is running successfully on ${PORT}`)
);
Connection();