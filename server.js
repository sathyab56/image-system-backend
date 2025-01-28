import express from "express";
import cors from "cors";
import "dotenv/config";
import connetDB from "./config/mongodb.js";
import bankAccRouter from "./routes/bankAccRoute.js";
import adminAccRouter from "./routes/adminAccRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { createCanvas, loadImage } from "@napi-rs/canvas";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename); // Fixed naming

const app = express();
const port = process.env.PORT || 4000;
connetDB();

app.use(express.json());
app.use(
  cors({
    origin: "https://image-system1.vercel.app",
    credentials: true,
  })
);

// Routes
app.use("/api/bankAcc", bankAccRouter);
app.use("/api/admin", adminAccRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return `${day} ${monthNames[monthIndex]} ${year}`;

}

function getMaxCharWidth(ctx, font) {
  ctx.font = font;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let maxWidth = 0;

  for (let char of characters) {
    const charWidth = ctx.measureText(char).width;
    if (charWidth > maxWidth) {
      maxWidth = charWidth;
    }
  }

  return maxWidth;
}

app.get("/api/genImage/get-image-with-date", async (req, res) => {
  try {
    const { branchName, imageName } = req.query;

    if (!imageName) {
      return res.status(400).json({ error: "Image name is required." });
    }

    const imagePath = path.join(__dirname, "images", imageName); // Fixed __dirname usage
    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ error: "Image not found." });
    }

    const image = await loadImage(imagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    switch (imageName) {
      case "number seal.png":
        break;

      case "for seal authorized.png":
      case "for seal branch manager.png":
        if (branchName) {
          ctx.font = "bold 40px Arial";
          ctx.textAlign = "right";
          ctx.textBaseline = "bottom";
          ctx.fillText(branchName + " Branch", canvas.width, canvas.height);
        }
        break;

      case "ROUND SEAL.png":
      case "SIGNATURE VERIFIED ROUND SEAL.png":
        if (branchName) {
          const radius = 145;
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const text = branchName;
          const fontSize = 35;
          ctx.font = `${fontSize}px Arial`;

          ctx.fillStyle = "black";
          const maxCharWidth = getMaxCharWidth(ctx, "35px Arial");

          let currentAngle = Math.PI;
          for (let i = 0; i < text.length; i++) {
            const char = text[text.length - i - 1];
            const x = centerX + radius * Math.cos(currentAngle);
            const y = centerY + radius * Math.sin(currentAngle);

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(currentAngle - Math.PI / 2);
            ctx.fillText(char, 0, 0);
            ctx.restore();

            currentAngle += (maxCharWidth / radius) * 1.1;
          }
        }
        break;

      default:
        const formattedDate = formatDate(new Date());
        ctx.font = "55px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(formattedDate, image.width / 2, image.height / 2 + 20);

        if (branchName) {
          ctx.font = "bold 45px Arial";
          ctx.fillText(branchName + " Branch", image.width / 2, 108);
        }
    }

    res.set("Content-Type", "image/png");
    canvas.pngStream().pipe(res).on("error", (err) => {
      console.error("Stream error:", err);
      res.status(500).send("Failed to send image stream.");
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image." });
  }
});

// Serve static files
app.use("/images", express.static(path.join(__dirname, "images"))); // Fixed __dirname usage

// Start server
app.listen(port, () => {
  console.log("Server Running on ", port);
});