# Fix 8xdl.in - Cloudflare to Vercel Setup

## Problem
Domain 8xdl.in is down because DNS is not properly configured to point to Vercel.

## Solution: Add CNAME Record in Cloudflare

### Step 1: Login to Cloudflare
Go to https://dash.cloudflare.com/ and select domain **8xdl.in**

### Step 2: Go to DNS Settings
Click **DNS** in the left sidebar

### Step 3: Delete Existing Records (if any)
Look for any A, AAAA, or CNAME records for:
- `@` (root domain)
- `www`

Delete them if they exist.

### Step 4: Add CNAME Record for Root Domain

```
Type: CNAME
Name: @
Target: cname.vercel-dns.com
Proxy status: DNS only (GRAY CLOUD) ⚠️ CRITICAL
TTL: Auto
```

**IMPORTANT**: Click the cloud icon to make it GRAY (DNS only), NOT orange (proxied)

### Step 5: Add CNAME Record for WWW (Optional)

```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: DNS only (GRAY CLOUD)
TTL: Auto
```

## Why Gray Cloud (DNS Only)?

Vercel needs direct DNS access to:
1. Verify domain ownership
2. Provision SSL certificates
3. Route traffic correctly

Orange cloud (proxied) will break the connection.

## Verification

After adding the CNAME records:

1. Wait 5-10 minutes for DNS propagation
2. Check DNS: `dig 8xdl.in`
3. Visit: https://8xdl.in
4. Check Vercel dashboard for green checkmark

## Quick Reference

```
CNAME Record:
Name: @
Value: cname.vercel-dns.com
Proxy: OFF (gray cloud)
```

## Timeline
- Add CNAME: 2 minutes
- DNS propagation: 5-30 minutes
- SSL certificate: 5-30 minutes
- Total: 15-60 minutes

---

**Status**: Waiting for Cloudflare DNS configuration
**Last Updated**: April 5, 2026
