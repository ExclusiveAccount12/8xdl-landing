# Cloudflare DNS Setup for 8xdl.in → Vercel

## Current Status
✅ Domain added to Vercel project: `8xdl-landing`  
⚠️ DNS configuration required

## DNS Configuration Required

You need to add an A record in your Cloudflare DNS settings to point 8xdl.in to Vercel's servers.

### Step-by-Step Instructions

#### 1. Login to Cloudflare Dashboard
- Go to https://dash.cloudflare.com/
- Select your domain: **8xdl.in**

#### 2. Navigate to DNS Settings
- Click on **DNS** in the left sidebar
- You'll see your current DNS records

###eck # 3. Add A Record for Root Domain

Add the following A record:

```
Type: A
Name: @
IPv4 address: 76.76.21.21
Proxy status: DNS only (gray cloud) ⚠️ IMPORTANT
TTL: Auto
```

**CRITICAL**: Make sure the proxy status is set to **DNS only** (gray cloud icon), NOT proxied (orange cloud). Vercel needs direct DNS resolution for SSL certificate provisioning.

#### 4. Add A Record for www Subdomain (Optional but Recommended)

```
Type: A
Name: www
IPv4 address: 76.76.21.21
Proxy status: DNS only (gray cloud)
TTL: Auto
```

#### 5. Remove Conflicting Records (If Any)

Check if there are any existing A, AAAA, or CNAME records for:
- `@` (root domain)
- `www`

If they exist and point to different locations, delete them before adding the new records.

### Alternative: CNAME Method (If You Prefer)

Instead of A records, you can use CNAME (only for www, not root):

```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: DNS only (gray cloud)
TTL: Auto
```

Then add a CNAME flattening for root:
```
Type: CNAME
Name: @
Target: cname.vercel-dns.com
Proxy status: DNS only (gray cloud)
TTL: Auto
```

Note: Cloudflare supports CNAME flattening for root domains.

## Verification Steps

### 1. Check DNS Propagation
After adding the records, wait 5-10 minutes, then check:

```bash
# Check A record
dig 8xdl.in +short

# Should return: 76.76.21.21
```

Or use online tools:
- https://dnschecker.org/
- https://www.whatsmydns.net/

### 2. Verify in Vercel Dashboard
- Go to https://vercel.com/8xdl/8xdl-landing
- Click on **Settings** → **Domains**
- You should see `8xdl.in` with a green checkmark once DNS is configured

### 3. SSL Certificate
Vercel will automatically provision an SSL certificate once DNS is verified. This may take 5-30 minutes.

## Common Issues & Solutions

### Issue 1: "Invalid Configuration" Error
**Cause**: Cloudflare proxy is enabled (orange cloud)  
**Solution**: Click the cloud icon to make it gray (DNS only)

### Issue 2: DNS Not Propagating
**Cause**: DNS cache or TTL issues  
**Solution**: 
- Wait 10-30 minutes
- Clear your DNS cache: `sudo systemd-resolve --flush-caches` (Linux)
- Try incognito mode or different network

### Issue 3: SSL Certificate Not Provisioning
**Cause**: DNS not fully propagated or proxy enabled  
**Solution**:
- Ensure gray cloud (DNS only) in Cloudflare
- Wait for full DNS propagation (up to 48 hours, usually 10-30 minutes)
- Check Vercel dashboard for specific error messages

### Issue 4: "Domain is not configured correctly"
**Cause**: Missing or incorrect A record  
**Solution**: Double-check the IP address is exactly `76.76.21.21`

## Cloudflare Settings Recommendations

### 1. SSL/TLS Settings
- Go to **SSL/TLS** → **Overview**
- Set encryption mode to: **Full** or **Full (strict)**
- This ensures end-to-end encryption between Cloudflare and Vercel

### 2. Always Use HTTPS
- Go to **SSL/TLS** → **Edge Certificates**
- Enable **Always Use HTTPS**
- Enable **Automatic HTTPS Rewrites**

### 3. Caching (Optional)
Since this is a static site, you can enable Cloudflare caching:
- Go to **Caching** → **Configuration**
- Set caching level to **Standard**

### 4. Page Rules (Optional)
Create a page rule to cache everything:
```
URL: 8xdl.in/*
Settings: Cache Level = Cache Everything
```

## Expected Timeline

| Step | Time |
|------|------|
| Add DNS records | 2 minutes |
| DNS propagation | 5-30 minutes |
| Vercel verification | 1-5 minutes |
| SSL certificate | 5-30 minutes |
| **Total** | **15-60 minutes** |

## Final Verification

Once everything is set up, test these URLs:

1. **HTTP → HTTPS redirect**: http://8xdl.in (should redirect to https)
2. **Root domain**: https://8xdl.in
3. **WWW subdomain**: https://www.8xdl.in (if configured)
4. **SSL certificate**: Check for green padlock in browser

## Quick Reference: DNS Records

```
# Root domain
Type: A
Name: @
Value: 76.76.21.21
Proxy: DNS only (gray cloud)

# WWW subdomain (optional)
Type: A
Name: www
Value: 76.76.21.21
Proxy: DNS only (gray cloud)
```

## Support

If you encounter issues:

1. **Vercel Status**: Check https://www.vercel-status.com/
2. **Cloudflare Status**: Check https://www.cloudflarestatus.com/
3. **Vercel Support**: https://vercel.com/support
4. **DNS Checker**: https://dnschecker.org/

## Current Nameservers

Your domain is currently using Cloudflare nameservers:
- `grannbo.ns.cloudflare.com`
- `rocky.ns.cloudflare.com`

These are correct and should remain unchanged.

---

**Last Updated**: April 3, 2026  
**Domain**: 8xdl.in  
**Vercel Project**: 8xdl-landing  
**Status**: Awaiting DNS configuration
