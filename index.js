import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();



// Replace with your token
const token = process.env.BOT_TOKEN;

// Polling method
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  
  bot.sendVideo(
    chatId,
    "https://res.cloudinary.com/ddv32yvte/video/upload/v1753792551/firky-bot/videos/qnkecgp9wlbbm0dp5hpu.mp4",
    {
      supports_streaming: true,
    }
  );

  bot.sendMessage(
    chatId,
    " Hello! 👋 \n\nMy name is Nathan. I am a professional trader with 8 years of experience, and every day, I help people earn stable income from trading. \n\nYou’re here for a reason. Trading is a tool that can change your life, and I’m ready to help you with that. \n\nIn my Telegram channel, you will get:\n\n 💰 Signals with 91.3% accuracy, bringing my followers at least $500 in profit from the very first trading session. \n\n📈 Full access to proven trading strategies that I personally use. \n\n🛠 Step-by-step training so you can start earning right away, even if you’re a beginner. \n\n💬 Personal support from me on any questions you have.\n\nThere are limited spots in the channel! Join now and start changing your life with your first trade!\n\n👉 Link to join channel: https://t.me/+vMEHtYK-XgMzNmIy",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "📩 Join Our PREMIUM GROUP Now!!", url: "https://t.me/+Y_Dgv4ey7ZljMGJl" }],
        ],
      },
    }
  );

  // 2. Send Video
  bot.sendVideo(
    chatId,
    "https://res.cloudinary.com/ddv32yvte/video/upload/v1753792686/firky-bot/videos/gvxqic4b5n8ydhfgo2dm.mp4",
    {
      supports_streaming: true,
    }
  );

  // 3. Send Text with Inline Button
  bot.sendMessage(
    chatId,
    "🔥 I’m glad you’ve joined my open channel, Now you’re one of us!\n\nAfter 8 years of hard work, I’ve created a trading system that now brings stable income not only for me but also for the 2,100 members of my Private Channel. By the way, the average profit for a member of my Private Club is $584 💸\n\nEvery day in the Private Channel, I host 3 online sessions where I trade live and send precise signals. All you need to do is follow my actions. You repeat everything I do and watch your account grow.\n\nIn my Private Channel, you’ll get:\n\n⚡️ 3 live trading sessions with me daily, with signals that have a win rate of 91.3%. \n\n⚡️ The opportunity to earn $500+ a day in pure profit by trading with me. \n\n⚡️ My proven trading strategies that earned me $1,300,000 in profit last year. \n\n⚡️ A step-by-step plan that will make your start easy and clear. \n\n⚡️ Personal communication with me on any questions. \n\nJoining the Private Channel is FREE, but spots are limited. Only 4 spots left! Message me directly: @NathanSharp_AnswerBot and join right now. */",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "📩 Join Our PREMIUM GROUP Now!!", url: "https://t.me/+Y_Dgv4ey7ZljMGJl" }],
        ],
      },
    }
  );
});

