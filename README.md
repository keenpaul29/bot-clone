# Telegram Bot Design 🤖

A Node.js Telegram bot created with `node-telegram-bot-api` that automatically engages users with welcome messages and video content. The bot is designed to onboard users into a trading community by providing valuable information and directing them to a premium Telegram group.

## 🌟 Features

- **Automated Welcome Messages**: Sends a welcome video and introduction when users start the bot
- **Cloudinary Integration**: Hosts and delivers video content efficiently (optional)
- **Environment-Based Configuration**: Secure management of sensitive data using environment variables
- **Interactive Buttons**: Direct users to your premium group with clickable buttons
- **Video Streaming**: Supports video streaming for better user experience

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Telegram Bot Token from [@BotFather](https://t.me/botfather)
- Cloudinary account (optional, for video hosting)
- Vercel account (for deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telegram-trading-bot.git
   cd telegram-trading-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   BOT_VIDEO_URL=your_video_url
   TELEGRAM_GROUP_LINK=your_telegram_group_invite_link
   
   # Optional: Only needed if using Cloudinary for video hosting
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the bot locally:
   ```bash
   node index.js
   ```

## ☁️ Deploying to Vercel

This bot can be easily deployed to Vercel as a serverless function. Here's how:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Link your project** (from your project directory):
   ```bash
   vercel link
   ```

4. **Set up environment variables** in your Vercel project:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add all the variables from your `.env` file

5. **Deploy**:
   ```bash
   vercel --prod
   ```

6. **Set up a webhook** (required for production):
   After deployment, you'll need to set up a webhook URL for your Telegram bot. Use the following command, replacing `YOUR_BOT_TOKEN` and `YOUR_VERCEL_URL`:
   ```bash
   curl -F "url=https://YOUR_VERCEL_URL/api/bot" https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook
   ```

7. **Update your Vercel configuration** to handle the webhook:
   Create a `vercel.json` file in your project root with:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "index.js", "use": "@vercel/node" }
     ],
     "routes": [
       { "src": "/(.*)", "dest": "/index.js" }
     ]
   }
   ```

8. **Redeploy** after making these changes.

## 🔄 Webhook vs. Polling

- **Local Development**: The bot uses polling by default
- **Production (Vercel)**: Uses webhooks for better performance and reliability

## 🛠 Project Structure

```
telegram-trading-bot/
├── public/                  # Media files (for local development)
│   ├── Bot Video 1.mp4
│   └── Bot Video 2.MP4
├── .env                    # Environment variables (local only)
├── .gitignore
├── index.js               # Main bot logic
├── cloud_config.js        # Cloudinary configuration
├── test_upload.js         # Utility for uploading media to Cloudinary
├── package.json
├── vercel.json           # Vercel configuration
└── README.md
```

## 🔄 Uploading Media

### Using Cloudinary (Recommended for Production)
1. Place your video file in the `public/` directory
2. Run the upload script:
   ```bash
   node test_upload.js
   ```
3. Update the `BOT_VIDEO_URL` in your environment variables with the new URL

### Using Direct Links
You can also use direct video URLs from any hosting service by setting the `BOT_VIDEO_URL` environment variable to your video URL.

## 🤖 Bot Commands

- `/start` - Begin the onboarding process (sends welcome video and message)

## 🔒 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `BOT_TOKEN` | Your Telegram Bot Token from @BotFather | ✅ | - |
| `BOT_VIDEO_URL` | URL of the welcome video (can be hosted anywhere) | ✅ | - |
| `TELEGRAM_GROUP_LINK` | Invite link to your Telegram group | ✅ | - |
| `CLOUD_NAME` | Cloudinary cloud name (only if using Cloudinary) | ❌ | - |
| `CLOUD_API_KEY` | Cloudinary API key (only if using Cloudinary) | ❌ | - |
| `CLOUD_API_SECRET` | Cloudinary API secret (only if using Cloudinary) | ❌ | - |

## 📝 Customization

### Modifying Messages
Edit the message content in `index.js` to customize the bot's responses. The bot uses Markdown formatting for rich text.

### Adding New Features
1. Add new command handlers in `index.js`
2. Extend the bot's functionality by adding new utility files
3. Update the message flow as needed

## 📚 Dependencies

- `node-telegram-bot-api` - Telegram Bot API
- `cloudinary` - Media management
- `dotenv` - Environment variable management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the Telegram Bot API team
- Cloudinary for media hosting
- And lastly, myself (keenpaul29)
