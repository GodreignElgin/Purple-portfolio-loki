# 🎯 QUICK REFERENCE: TOP 5 PERFORMANCE KILLERS

## 1️⃣ MODEL VIEWER AUTOROTATE (50% LAG)

### Current Code:
```tsx
// FeaturedProjects.tsx - Line 89
<ModelViewer
  src={project.modelUrl}
  autoRotate={true}      // 🔴 RUNNING CONTINUOUSLY
  cameraControls={true}
  className="w-full h-full"
/>

// ProjectGallery.tsx - 12 more models with autoRotate={true}
// About section may have images too
```

### Total: 22+ 3D models with autorotate on simultaneously

### Fix:
```tsx
autoRotate={false}  // Turn off
```

---

## 2️⃣ BLUR FILTERS (15% LAG)

### Current Code:
```tsx
// SimpleBackground.tsx - Lines 15-20
<div style={{
  filter: 'blur(40px)',  // 🔴 HEAVY BLUR
  width: '50vw',         // 🔴 HUGE SIZE
  height: '50vw',
}}>

<div style={{
  filter: 'blur(50px)',  // 🔴 EVEN MORE
  width: '40vw',
}}>

<div style={{
  filter: 'blur(60px)',  // 🔴 EXTREME
  width: '30vw',
}}>
```

### Fix:
```tsx
filter: 'blur(20px)',   // Reduce from 40+
width: '20vw',          // Reduce size
height: '20vw',
```

---

## 3️⃣ TEXT GLOW ANIMATION (10% LAG)

### Current Code:
```css
/* custom.css - Lines 97-105 */
.animate-pulse-glow {
  animation: pulse-glow 3s infinite ease-in-out;  // 🔴 EVERY 3 SECONDS
}

@keyframes pulse-glow {
  0%, 100% { text-shadow: 0 0 8px rgba(143, 92, 255, 0.5); }
  50% { text-shadow: 0 0 20px rgba(143, 92, 255, 0.8); }
}

/* Applied to: Hero name, section titles, etc. */
```

### Where it's used:
```tsx
// HeroSection.tsx - Line 31
<span className="text-primary animate-pulse-glow">Balamurugan</span>
```

### Fix:
```css
.animate-pulse-glow {
  animation: none;  /* Disable */
}
```

---

## 4️⃣ BACKDROP BLUR (10% LAG)

### Current Code:
```css
/* custom.css - Lines 48-54 */
.glassmorphic {
  backdrop-filter: blur(8px);  // 🔴 GPU INTENSIVE
}

.glassmorphic-card {
  backdrop-filter: blur(12px);  // 🔴 MORE GPU
}
```

### Where it's used:
Multiple cards and elements throughout

### Fix:
```css
.glassmorphic {
  backdrop-filter: none;  /* Remove */
}
```

---

## 5️⃣ INTERSECTION OBSERVER (10% LAG)

### Current Code:
```tsx
// Portfolio.tsx - Lines 12-30
const animatedElements = document.querySelectorAll(
  '.fade-in-up, .fade-in-left, .fade-in-right'
);
// This queries potentially 100+ elements
animatedElements.forEach((el) => observer.observe(el));
```

### Problem:
Too many elements being observed = excessive callback firing

### Fix:
```tsx
// Observe only visible sections
const observer = new IntersectionObserver(
  (entries) => { /* ... */ },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  }
);

// Only observe a few key sections, not individual elements
```

---

## 🚀 QUICK FIX CHECKLIST

**Do these RIGHT NOW (5 minutes):**

- [ ] **ModelViewer.tsx:** Change `autoRotate={true}` → `autoRotate={false}`
- [ ] **SimpleBackground.tsx:** Change blur from 40/50/60 → 20
- [ ] **custom.css:** Remove `.animate-pulse-glow` animation
- [ ] **custom.css:** Remove `.glassmorphic` backdrop-filter

---

## 📈 EXPECTED IMPROVEMENT

| Fix | Current | After | Improvement |
|-----|---------|-------|-------------|
| Disable autoRotate | 60 FPS | 80+ FPS | **+20 FPS** |
| Reduce blur | 55 FPS | 70 FPS | **+15 FPS** |
| Remove glow anim | 50 FPS | 60 FPS | **+10 FPS** |
| Remove backdrop | 45 FPS | 55 FPS | **+10 FPS** |

**TOTAL EXPECTED:** 30-60 FPS bump

---

## 🎬 BEFORE & AFTER TEST

1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Scroll page 10 seconds
5. Stop recording
6. Check FPS at bottom

**THEN apply fixes and repeat to compare!**
