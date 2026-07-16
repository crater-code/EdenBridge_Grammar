# How to Add Policy PDF Files

## Quick Guide

### Step 1: Locate the Policies Folder
The PDF files should be placed in:
```
public/policies/
```

### Step 2: Add Your PDF Files
Place these 6 PDF files in the `public/policies/` folder:

1. ✅ `Safeguarding Policy.pdf`
2. ✅ `Data Protection Policy .pdf` ⚠️ (space before .pdf)
3. ✅ `Code of Conduct .pdf` ⚠️ (space before .pdf)
4. ✅ `Assessment Policy.pdf`
5. ✅ `Teaching and learning Policy.pdf`
6. ✅ `Free Stucture.pdf` ⚠️ (typo: "Stucture")

### Step 3: Verify Filenames
**IMPORTANT**: Filenames must match EXACTLY, including:
- Spaces before `.pdf` (where indicated)
- Capital letters
- Typos (like "Stucture" instead of "Structure")

### Step 4: Test
After adding files:
1. Go to: https://04-tirzah-website.vercel.app/policies
2. Click each policy card
3. Verify PDF opens in new tab

---

## File Structure

```
public/
├── policies/
│   ├── README.txt
│   ├── Safeguarding Policy.pdf          ← Add this
│   ├── Data Protection Policy .pdf      ← Add this (note space)
│   ├── Code of Conduct .pdf             ← Add this (note space)
│   ├── Assessment Policy.pdf            ← Add this
│   ├── Teaching and learning Policy.pdf ← Add this
│   └── Free Stucture.pdf                ← Add this (note typo)
├── logo.png
├── hero-video.mp4
└── ...other files
```

---

## Deployment

### If Using Vercel:
1. Add PDF files to `public/policies/` folder
2. Commit changes to Git
3. Push to repository
4. Vercel will auto-deploy

OR

1. Add PDF files locally
2. Run: `vercel --prod`
3. Files will be uploaded with deployment

### If Using Other Hosting:
1. Add PDF files to `public/policies/` folder
2. Run: `npm run build`
3. Upload entire `build/` folder to your host
4. Ensure `build/policies/` folder contains all PDFs

---

## Testing URLs

After deployment, test each PDF at:

1. `https://your-domain.com/policies/Safeguarding Policy.pdf`
2. `https://your-domain.com/policies/Data Protection Policy .pdf`
3. `https://your-domain.com/policies/Code of Conduct .pdf`
4. `https://your-domain.com/policies/Assessment Policy.pdf`
5. `https://your-domain.com/policies/Teaching and learning Policy.pdf`
6. `https://your-domain.com/policies/Free Stucture.pdf`

---

## Troubleshooting

### PDF Not Opening?
- Check filename matches exactly (including spaces and typos)
- Verify file is in `public/policies/` folder
- Clear browser cache and try again
- Check browser console for 404 errors

### 404 Error?
- Filename doesn't match exactly
- File not uploaded to server
- Folder path incorrect

### PDF Opens But Wrong File?
- Check you uploaded correct PDF to correct filename
- Verify no duplicate files with similar names

---

## Current Status

✅ Policies page is LIVE at: https://04-tirzah-website.vercel.app/policies
⚠️ PDF files need to be added to `public/policies/` folder
📝 Once PDFs are added, redeploy to make them accessible

---

## Need Help?

Contact: +92 333 6274343 (WhatsApp)
