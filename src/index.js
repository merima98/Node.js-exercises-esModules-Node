import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./components/auth/authRoutes.js";
import questionRoutes from "./components/questions/questionRoutes.js";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());
app.use(authRoutes);
app.use(questionRoutes);

app.listen(PORT);
