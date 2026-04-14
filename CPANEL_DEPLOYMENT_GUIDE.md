# 8XDL Landing Page - cPanel Deployment Guide

## 📦 What's Been Built

Your production-ready 8XDL landing page has been compiled and optimized in the `dist/` folder.

**Build Output:**
- `dist/index.html` - Main HTML file (0.66 kB)
- `dist/assets/index-*.css` - Optimized CSS (20.15 kB → 4.51 kB gzipped)
- `dist/assets/index-*.js` - Optimized JavaScript (212.36 kB → 64.78 kB gzipped)

---

## 🚀 Step-by-Step cPanel Deployment

### Method 1: File Manager Upload (Easiest)

1. **Login to cPanel**
   - Go to your hosting cPanel (usually: yourdomain.com/cpanel)
   - Enter your username and password

2. **Navigate to File Manager**
   - Find "File Manager" in the Files section
   - Click to open

3. **Go to public_html**
   - Navigate to `public_html` folder (or `public_html/subdomain` if using subdomain)
   - This is your website's root directory

4. **Upload Files**
   - Click "Upload" button at the top
   - Select all files from the `dist/` folder:
     - `index.html`
     - `assets/` folder (entire folder)
   - Wait for upload to complete

5. **Set Permissions (if needed)**
   - Right-click on `index.html` → Permissions → Set to 644
   - Right-click on `assets/` folder → Permissions → Set to 755

6. **Done!**
   - Visit your domain: `https://yourdomain.com`
   - Your site should be live!

---

### Method 2: FTP Upload

1. **Get FTP Credentials**
   - In cPanel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Connect via FTP Client**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your server:
     - Host: ftp.yourdomain.com
     - Username: your_ftp_username
     - Password: your_ftp_password
     - Port: 21

3. **Upload Files**
   - Navigate to `public_html` on the remote server
   - Upload all files from `dist/` folder
   - Maintain folder structure

4. **Verify**
   - Visit your domain to check if site is live

---

### Method 3: ZIP Upload (Fastest)

1. **Create ZIP Archive**
   ```bash
   cd 8xdl-landing/dist
   zip -r 8xdl-site.zip *
   ```

2. **Upload ZIP to cPanel**
   - Go to File Manager in cPanel
   - Navigate to `public_html`
   - Click "Upload"
   - Upload `8xdl-site.zip`

3. **Extract ZIP**
   - Right-click on `8xdl-site.zip`
   - Click "Extract"
   - Select `public_html` as destination
   - Click "Extract Files"

4. **Delete ZIP**
   - Delete `8xdl-site.zip` after extraction

5. **Done!**
   - Visit your domain

---

## 🔧 Configuration for Production

### Update Telegram Bot for Production

The Telegram bot is currently configured with your credentials. For production security:

1. **Create Environment Variables (Recommended)**
   
   Create a `.env` file in your project root:
   ```env
   VITE_TELEGRAM_BOT_TOKEN=8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE
   VITE_TELEGRAM_CHAT_ID=7580529266
   ```

2. **Update telegramBot.js**
   ```javascript
   const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
   const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
   ```

3. **Rebuild**
   ```bash
   npm run build
   ```

### Add .htaccess for Better Performance

Create `.htaccess` in `public_html`:

```apache
# Enable GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Force HTTPS (if SSL is installed)
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🌐 Domain Configuration

### For Main Domain
- Upload files directly to `public_html/`
- Access via: `https://yourdomain.com`

### For Subdomain
1. **Create Subdomain in cPanel**
   - Go to "Subdomains"
   - Create subdomain (e.g., `8xdl.yourdomain.com`)
   - Note the document root (e.g., `public_html/8xdl`)

2. **Upload Files**
   - Upload to the subdomain's document root
   - Access via: `https://8xdl.yourdomain.com`

### For Addon Domain
1. **Add Addon Domain in cPanel**
   - Go to "Addon Domains"
   - Add your domain
   - Note the document root

