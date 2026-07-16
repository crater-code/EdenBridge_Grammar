# Visual Testing Guide - Landscape Mode

## Quick Visual Test Checklist

Use this guide to quickly verify landscape mode is working correctly.

## 🔄 How to Switch to Landscape Mode

### In Browser (Easiest Method)
1. Open http://localhost:3000
2. Press **F12** to open DevTools
3. Press **Ctrl+Shift+M** (or click device toolbar icon)
4. Click the **Rotate** icon (🔄) in the toolbar
5. Or manually enter landscape dimensions

### On Physical Device
1. Open http://localhost:3000 on your device
2. Physically rotate your device 90 degrees
3. Website should automatically adapt

## 📱 Test Scenarios

### Scenario 1: Phone in Landscape (Most Common Issue)
**Dimensions**: 667 x 375 (iPhone) or 812 x 375 (iPhone X)

**What to Check:**
- [ ] Hero section fits on screen (no excessive scrolling)
- [ ] Title is readable (not too small)
- [ ] Navigation bar is compact
- [ ] Content sections have reduced padding
- [ ] Buttons are appropriately sized
- [ ] Footer is visible and formatted correctly

**Expected Behavior:**
- Hero height: ~85vh (fits most content above fold)
- Title: Smaller than portrait but still prominent
- Navbar: Reduced height, smaller logo
- Content: Compact spacing, efficient use of horizontal space

---

### Scenario 2: Tablet in Landscape
**Dimensions**: 1024 x 768 (iPad)

**What to Check:**
- [ ] Hero section looks balanced
- [ ] Grids show 2-3 columns (not single column)
- [ ] Navigation menu is full-width (not mobile menu)
- [ ] Cards are properly sized
- [ ] Text is comfortable to read
- [ ] Footer has multi-column layout

**Expected Behavior:**
- Hero height: ~90vh
- Grids: 2-3 columns depending on content
- Navbar: Full desktop navigation
- Spacing: Moderate, balanced

---

### Scenario 3: Desktop/Laptop Landscape
**Dimensions**: 1920 x 1080

**What to Check:**
- [ ] Hero section is full height (100vh)
- [ ] Content is centered with margins
- [ ] All features are visible
- [ ] Text is large and readable
- [ ] Grids show multiple columns
- [ ] Navigation is full-featured

**Expected Behavior:**
- Hero height: 100vh
- Content max-width: ~1800px, centered
- Font sizes: Increased from mobile
- Spacing: Generous

---

### Scenario 4: LED Display Landscape
**Dimensions**: 2560 x 1440 or larger

**What to Check:**
- [ ] Text is large enough to read from distance
- [ ] Content doesn't stretch edge-to-edge
- [ ] Everything is centered
- [ ] Spacing is generous
- [ ] Images and videos scale properly
- [ ] No pixelation or blurriness

**Expected Behavior:**
- Base font: 20-24px
- Content max-width: 2200-3200px
- Large padding: 5-7rem horizontal
- Scaled up elements: buttons, cards, icons

---

### Scenario 5: Ultra-Wide Display
**Dimensions**: 3440 x 1440 (21:9) or 5120 x 1440 (32:9)

**What to Check:**
- [ ] Content is constrained (not full width)
- [ ] Content is centered
- [ ] No excessive empty space on sides
- [ ] Text lines aren't too long
- [ ] Grids are centered
- [ ] Readable from normal viewing distance

**Expected Behavior:**
- Content width: 60-70% of viewport
- Centered layout
- Max text width: 85 characters
- Grids: Centered with max columns

---

### Scenario 6: Very Short Screen (Phone Landscape)
**Dimensions**: 667 x 375 or shorter (height < 500px)

**What to Check:**
- [ ] Hero section doesn't take full height
- [ ] Content is immediately visible
- [ ] Navigation is compact
- [ ] Minimal vertical padding
- [ ] 3D elements hidden or very small
- [ ] Can see main content without scrolling

**Expected Behavior:**
- Hero height: auto or 70vh
- Minimal padding: 1.5-2rem
- Compact layouts
- Single column on very short screens

---

## 🎨 Visual Comparison

### Portrait vs Landscape - What Should Change

#### Navigation Bar
- **Portrait**: Normal height, standard logo size
- **Landscape**: Reduced height, smaller logo (especially on short screens)

#### Hero Section
- **Portrait**: Full 100vh, vertical layout
- **Landscape**: 70-100vh depending on height, more horizontal

#### Content Sections
- **Portrait**: Single column, generous vertical padding
- **Landscape**: Multi-column grids, reduced vertical padding

#### Text Sizes
- **Portrait**: Standard sizes
- **Landscape**: Slightly smaller on phones, larger on LED displays

#### Grids
- **Portrait**: 1-2 columns
- **Landscape**: 2-4 columns depending on screen size

#### Footer
- **Portrait**: Stacked columns
- **Landscape**: Horizontal layout, multi-column

---

## 🔍 Detailed Page Checks

