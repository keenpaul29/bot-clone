# Nathan's Trading Bot 🤖

A powerful Telegram bot designed to engage users and guide them through a trading community onboarding process. This bot helps manage user interactions, delivers educational content, and facilitates community growth through automated messaging and media sharing.

## 🌟 Features

- **Automated Welcome Flow**: Engaging welcome messages with video content
- **Cloudinary Integration**: Seamless video hosting and delivery
- **Environment-Based Configuration**: Secure management of API keys and tokens
- **Interactive Buttons**: Easy navigation with inline keyboard buttons
- **Media-Rich Content**: Supports video streaming and rich text formatting

## 🚀 Quick Start

### Prerequisites

- Node.js 14.x or higher
- npm or yarn
- Telegram Bot Token from [@BotFather](https://t.me/botfather)
- Cloudinary account for media hosting

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nathan-trading-bot.git
   cd nathan-trading-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   NATHAN_VIDEO_URL=your_cloudinary_video_url
   TELEGRAM_GROUP_LINK=your_telegram_group_invite_link
   ```

### Running the Bot

Start the bot in development mode:
```bash
node index.js
```

## 🛠 Project Structure

```
nathan-trading-bot/
├── public/                  # Media files
│   ├── Nathan Video 1.mp4
│   └── Nathan Video 2.MP4
├── .env                    # Environment variables
├── .gitignore
├── index.js               # Main bot logic
├── cloud_config.js        # Cloudinary configuration
├── test_upload.js         # Utility for uploading media to Cloudinary
├── package.json
└── README.md
```

## 🔄 Uploading Media

To upload new videos to Cloudinary:

1. Place your video file in the `public/` directory
2. Run the upload script:
   ```bash
   node test_upload.js
   ```
3. Update the `NATHAN_VIDEO_URL` in your `.env` file with the new URL

## 🤖 Bot Commands

- `/start` - Begin the onboarding process

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BOT_TOKEN` | Your Telegram Bot Token | ✅ |
| `CLOUD_NAME` | Cloudinary cloud name | ✅ |
| `CLOUD_API_KEY` | Cloudinary API key | ✅ |
| `CLOUD_API_SECRET` | Cloudinary API secret | ✅ |
| `NATHAN_VIDEO_URL` | URL of the welcome video | ✅ |
| `TELEGRAM_GROUP_LINK` | Invite link to your Telegram group | ✅ |

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
- All contributors and testers