2. **Upload Files**
   - Upload to addon domain's root
   - Access via your addon domain

---

## 🔒 SSL Certificate Setup

### Free SSL with Let's Encrypt (cPanel)

1. **Go to SSL/TLS Status**
   - In cPanel, find "SSL/TLS Status"
   - Click on it

2. **Install SSL**
   - Find your domain in the list
   - Click "Run AutoSSL"
   - Wait for installation (usually 1-2 minutes)

3. **Force HTTPS**
   - Uncomment the HTTPS redirect lines in `.htaccess`

### Alternative: Cloudflare SSL (Free)

1. **Add Site to Cloudflare**
   - Sign up at cloudflare.com
   - Add your domain

2. **Update Nameservers**
   - Change nameservers in your domain registrar
   - Use Cloudflare's nameservers

3. **Enable SSL**
   - In Cloudflare dashboard → SSL/TLS
   - Set to "Full" or "Full (Strict)"

---

## 📊 Testing After Deployment

### 1. Functionality Tests
- ✅ Homepage loads correctly
- ✅ Navigation works
- ✅ Bug Report form submits
- ✅ Telegram bot receives messages
- ✅ Privacy Policy page loads
- ✅ All links work

### 2. Performance Tests
- Test on GTmetrix: https://gtmetrix.com
- Test on PageSpeed Insights: https://pagespeed.web.dev
- Test on Pingdom: https://tools.pingdom.com

### 3. Mobile Responsiveness
- Test on different devices
- Use Chrome DevTools (F12 → Toggle Device Toolbar)

### 4. Browser Compatibility
- Test on Chrome, Firefox, Safari, Edge
- Check console for errors (F12)

---

## 🐛 Troubleshooting

### Site Not Loading
- Check if files are in correct directory (`public_html`)
- Verify `index.html` exists
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache (Ctrl+Shift+R)

### Telegram Bot Not Working
- Verify bot token and chat ID are correct
- Check browser console for errors (F12)
- Test bot connection: https://api.telegram.org/bot8268552967:AAE9QMtxqYd2FzzFAkMwxFJpO9Tm-GK3EPE/getMe
- Ensure CORS is not blocking requests

### 404 Errors
- Check `.htaccess` configuration
- Verify all asset paths are correct
- Ensure assets folder uploaded correctly

### Slow Loading
- Enable GZIP compression in `.htaccess`
- Enable browser caching
- Consider using Cloudflare CDN

### HTTPS Not Working
- Install SSL certificate
- Update `.htaccess` to force HTTPS
- Clear browser cache

---

## 📁 File Structure on Server

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── .htaccess (optional but recommended)
```

---

## 🔄 Updating the Site

When you make changes:

1. **Make Changes Locally**
   - Edit files in `8xdl-landing/src/`

2. **Rebuild**
   ```bash
   cd 8xdl-landing
   npm run build
   ```

3. **Upload New Files**
   - Upload new `dist/` contents to cPanel
   - Overwrite existing files

4. **Clear Cache**
   - Clear browser cache
   - If using Cloudflare, purge cache

---

## 📞 Support Resources

- **cPanel Documentation**: https://docs.cpanel.net
- **Telegram Bot API**: https://core.telegram.org/bots/api
- **Vite Documentation**: https://vitejs.dev

---

## ✅ Deployment Checklist

Before going live:

- [ ] All files uploaded to correct directory
- [ ] File permissions set correctly
- [ ] SSL certificate installed
- [ ] HTTPS redirect enabled
- [ ] Telegram bot tested and working
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Browser compatibility checked
- [ ] Performance optimized
- [ ] Analytics added (if needed)
- [ ] Backup created

---

## 🎉 You're Ready!

Your 8XDL landing page is production-ready and optimized for cPanel hosting. Just upload the `dist/` folder contents and you're live!

**Need Help?**
- Check cPanel documentation
- Contact your hosting support
- Test Telegram bot: Send a test bug report
