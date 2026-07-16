# Quick Vercel Deployment Commands

## 🚀 Deploy in 3 Steps

### Step 1: Install Vercel CLI (if not installed)
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --prod
```

When prompted:
- Project name: **EBG website T**
- Link to existing project: **N** (first time) or **Y** (subsequent deploys)

---

## 📝 Alternative: Deploy via Vercel Dashboard

1. Go to: https://vercel.com/new
2. Click "Import Project"
3. Upload your project folder or connect Git repository
4. Set project name: **EBG website T**
5. Click "Deploy"

---

## ✅ What's Already Configured

- ✅ Tagline updated to "Beyond Schooling" everywhere
- ✅ `vercel.json` configured for React Router
- ✅ Build scripts ready
- ✅ All responsive fixes applied
- ✅ SEO meta tags configured
- ✅ Google Analytics integrated

---

## 🎯 Your Deployment URL

After deployment, you'll get a URL like:
- `https://ebg-website-t.vercel.app`

You can also add a custom domain in Vercel settings.

---

## 📋 Post-Deployment Testing

Test these pages after deployment:
1. Homepage - Check tagline shows "Beyond Schooling"
2. FAQ page - Test "Learn More" buttons
3. Apply Now form - Verify form displays correctly
4. All Study pages - Check responsive design
5. Mobile view - Test on different screen sizes

---

## 🔗 Backend Note

Remember: PHP backend files are deployed separately on Hostinger, not on Vercel.
Vercel hosts only the React frontend.
