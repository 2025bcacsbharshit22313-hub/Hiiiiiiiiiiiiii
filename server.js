



// server.js
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("Sehat-Saathi AI server running");
});

app.post("/chat", async (req, res) => {
  try {

    const { message, language } = req.body;

    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.5-flash"
    });

    const result = await model.generateContent(`
You are Sehat-Saathi, an AI healthcare assistant for rural India.

Respond in ${language || "English"}.

Rules:
• Use simple language
• Give preventive health tips
• Encourage visiting a doctor for serious symptoms

User question:
${message}
`);

    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {

    console.error("GENAI ERROR:", error.message);

    res.status(500).json({
      reply: "AI service error. Please try again."
    });

  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});