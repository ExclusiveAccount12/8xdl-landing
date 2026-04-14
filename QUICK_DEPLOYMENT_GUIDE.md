# 8XDL Landing - Quick Deployment Guide

## 📦 What's Ready

✅ **Production Build**: `dist/` folder with optimized assets
✅ **Deployment Package**: `8xdl-cpanel-ready.zip` (70 KB)
✅ **Telegram Bot**: Configured and ready
✅ **Email Fallback**: Automatic if Telegram fails

## 🚀 Deploy to cPanel (3 Steps)

### Step 1: Upload
1. Login to cPanel
2. Go to File Manager
3. Navigate to `public_html` (or subdirectory like `public_html/8xdl`)
4. Upload `8xdl-cpanel-ready.zip`

### Step 2: Extract
1. Right-click the ZIP file
2. Click "Extract"
3. Extract to current directory
4. Delete the ZIP file

### Step 3: Verify
1. Visit your domain (e.g., https://8xdl.in)
2. Test navigation to all pages
3. Submit a test bug report
4. Check Telegram for the message

## 📱 Test Telegram Bot

### Quick Test:
```bash
curl -X POST "https://api.telegram.org/bot8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{"chat_id":"7580529266","text":"Test from 8XDL"}'
```

### Expected Response:
```json
{"ok":true,"result":{...}}
```

## 🔗 All Links

### Website Routes:
- Home: `/`
- Privacy: `/privacy`
- Terms: `/terms`
- Permissions: `/permissions`
- Disclaimer: `/disclaimer`
- Bug Report: `/bug-report`
- Suggest Feature: `/suggest-feature`
- Features: `/features`

### Telegram:
- Support: https://t.me/x8dlsupport
- Channel: https://t.me/x8dlofficial
- Group: https://t.me/x8dlgroup

### Email:
- Contact: dexterctf@tutamail.com

## 🛠️ Local Development

### Run Dev Server:
```bash
cd 8xdl-landing
npm run dev
```
Access at: http://localhost:5173

### Build for Production:
```bash
npm run build
```
Output: `dist/` folder

### Create New ZIP:
```bash
rm -f 8xdl-cpanel-ready.zip
zip -r 8xdl-cpanel-ready.zip dist/index.html dist/assets dist/.htaccess
```

## 🐛 Troubleshooting

### Issue: Routes show 404
**Fix**: Ensure `.htaccess` is in the root directory with the index.html

### Issue: Telegram not working
**Fix**: Check bot token and chat ID in `telegramBot.js`

### Issue: Email fallback not opening
**Fix**: User's browser may block `mailto:` links. Provide manual email address.

### Issue: Styles not loading
**Fix**: Check that `assets/` folder is in the same directory as `index.html`

## 📊 Monitor Submissions

### Telegram Chat:
- Open Telegram app
- Go to chat ID: 7580529266
- All bug reports and feature requests appear here

### Email:
- Check: dexterctf@tutamail.com
- Users may email directly if forms fail

## 🔄 Update Process

1. Make changes in `src/` folder
2. Run `npm run build`
3. Create new ZIP
4. Upload to cPanel
5. Extract and replace files

## ✅ Pre-Launch Checklist

- [ ] Domain configured correctly
- [ ] SSL certificate installed (HTTPS)
- [ ] All routes accessible
- [ ] Telegram bot tested
- [ ] Email fallback tested
- [ ] Mobile responsive checked
- [ ] Dark/Light mode working
- [ ] Forms submitting correctly
- [ ] Privacy policy reviewed
- [ ] Contact info verified

## 🎯 Success Metrics

Track these after launch:
- Bug reports received
- Feature requests submitted
- Telegram group members
- Channel subscribers
- Website traffic
- User engagement

---

**Ready to Deploy!** 🚀

Upload `8xdl-cpanel-ready.zip` to cPanel and you're live!
