## **See Changes (Beyond Just Refresh):**

## Refresh Server

# Stop the current server

pkill -f "node server.js"

# Start it again

node server.js

### **1. Hard Refresh (Clear Cache)**

- Chrome/Edge

  :

  ```
  Ctrl+Shift+R
  ```

  (Windows) or

  ```
  Cmd+Shift+R
  ```

  (Mac)

- Firefox

  :

  ```
  Ctrl+F5
  ```

  (Windows) or

  ```
  Cmd+Shift+R
  ```

  (Mac)

- Safari

  :

  ```
  Cmd+Option+R
  ```

  (Mac)

### **2. Clear Browser Cache**

- Open Developer Tools (

  ```
  F12
  ```

  )

- Right-click the refresh button → "Empty Cache and Hard Reload"

### **3. Incognito/Private Mode**

- Open a new incognito/private window

- Navigate to

  ```
  http://localhost:3000
  ```

## **🎯 Available Routes to Test:**

### **Original Design** (Dynamic Scroll Intro)

- URL

  :

  ```
  http://localhost:3000/original
  ```

- **Features**: Scroll-driven text reveals, 2-3 sentences at a time

### **Design 1** (Typewriter Entry)

- URL

  :

  ```
  http://localhost:3000/design1/intro.html
  ```

- **Features**: Character-by-character typing animation

### **Design 2** (Parallax Entry)

- URL

  :

  ```
  http://localhost:3000/design2/intro.html
  ```

- **Features**: Multi-layer scrolling with depth effects

### **Design 3** (Cinematic Entry)

- URL

  :

  ```
  http://localhost:3000/design3/intro.html
  ```

- **Features**: Dramatic scene transitions with 3D effects

## **🚀 Quick Test Steps:**

1. **Hard refresh** your current page

2. Try the original

   :

   ```
   http://localhost:3000/original
   ```

3. Test the intros

   : Visit each

   /intro.html

   page above

4. **Click through**: Each intro should transition to the main site
