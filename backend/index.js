import express from "express";
import dotenv from "dotenv";
// import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/index.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", Router);

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`server is running successfully on ${PORT}`)
);
Connection();