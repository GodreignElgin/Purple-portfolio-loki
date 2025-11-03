# 🔬 Component Performance Showcase

A dedicated testing/debugging page to isolate and analyze each background animation component separately.

## 🎯 What It Shows

The showcase displays **5 different component configurations** individually:

### 1. **🎯 Particle Field (800 particles)**
   - **File:** `ParticleField.jsx`
   - **Tech:** Three.js InstancedMesh + 800 spheres
   - **What it does:** Floating animated particles with sine/cosine motion
   - **Why it lags:** Creating 800 Matrix4 transforms every frame is expensive
   - **GPU Impact:** HIGH

### 2. **🔷 AnimatedBackground.jsx (3D Canvas)**
   - **File:** `AnimatedBackground.jsx`
   - **Tech:** Three.js Canvas + 2 rotating boxes + ParticleField
   - **What it does:** 3D rendered scene with animated cubes
   - **Why it lags:** WebGL context + multiple draw calls
   - **GPU Impact:** HIGH

### 3. **🎨 SimpleBackground (CSS)**
   - **File:** `SimpleBackground.tsx`
   - **Tech:** Pure CSS gradients, circles, grid patterns
   - **What it does:** Static background with blur effects
   - **Why it's good:** No JavaScript animation, GPU-accelerated
   - **GPU Impact:** LOW

### 4. **💫 Hero3DBackground (3D Spheres)**
   - **File:** `Hero3DBackground.jsx`
   - **Tech:** Three.js Canvas + MeshDistortMaterial + Environment preset
   - **What it does:** Distorted glass spheres + environment mapping
   - **Why it lags:** Most complex material + Environment loading
   - **GPU Impact:** VERY HIGH

### 5. **⚡ Combined (Current Setup)**
   - **What it does:** SimpleBackground + Particle Canvas overlaid
   - **Why it lags:** Running CSS animations + WebGL at the same time
   - **GPU Impact:** VERY HIGH

---

## 📊 How to Use

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to showcase:**
   - Open: `http://localhost:5173/showcase`

3. **Test each component:**
   - Click buttons at the top to switch between components
   - Watch the **FPS counter** (top-right corner)
   - Note which ones cause frame drops
   - Open **DevTools (F12)** → Performance tab to profile

4. **What to measure:**
   - FPS consistency (should be 60fps)
   - GPU memory usage
   - Frame rendering time
   - CPU usage

---

## 🔍 Performance Tips

| Component | Issue | Solution |
|-----------|-------|----------|
| Particle Field | 800 particles = too many | Reduce to 150-200 |
| ParticleField geometry | `sphereGeometry(size, 8, 8)` too detailed | Use `(size, 4, 4)` |
| Hero3D + Environment | Environment preset is heavy | Remove or use simpler preset |
| Combined layers | CSS + WebGL running together | Choose ONE system |
| Scroll parallax | `handleScroll` called every pixel | Add throttle/debounce |

---

## 📝 What You'll Discover

By switching between components, you'll identify:
- ✅ Which animations are **actually** lagging
- ✅ If the CSS background alone is fast enough
- ✅ If ParticleField is the culprit
- ✅ How much Hero3D really impacts performance
- ✅ Whether combining systems causes issues

---

## 🚀 Next Steps

Based on what you find:
1. **If CSS alone is fast:** Remove all Three.js backgrounds
2. **If ParticleField lags:** Reduce particle count
3. **If Hero3D lags most:** Replace with simpler background
4. **If combined lags:** Choose CSS OR 3D, not both

This will help you make an **informed decision** on what to optimize!
