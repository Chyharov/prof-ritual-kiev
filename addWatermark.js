// addWatermark.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/watermarked";           // вихідна папка
const outputDir = "./src/watermarked";     // куди зберігати результат
const watermarkText = "prof-ritual.com.ua";      // твій домен (заміни)

// створюємо вихідну директорію, якщо її немає
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// рекурсивна функція для обходу всіх підпапок
async function processDirectory(currentInputDir, currentOutputDir) {
  const files = fs.readdirSync(currentInputDir);

  for (const file of files) {
    const inputPath = path.join(currentInputDir, file);
    const outputPath = path.join(currentOutputDir, file);
    const stats = fs.statSync(inputPath);

    if (stats.isDirectory()) {
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      await processDirectory(inputPath, outputPath);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      console.log(`✔ Обробка: ${inputPath}`);
      await addWatermarkToImage(inputPath, outputPath);
    }
  }
}

// функція додавання вотермарки
async function addWatermarkToImage(inputPath, outputPath) {
  const { width, height } = await sharp(inputPath).metadata();

  // Розмір шрифту адаптивно залежить від ширини зображення
  const fontSize = Math.max(14, Math.round(width / 40));

  const svg = `
    <svg width="${width}" height="${height}">
      <text x="${width - 10}" y="${height - 10}"
        font-size="${fontSize}"
        font-family="Arial"
        fill="white"
        opacity="0.6"
        text-anchor="end"
        dominant-baseline="bottom"
        stroke="black"
        stroke-width="1"
      >
        ${watermarkText}
      </text>
    </svg>
  `;

  await sharp(inputPath)
    .composite([{ input: Buffer.from(svg), gravity: "southeast" }])
    .toFile(outputPath);
}

// стартуємо процес
await processDirectory(inputDir, outputDir);

console.log("✅ Готово! Усі зображення оброблено.");
