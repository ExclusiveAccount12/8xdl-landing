# 8XDL Telegram Bot Setup Guide

## ✅ Bot Created Successfully!

Your Telegram bot is ready: **@zzzzzzzzzzxxxxxxxxxxzzzzzzbot**

Bot Token: `8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE`

---

## 📋 Step-by-Step Setup

### Step 1: Get Your Chat ID

You need to get your Telegram Chat ID to receive messages from the bot.

**Method 1: Using @userinfobot (Easiest)**
1. Open Telegram and search for `@userinfobot`
2. Start a chat with the bot
3. It will send you your Chat ID
4. Copy the number (e.g., `123456789`)

**Method 2: Using Your Bot**
1. Open Telegram and search for your bot: `@zzzzzzzzzzxxxxxxxxxxzzzzzzbot`
2. Send any message to your bot (e.g., "Hello")
3. Open this URL in your browser:
   ```
   https://api.telegram.org/bot8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response
5. Copy that ID number

**Method 3: Using the Helper Script**
```bash
cd 8xdl-landing
node get-chat-id.js
```

### Step 2: Update the Chat ID

Open `src/utils/telegramBot.js` and replace:
```javascript
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'
```

With your actual Chat ID:
```javascript
const TELEGRAM_CHAT_ID = '123456789' // Your actual chat ID
```

### Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the Bug Report page
3. Fill out the form and submit
4. Check your Telegram - you should receive the bug report!

---

## 🔧 Bot Configuration (Optional)

### Set Bot Name & Description

Send these commands to @BotFather:

1. **Set Description:**
   ```
   /setdescription
   ```
   Then select your bot and send:
   ```
   8XDL Support Bot - Receives bug reports, feature requests, and user feedback for the 8XDL app.
   ```

2. **Set About Text:**
   ```
   /setabouttext
   ```
   Then select your bot and send:
   ```
   Official support bot for 8XDL - Advanced Download Manager
   ```

3. **Set Bot Commands:**
   ```
   /setcommands
   ```
   Then select your bot and send:
   ```
   start - Start the bot
   help - Get help information
   status - Check bot status
   ```

4. **Set Profile Picture:**
   - Send `/setuserpic` to @BotFather
   - Select your bot
   - Upload your 8XDL logo

---

## 📱 Using the Bot

### Receiving Bug Reports

When users submit bug reports through your website, you'll receive formatted messages like:

```
🐛 NEW BUG REPORT

👤 Reporter: John Doe
📧 Email: john@example.com

📱 Device Info:
• Model: Samsung Galaxy S21
• Android: Android 12
• App Version: 1.0.0

🔴 Bug Type: crash

📝 Description:
App crashes when downloading large files

🔄 Steps to Reproduce:
1. Open the app
2. Try to download a file larger than 2GB
3. App crashes

⏰ Reported: 3/2/2026, 10:30:00 AM
```

### Receiving Feature Requests

```
💡 NEW FEATURE REQUEST

👤 Name: Jane Smith
📧 Email: jane@example.com

🎯 Feature Category: downloader
⭐ Priority: high

📝 Feature Description:
Add support for batch downloads

💭 Use Case:
Users want to download multiple files at once

⏰ Submitted: 3/2/2026, 10:30:00 AM
```

---

## 🔐 Security Best Practices

1. **Keep Your Token Secret:**
   - Never commit the token to public repositories
   - Use environment variables in production:
     ```javascript
     const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
     const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
     ```

2. **For Production:**
   Create a `.env` file:
   ```
   VITE_TELEGRAM_BOT_TOKEN=8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE
   VITE_TELEGRAM_CHAT_ID=YOUR_CHAT_ID
   ```

   Update `telegramBot.js`:
   ```javascript
   const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
   const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
   ```

3. **Add to .gitignore:**
   ```
   .env
   .env.local
   ```

---

## 🧪 Testing

### Test Bot Connection

Open browser console and run:
```javascript
import { testTelegramConnection } from './src/utils/telegramBot.js'
testTelegramConnection().then(result => console.log('Bot connected:', result))
```

### Send Test Message

```javascript
import { sendToTelegram } from './src/utils/telegramBot.js'
sendToTelegram('🧪 Test message from 8XDL website')
```

---

## 📊 Features Integrated

✅ Bug Report Form → Telegram
✅ Feature Request Form → Telegram (needs to be created)
✅ Contact Form → Telegram (needs to be created)
✅ Formatted HTML messages
✅ Timestamp on all messages
✅ User information included
✅ Device/app info for bug reports

---

## 🚀 Next Steps

1. ✅ Get your Chat ID
2. ✅ Update `telegramBot.js` with Chat ID
3. ✅ Test bug report submission
4. 🔲 Create Feature Request page (similar to Bug Report)
5. 🔲 Add Telegram integration to Contact form
6. 🔲 Set up bot commands and description
7. 🔲 Add bot profile picture
8. 🔲 Move to environment variables for production

---

## 🆘 Troubleshooting

### Bot not receiving messages?
- Check that Chat ID is correct
- Make sure you've sent at least one message to the bot
- Verify bot token is correct
- Check browser console for errors

### Getting 401 Unauthorized?
- Bot token is incorrect
- Token may have been revoked

### Getting 400 Bad Request?
- Chat ID is incorrect
- Message format is invalid

### CORS errors?
- This is normal for direct API calls from browser
- Consider using a backend proxy for production
- Or use Netlify/Vercel serverless functions

---

## 📞 Support

If you need help:
- Telegram: @BotSupport (official Telegram bot support)
- Bot API Docs: https://core.telegram.org/bots/api
- Email: 8xdlapp@tutamail.com

---

## 🎉 You're All Set!

Your bot is ready to receive bug reports and feedback from users!
