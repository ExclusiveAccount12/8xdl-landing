# Vercel Configuration & Page Link Update Guide

## Overview
This guide covers updating the 8xdl landing page to use the correct app name "8xdl" instead of "TorrentX" and configuring Vercel environment variables.

## ✅ Completed Changes

### 1. Route Update
- **Changed:** `/torrentx` → `/8xdl`
- **File:** `src/App.jsx`
- **Status:** ✅ Complete

### 2. Page Content Updates
- **File:** `src/pages/TorrentX.jsx`
- **Changes:**
  - Hero badge: "8xdl Download Manager"
  - All references to "TorrentX" changed to "8xdl"
  - APK filenames: `8xdl-Full-v1.1.2.apk`, `8xdl-Play-v1.1.2.apk`
- **Status:** ✅ Complete

## 🔄 Remaining Updates Needed

### 3. Update Internal References

The following files still reference "TorrentX" and should be reviewed:

#### A. Site Configuration (`src/content/site.js`)
```javascript
// Current:
modules: [
  { name: 'TorrentX', label: 'BitTorrent client' },
  // ...
]

// Consider changing to:
modules: [
  { name: '8xdl Torrent', label: 'BitTorrent client' },
  // ...
]
```

#### B. Home Page (`src/pages/Home.jsx`)
```javascript
// Line 53:
summary: 'DownloadX, TorrentX, M3u8X',

// Consider changing to:
summary: 'DownloadX, 8xdl Torrent, M3u8X',
```

#### C. Features Page (`src/pages/Features.jsx`)
```javascript
// Line 22:
name: 'TorrentX',

// Line 89:
description: 'The public site tracks the actual Android build version and compatibility settings from the TorrentX project.',

// Line 109:
modules inside the TorrentX project.
```

## 📦 Vercel Environment Variables

### Required Environment Variables

Add these in your Vercel project settings:

1. **Go to:** Vercel Dashboard → Your Project → Settings → Environment Variables

2. **Add the following variables:**

```bash
# App Configuration
VITE_APP_NAME=8xdl
VITE_APP_VERSION=1.1.2
VITE_RELEASE_DATE=April 15, 2026
VITE_MIN_ANDROID=8.0

# URLs
VITE_WEBSITE_URL=https://8xdl.in
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.codex.torrentx
VITE_GITHUB_URL=https://github.com/8xdl
VITE_TELEGRAM_SUPPORT=https://t.me/x8dlsupport

# Contact
VITE_SUPPORT_EMAIL=dexterctf@tutamail.com

# Download Links (if hosting APKs)
VITE_APK_FULL_URL=https://8xdl.in/downloads/8xdl-Full-v1.1.2.apk
VITE_APK_PLAY_URL=https://8xdl.in/downloads/8xdl-Play-v1.1.2.apk

# Telegram Bot (if using)
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

### Environment Variable Scopes

Set these for all environments:
- ✅ Production
- ✅ Preview
- ✅ Development

## 🚀 Deployment Steps

### 1. Local Testing
```bash
cd 8xdl-landing
npm run build
npm run preview
```

### 2. Commit Changes
```bash
git add .
git commit -m "Update app name from TorrentX to 8xdl and configure routes"
git push origin main
```

### 3. Vercel Deployment

#### Option A: Automatic (Recommended)
- Push to your connected Git repository
- Vercel will auto-deploy

#### Option B: Manual
```bash
npm install -g vercel
cd 8xdl-landing
vercel --prod
```

### 4. Verify Deployment
- Visit: `https://8xdl.in/8xdl`
- Check all links work correctly
- Test download buttons
- Verify responsive design

## 🔗 Updated URLs

### New Page Routes
- Home: `https://8xdl.in/`
- 8xdl Download: `https://8xdl.in/8xdl` (previously `/torrentx`)
- Features: `https://8xdl.in/features`
- Privacy: `https://8xdl.in/privacy`
- Terms: `https://8xdl.in/terms`
- Permissions: `https://8xdl.in/permissions`
- Bug Report: `https://8xdl.in/bug-report`
- Suggest Feature: `https://8xdl.in/suggest-feature`

### Download Links
Update these in your hosting:
- Full APK: `/downloads/8xdl-Full-v1.1.2.apk`
- Play Store APK: `/downloads/8xdl-Play-v1.1.2.apk`

## 📝 Vercel Configuration Files

### Current `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Optional: Add Custom Headers
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/downloads/(.*)",
      "headers": [
        {
          "key": "Content-Disposition",
          "value": "attachment"
        }
      ]
    }
  ]
}
```

## 🔍 Testing Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] `/8xdl` page displays properly
- [ ] All navigation links work
- [ ] Download buttons function
- [ ] Mobile responsive design works
- [ ] Footer links are correct
- [ ] Contact forms submit properly
- [ ] Telegram integration works (if enabled)
- [ ] SEO meta tags are correct
- [ ] Favicon displays
- [ ] Analytics tracking works (if configured)

## 🐛 Troubleshooting

### Issue: 404 on `/8xdl` route
**Solution:** Ensure `vercel.json` has the rewrite rule for SPA routing

### Issue: Environment variables not working
**Solution:** 
1. Prefix all variables with `VITE_`
2. Redeploy after adding variables
3. Clear browser cache

### Issue: Old `/torrentx` links still work
**Solution:** Add a redirect in `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/torrentx",
      "destination": "/8xdl",
      "permanent": true
    }
  ]
}
```

## 📞 Support

If you encounter issues:
- Email: dexterctf@tutamail.com
- Telegram: https://t.me/x8dlsupport
- GitHub: https://github.com/8xdl

## 🎯 Next Steps

1. Review and update remaining "TorrentX" references in content files
2. Upload APK files to `/downloads/` directory
3. Configure custom domain (if not already done)
4. Set up analytics (Google Analytics, Plausible, etc.)
5. Configure Telegram bot for support
6. Add sitemap.xml and robots.txt
7. Set up monitoring (Vercel Analytics, Sentry, etc.)

---

**Last Updated:** April 15, 2026
**Version:** 1.0.0
