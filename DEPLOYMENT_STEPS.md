# 8xdl Landing Page - Deployment Steps

## ✅ Changes Made

1. **Route Updated:** `/torrentx` → `/8xdl`
2. **Page Content:** All "TorrentX" references changed to "8xdl"
3. **Redirect Added:** Old URL automatically redirects to new URL
4. **Build Completed:** Site built successfully

## 🚀 Deploy to Vercel

### Option 1: Push to Git (Automatic Deploy)
```bash
cd 8xdl-landing
git add .
git commit -m "Update app name from TorrentX to 8xdl"
git push origin main
```

Vercel will automatically deploy when you push to your connected repository.

### Option 2: Manual Deploy with Vercel CLI
```bash
cd 8xdl-landing
vercel --prod
```

## 🔗 New URLs

After deployment, your pages will be:
- **8xdl Download Page:** `https://8xdl.in/8xdl`
- **Old URL (redirects):** `https://8xdl.in/torrentx` → redirects to `/8xdl`

## 📝 Vercel Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
VITE_APP_NAME=8xdl
VITE_APP_VERSION=1.1.2
VITE_WEBSITE_URL=https://8xdl.in
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.codex.torrentx
VITE_SUPPORT_EMAIL=dexterctf@tutamail.com
```

## ✅ Verify After Deploy

1. Visit: `https://8xdl.in/8xdl`
2. Check old URL redirects: `https://8xdl.in/torrentx`
3. Test download buttons
4. Check mobile responsive design

## 🐛 If Page Not Showing

1. **Clear browser cache:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. **Check Vercel deployment logs** in dashboard
3. **Verify build succeeded** in Vercel
4. **Wait 1-2 minutes** for CDN propagation

## 📞 Support

- Email: dexterctf@tutamail.com
- Telegram: https://t.me/x8dlsupport
