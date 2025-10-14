# Vercel Deployment Troubleshooting Guide

## ECONNRESET Error - Common Causes and Solutions

### 1. Network Connection Issues
**Try:**
- Switch to a different network (mobile hotspot, different WiFi)
- Disable VPN if using one
- Check firewall settings for Vercel CLI

### 2. Vercel CLI Issues
**Solution:**
```powershell
# Update Vercel CLI to latest version
npm install -g vercel@latest

# Clear Vercel cache
Remove-Item -Recurse -Force "$env:USERPROFILE\.vercel" -ErrorAction SilentlyContinue

# Re-authenticate
vercel logout
vercel login
```

### 3. DNS/Proxy Issues
**Solution:**
```powershell
# Flush DNS cache (run as Administrator)
ipconfig /flushdns

# Test connectivity to Vercel API
Test-NetConnection -ComputerName api.vercel.com -Port 443
```

### 4. Alternative: Deploy via Git Integration
**Steps:**
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Complete content migration"
   git push origin feature/goldencard-start
   ```

2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will automatically deploy

### 5. Manual Retry with Timeout Settings
**Solution:**
```powershell
# Set longer timeout
$env:VERCEL_TIMEOUT = "600000"

# Try deployment
vercel --prod --yes
```

### 6. Use the Retry Script
**Run:**
```powershell
.\deploy.ps1
```

### 7. Check Vercel Status
Visit: https://www.vercel-status.com/
(Check if Vercel API is experiencing issues)

## Recommended Approach

**Best for immediate deployment:**
1. Use Git Integration (most reliable)
2. Push to GitHub
3. Let Vercel auto-deploy from the dashboard

**Best for CLI:**
1. Ensure stable network connection
2. Update Vercel CLI: `npm install -g vercel@latest`
3. Re-authenticate: `vercel login`
4. Use retry script: `.\deploy.ps1`
