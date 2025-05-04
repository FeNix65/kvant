import express from 'express';  // Используем import вместо require
import fetch from 'node-fetch';
const app = express();

const PORT = 3000;
const ACCESS_TOKEN = "70b31e1d70b31e1d70b31e1d00739ce62d770b370b31e1d18bb83151bcd0afef50409a3";
const DOMAIN = "deadheadroom";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/vk-posts", async (req, res) => {
    const url = `https://api.vk.com/method/wall.get?access_token=${ACCESS_TOKEN}&v=5.199&domain=${DOMAIN}&count=5`;
    try {
      const vkRes = await fetch(url);
      const data = await vkRes.json();
      
      // Логируем полученные данные от VK
      console.log("Ответ от VK:", data);
      
      if (data.error) {
        throw new Error(`Ошибка от VK: ${data.error.error_msg}`);
      }
  
      res.json(data);
    } catch (e) {
      console.error("Ошибка при запросе к VK API:", e);
      res.status(500).json({ error: `Ошибка при получении данных от VK: ${e.message}` });
    }
  });

  
  app.listen(PORT, () => {
    console.log(`Прокси-сервер запущен на http://localhost:${PORT}`);
  });
