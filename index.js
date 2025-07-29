import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();



// Replace with your token
const token = process.env.BOT_TOKEN;

// Polling method
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  
  await bot.sendVideo(
    chatId,
    process.env.BOT_VIDEO_URL,
    {
      supports_streaming: true,
    }
  );

  await bot.sendMessage(
    chatId,
    process.env.BOT_TEXT,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📩 Join Our PREMIUM GROUP Now!!",
              url: process.env.TELEGRAM_GROUP_LINK,
            },
          ],
        ],
      },
    }
  );

});