### Home Page (/)
- [ ] Hero video/3D element scales properly
- [ ] Split layout (text + 3D) works in landscape
- [ ] Feature cards grid uses horizontal space
- [ ] "Who We Are" and "What We Do" sections side-by-side
- [ ] Footer displays correctly

### Phase Pages (/study/foundation-phase, etc.)
- [ ] Phase hero fits on screen
- [ ] Main content card is readable
- [ ] Two-column layout (text + diagram) works
- [ ] Hub cards grid is properly sized
- [ ] Outcomes section displays well

### FAQ Page (/faq)
- [ ] FAQ cards grid uses horizontal space
- [ ] Cards are properly sized (not too tall)
- [ ] Modal fits on screen when opened
- [ ] Modal navigation buttons are accessible

### Apply Now Page (/apply-now)
- [ ] Form fits on screen
- [ ] Form fields are properly sized
- [ ] Contact info grid is horizontal
- [ ] Submit button is accessible
- [ ] Success modal fits on screen

---

## ⚠️ Common Issues to Watch For

### Issue: Content Cut Off at Bottom
**Symptom**: Can't see footer or bottom content without scrolling excessively
**Check**: Hero section min-height values
**Fix**: Should be 70-90vh in landscape, not 100vh

### Issue: Text Too Small
**Symptom**: Hard to read text on large displays
**Check**: Font-size values in landscape queries
**Fix**: Should increase on larger displays (18-24px base)

### Issue: Wasted Horizontal Space
**Symptom**: Single column layout with lots of empty space on sides
**Check**: Grid column counts
**Fix**: Should be 2-4 columns in landscape

### Issue: Navigation Too Tall
**Symptom**: Navbar takes up too much vertical space
**Check**: Navbar padding and logo size
**Fix**: Should be reduced in landscape, especially on short screens

### Issue: Content Stretched Too Wide
**Symptom**: Text lines are very long, hard to read
**Check**: Content max-width values
**Fix**: Should be constrained (1800-2200px) and centered

### Issue: Modal Doesn't Fit
**Symptom**: Modal is cut off or requires scrolling
**Check**: Modal max-height values
**Fix**: Should be 85-90vh with overflow scroll

---

## ✅ Success Criteria

Your landscape mode is working correctly if:

1. **All content is visible** without excessive scrolling
2. **Text is readable** at the intended viewing distance
3. **Layouts adapt** to use horizontal space efficiently
4. **Navigation is accessible** and appropriately sized
5. **Interactive elements** (buttons, cards) are properly sized
6. **Grids display** multiple columns where appropriate
7. **Content is centered** on large displays
8. **Transitions are smooth** when rotating device
9. **No horizontal scrollbar** appears
10. **All pages work** in landscape orientation

---

## 🚀 Quick Test Routine (5 minutes)

1. **Phone Landscape** (667x375)
   - Home page → Check hero fits
   - FAQ page → Check cards grid
   - Apply page → Check form

2. **Tablet Landscape** (1024x768)
   - Home page → Check feature grid
   - Phase page → Check two-column layout
   - Footer → Check multi-column

3. **Desktop Landscape** (1920x1080)
   - All pages → Check centering
   - Navigation → Check full menu
   - Content → Check spacing

4. **LED Landscape** (2560x1440)
   - Home page → Check text size
   - All pages → Check from distance
   - Content → Check max-width

5. **Rotate Test**
   - Start in portrait
   - Rotate to landscape
   - Check smooth transition
   - Rotate back to portrait

---

## 📊 Test Results Template

Use this to track your testing:

```
Date: ___________
Tester: ___________

Phone Landscape (667x375):
[ ] Home page - Pass/Fail
[ ] Phase pages - Pass/Fail
[ ] FAQ page - Pass/Fail
[ ] Apply page - Pass/Fail

Tablet Landscape (1024x768):
[ ] Home page - Pass/Fail
[ ] Phase pages - Pass/Fail
[ ] FAQ page - Pass/Fail
[ ] Apply page - Pass/Fail

Desktop Landscape (1920x1080):
[ ] Home page - Pass/Fail
[ ] Phase pages - Pass/Fail
[ ] FAQ page - Pass/Fail
[ ] Apply page - Pass/Fail

LED Landscape (2560x1440+):
[ ] Home page - Pass/Fail
[ ] Phase pages - Pass/Fail
[ ] FAQ page - Pass/Fail
[ ] Apply page - Pass/Fail

Issues Found:
1. ___________________________
2. ___________________________
3. ___________________________

Overall Status: Pass / Needs Work
```

---

## 🎯 Final Check

Before deploying, verify:
- [ ] Tested on at least 3 different landscape resolutions
- [ ] Tested on physical device (phone/tablet)
- [ ] Tested rotation from portrait to landscape
- [ ] All pages checked in landscape
- [ ] No console errors in DevTools
- [ ] All interactive elements work
- [ ] Text is readable at viewing distance
- [ ] No horizontal scrolling
- [ ] Content fits on screen
- [ ] Smooth transitions

---

**Ready to test?** Open http://localhost:3000 and start rotating! 🔄
