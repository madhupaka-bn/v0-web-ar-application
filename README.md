# Web AR application

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/madhukumar-pakas-projects/v0-web-ar-application)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/usaLoYgheTX)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Features

### 🎯 3D Model Viewer
- Upload and view 3D models (.glb, .gltf, .obj formats)
- Interactive camera controls (rotate, zoom, pan)
- Auto-rotation mode
- Realistic lighting and shadows

### 📱 Augmented Reality (AR)
- **iOS Support**: Uses ARKit with Quick Look for iOS 12+
- **Android Support**: Uses ARCore with Scene Viewer for Android 7+
- **WebXR**: Progressive web AR for compatible browsers
- Real-world model placement with automatic scaling
- Floor placement for realistic AR positioning
- **Enhanced Surface Detection**: 
  - Hit-testing API for precise surface detection
  - Horizontal and vertical plane detection
  - Visual feedback during surface scanning
  - Optimized for various lighting conditions

### 🎨 Responsive Design
- **Mobile-First**: Optimized for touch interactions
- **Safe Area Support**: Respects device notches and system UI
- **Touch Targets**: Minimum 44px buttons following accessibility guidelines
- **Adaptive Layout**: Automatically adjusts for portrait and landscape orientations
- **Device-Specific Optimizations**: 
  - Extra small phones (iPhone SE and similar)
  - Standard phones (iPhone 12/13/14 and similar)
  - Tablets and larger devices
- **Touch Optimization**: Fast-tap response with touch-action manipulation
- **Viewport Optimization**: Enhanced viewport configuration for AR compatibility

## How to Use AR

1. **Upload a 3D Model**: Click the "Upload" button and select a .glb, .gltf, or .obj file
2. **View in AR**: Once uploaded, click the "View in AR" button
3. **On Mobile Devices**:
   - **iOS**: Safari will open Quick Look for AR viewing
   - **Android**: Chrome/Samsung Internet will open Scene Viewer
4. **Position the Model**: Point your camera at a flat surface and tap to place the model
5. **Interact**: Move around to view the model from different angles

### AR Requirements

- **iOS**: iOS 12+ with Safari browser and ARKit-enabled device
- **Android**: Android 7+ with Chrome or Samsung Internet and ARCore support
- **Camera Permissions**: Grant camera access when prompted
- **Good Lighting**: AR works best in well-lit environments
- **Flat Surface**: For accurate model placement

## Deployment

Your project is live at:

**[https://vercel.com/madhukumar-pakas-projects/v0-web-ar-application](https://vercel.com/madhukumar-pakas-projects/v0-web-ar-application)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/usaLoYgheTX](https://v0.app/chat/usaLoYgheTX)**

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technical Details

### Technologies Used
- **Next.js 16**: React framework with Turbopack
- **Google Model Viewer**: 3D model rendering with AR support
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type-safe development

### Browser Compatibility
- Modern browsers with WebGL support
- iOS Safari 12+ for AR
- Chrome/Samsung Internet on Android for AR
- Progressive enhancement for unsupported browsers

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
