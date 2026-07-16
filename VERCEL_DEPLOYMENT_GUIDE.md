# Vercel Deployment Guide - EBG Website T

## ✅ Pre-Deployment Checklist

### 1. Tagline Updated
- ✅ Homepage hero subtitle: "Beyond Schooling"
- ✅ Navbar: "Beyond Schooling"
- ✅ Footer: "Beyond Schooling"
- ✅ Ideology page: "Beyond Schooling"
- ✅ Page titles: "Beyond Schooling"

### 2. Project Configuration
- ✅ `vercel.json` configured for React Router
- ✅ Build script ready: `npm run build`
- ✅ Vercel build script: `vercel-build` (ignores CI warnings)

### 3. Files Ready for Deployment
- ✅ All responsive fixes applied (mobile, tablet, landscape, LED displays)
- ✅ FAQ page buttons working
- ✅ All animations functional
- ✅ SEO meta tags configured

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. **When prompted, configure as follows**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **EBG website T**
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **N**

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Click "Add New Project"**

3. **Import Git Repository** or **Deploy from Local**:
   - If using Git: Connect your repository
   - If local: Use Vercel CLI (see Option 1)

4. **Configure Project**:
   - **Project Name**: `EBG website T`
   - **Framework Preset**: Create React App
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

5. **Environment Variables** (if needed):
   - No environment variables required for frontend
   - Backend API URLs are configured separately on Hostinger

6. **Click "Deploy"**

---

## 📋 Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Hero video plays
- [ ] 3D neural diagram renders
- [ ] Tagline shows "Beyond Schooling"

### 2. Test Responsive Design
- [ ] Mobile portrait (320px - 480px)
- [ ] Mobile landscape (480px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px - 1920px)
- [ ] LED displays (1920px+)

### 3. Test All Pages
- [ ] Home page
- [ ] Our Ideology
- [ ] Foundation Phase
- [ ] Formation Phase
- [ ] Orientation Phase
- [ ] Direction Phase
- [ ] Learning Framework
- [ ] FAQ (test flip cards and modals)
- [ ] Apply Now form
- [ ] Board of Directors
- [ ] Founder's Message
- [ ] Careers

### 4. Test Functionality
- [ ] FAQ "Learn More" buttons work
- [ ] FAQ modal scrolling works correctly
- [ ] Apply Now form (frontend only - backend on Hostinger)
- [ ] All animations smooth
- [ ] No console errors

### 5. SEO Verification
- [ ] Meta tags present
- [ ] Open Graph tags working
- [ ] Twitter cards configured
- [ ] Sitemap accessible
- [ ] Robots.txt accessible

---

## 🔧 Configuration Files

### vercel.json
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

This configuration ensures React Router works correctly by redirecting all routes to index.html.

---

## 🌐 Custom Domain Setup (Optional)

If you want to use a custom domain:

1. **Go to Project Settings** in Vercel Dashboard
2. **Navigate to "Domains"**
3. **Add your domain**: `edenbridgegrammar.edu`
4. **Follow DNS configuration instructions**
5. **Wait for DNS propagation** (can take up to 48 hours)

---

## 🔗 Backend Integration

**IMPORTANT**: The PHP backend files are deployed separately on Hostinger, NOT on Vercel.

### Backend Files Location
- `api/submit-application.php`
- `api/submit-contact.php`
- `api/config.php`
- `api/.htaccess`

### To Connect Frontend to Backend:
1. Deploy backend files to Hostinger
2. Update API URLs in React forms to point to Hostinger endpoints
3. Configure CORS on Hostinger to allow requests from Vercel domain

---

## 📊 Monitoring & Analytics

### Google Analytics
- Already configured with ID: `G-LCZFYFMBBB`
- Verify tracking in Google Analytics dashboard after deployment

### Vercel Analytics (Optional)
1. Go to Project Settings
2. Navigate to "Analytics"
3. Enable Vercel Analytics for detailed performance metrics

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 16.x or higher)
- Clear cache: `vercel --force`
- Check build logs in Vercel dashboard

### Routes Not Working
- Verify `vercel.json` is present
- Check that rewrites configuration is correct

### Assets Not Loading
- Verify all assets are in `public/` folder
- Check that paths use `%PUBLIC_URL%` or relative paths

### Performance Issues
- Enable Vercel Edge Network
- Optimize images (consider using WebP format)
- Enable compression in Vercel settings

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Test locally first: `npm run build && npx serve -s build`
4. Contact Vercel support if needed

---

## ✨ Success!

Once deployed, your website will be live at:
- **Vercel URL**: `https://ebg-website-t.vercel.app` (or similar)
- **Custom Domain**: `https://edenbridgegrammar.edu` (if configured)

The project name "EBG website T" will be visible in your Vercel dashboard.
