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
    process.env.NATHAN_VIDEO_URL,
    {
      supports_streaming: true,
    }
  );

  await bot.sendMessage(
    chatId,
    " Hello! 👋 \n\nMy name is Nathan. I am a professional trader with 8 years of experience, and every day, I help people earn stable income from trading. \n\nYou’re here for a reason. Trading is a tool that can change your life, and I’m ready to help you with that. \n\nIn my Telegram channel, you will get:\n\n 💰 Signals with 91.3% accuracy, bringing my followers at least $500 in profit from the very first trading session. \n\n📈 Full access to proven trading strategies that I personally use. \n\n🛠 Step-by-step training so you can start earning right away, even if you’re a beginner. \n\n💬 Personal support from me on any questions you have.\n\nThere are limited spots in the channel! Join now and start changing your life with your first trade!\n\n👉 Link to join channel: https://t.me/+vMEHtYK-XgMzNmIy",
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

