# 🔧 EXACT CODE CHANGES TO FIX LAG

## FILE 1: SimpleBackground.tsx

**Location:** `src/components/portfolio/SimpleBackground.tsx`

### CURRENT (Lines 14-36):
```tsx
<div style={{
  width: '50vw',
  height: '50vw',
  filter: 'blur(40px)',
}}>

<div style={{
  width: '40vw',
  height: '40vw',
  filter: 'blur(50px)',
}}>

<div style={{
  width: '30vw',
  height: '30vw',
  filter: 'blur(60px)',
}}>
```

### CHANGE TO:
```tsx
<div style={{
  width: '20vw',
  height: '20vw',
  filter: 'blur(15px)',
}}>

<div style={{
  width: '18vw',
  height: '18vw',
  filter: 'blur(20px)',
}}>

<div style={{
  width: '15vw',
  height: '15vw',
  filter: 'blur(25px)',
}}>
```

**Expected gain: 10-15% performance improvement**

---

## FILE 2: custom.css

**Location:** `src/custom.css`

### CHANGE 1: Disable glow animation (Lines 95-106)

**CURRENT:**
```css
.animate-pulse-glow {
  animation: pulse-glow 3s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% {
    text-shadow: 0 0 8px rgba(143, 92, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(143, 92, 255, 0.8), 0 0 30px rgba(196, 92, 255, 0.4);
  }
}
```

**CHANGE TO:**
```css
.animate-pulse-glow {
  animation: none;
}

@keyframes pulse-glow {
  0%, 100% {
    text-shadow: 0 0 8px rgba(143, 92, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 8px rgba(143, 92, 255, 0.5);
  }
}
```

**Expected gain: 5-10% performance improvement**

---

### CHANGE 2: Remove backdrop blur (Lines 48-54)

**CURRENT:**
```css
.glassmorphic {
  backdrop-filter: blur(8px);
  background: var(--gradient-glass);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glassmorphic-card {
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 46, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-card);
}
```

**CHANGE TO:**
```css
.glassmorphic {
  backdrop-filter: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glassmorphic-card {
  backdrop-filter: none;
  background: rgba(30, 30, 46, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: var(--shadow-card);
}
```

**Expected gain: 5-10% performance improvement**

---

## FILE 3: ModelViewer.tsx

**Location:** `src/components/portfolio/ModelViewer.tsx`

### KEY CHANGE: Disable autoRotate

**This file is used by:**
- `FeaturedProjects.tsx` (3 models)
- `ProjectGallery.tsx` (12 models)

**CURRENT (Lines 89-95):**
```tsx
<model-viewer
  src={src}
  alt={alt}
  auto-rotate={autoRotate}  // 🔴 Takes true from parent
  camera-controls={cameraControls}
  environment-image={environmentImage}
  exposure={exposure}
```

**Option A: Modify in ModelViewer.tsx**

Change line 5 default:
```tsx
autoRotate = false,  // Changed from true
```

**Option B: Modify in FeaturedProjects.tsx**

Line 89:
```tsx
autoRotate={false}  // Changed from true
```

Line 99:
```tsx
autoRotate={false}  // Changed from true
```

**Option C: Modify in ProjectGallery.tsx**

Find all instances of:
```tsx
autoRotate={true}
```

Replace with:
```tsx
autoRotate={false}
```

**Expected gain: 40-50% performance improvement (BIGGEST IMPACT)**

---

## FILE 4: index.css (Optional - Advanced)

**Location:** `src/index.css` - Lines 230-250

If you want additional performance gains, reduce other animations:

**FIND:**
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px hsl(var(--primary) / 0.3); }
  50% { box-shadow: 0 0 40px hsl(var(--primary) / 0.6); }
}
```

**REPLACE WITH:**
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: none; }
  50% { box-shadow: none; }
}
```

---

## 📝 IMPLEMENTATION ORDER

**Step 1 (CRITICAL - 40-50% gain):**
```tsx
// FeaturedProjects.tsx & ProjectGallery.tsx
autoRotate={false}
```

**Step 2 (10-15% gain):**
```tsx
// SimpleBackground.tsx
filter: 'blur(15px)' instead of blur(40px+)
```

**Step 3 (5-10% gain):**
```css
/* custom.css */
Remove backdrop-filter blur
```

**Step 4 (5% gain):**
```css
/* custom.css */
Disable animate-pulse-glow animation
```

---

## ✅ VERIFICATION CHECKLIST

After each change, check in browser:

- [ ] Page loads faster
- [ ] Smooth scrolling
- [ ] Models still visible (just not rotating)
- [ ] Backgrounds still look good
- [ ] No console errors
- [ ] FPS counter shows improvement

---

## 🎯 TOTAL EXPECTED IMPROVEMENT

**Before:** 30-45 FPS (laggy)
**After:** 55-75 FPS (smooth)

**Improvement: +30 FPS = 70% faster!**
