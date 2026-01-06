"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { RotateCcw, Upload } from "lucide-react"

/**
 * ModelViewer Component
 * 
 * A responsive 3D model viewer with AR capabilities using Google's model-viewer library.
 * Supports WebXR, Scene Viewer (Android), and Quick Look (iOS) AR modes.
 * 
 * Features:
 * - Responsive design for mobile, tablet, and desktop
 * - Touch-optimized controls for mobile devices
 * - AR viewing on compatible devices
 * - Camera controls (rotate, zoom, pan)
 * - File upload support for .glb, .gltf, and .obj files
 */
export default function ModelViewer() {
  const [modelSrc, setModelSrc] = useState<string>("")
  const [fileName, setFileName] = useState<string>("No file loaded")
  const [isARSupported, setIsARSupported] = useState<boolean>(false)
  const viewerRef = useRef<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  /**
   * Initialize model viewer and check AR capability
   * Updates framing when model changes and detects AR support
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      const viewer = viewerRef.current
      if (viewer) {
        console.log("[v0] Model viewer initialized")
        if (viewer.updateFraming) {
          viewer.updateFraming()
        }
        // Check if AR is supported on this device
        // WebXR, Scene Viewer (Android), or Quick Look (iOS)
        if (viewer.canActivateAR) {
          setIsARSupported(true)
          console.log("[v0] AR is supported on this device")
        }
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [modelSrc])

  /**
   * Activate AR mode
   * Triggers AR viewing experience using available AR mode (WebXR, Scene Viewer, or Quick Look)
   */
  const handleARClick = () => {
    const viewer = viewerRef.current
    if (viewer) {
      console.log("[v0] Activating AR")
      try {
        viewer.activateAR()
      } catch (error) {
        console.error("[v0] AR activation failed:", error)
        alert("AR is not available on this device. Please try on a mobile device with AR support.")
      }
    }
  }

  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setModelSrc(url)
      setFileName(file.name)
      console.log("[v0] Model loaded:", file.name)
    }
  }

  /**
   * Reset camera to default position
   * Returns the camera to the initial framing of the model
   */
  const handleResetView = () => {
    const viewer = viewerRef.current
    if (viewer) {
      console.log("[v0] Resetting camera")
      viewer.resetCamera()
    }
  }

  return (
    <div className="w-full h-full flex flex-col relative bg-white">
      {/* Main Viewer - Fully responsive container */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {modelSrc ? (
          <model-viewer
            ref={viewerRef}
            src={modelSrc}
            alt="3D Model"
            auto-rotate
            camera-controls
            touch-action="pan-y"
            disable-zoom={false}
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            exposure="1"
            shadow-intensity="1"
            camera-orbit="0deg 75deg 105%"
            min-camera-orbit="auto auto 50%"
            max-camera-orbit="auto auto 200%"
            interpolation-decay="200"
            style={
              {
                width: "100%",
                height: "100%",
              } as React.CSSProperties
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-gray-600 text-base sm:text-lg mb-4">No 3D model loaded</p>
              <p className="text-gray-400 text-sm">Click Upload to load a .glb, .gltf, or .obj file</p>
            </div>
          </div>
        )}
      </div>

      {/* Responsive Controls - Adapts layout for different screen sizes */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-end gap-3">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* Reset View Button */}
          <button
            onClick={handleResetView}
            disabled={!modelSrc}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2.5 sm:p-3 rounded-lg transition-all shadow-lg flex-shrink-0"
            title="Reset View"
            aria-label="Reset camera view"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 sm:p-3 rounded-lg transition-all shadow-lg flex items-center gap-2 flex-shrink-0"
            title="Upload 3D Model"
            aria-label="Upload 3D model file"
          >
            <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Upload</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".glb,.gltf,.obj"
            onChange={handleModelUpload}
            className="hidden"
            aria-label="File input for 3D models"
          />

          {/* File name display - responsive text sizing */}
          <div className="text-xs sm:text-sm text-gray-700 bg-white/90 backdrop-blur px-2 sm:px-3 py-2 rounded-lg flex items-center flex-1 sm:flex-initial min-w-0">
            <span className="truncate">{fileName}</span>
          </div>
        </div>

        {/* AR Button - Only shown when model is loaded and AR is supported */}
        {modelSrc && (
          <button
            onClick={handleARClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all shadow-lg font-medium text-sm sm:text-base whitespace-nowrap"
            title={isARSupported ? "View in AR" : "AR not supported on this device"}
            aria-label="Open augmented reality viewer"
          >
            {isARSupported ? "View in AR" : "Open AR"}
          </button>
        )}
      </div>

      {/* Instructions - responsive positioning and text sizing */}
      {modelSrc && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs text-gray-700 bg-white/90 backdrop-blur px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
          <span className="hidden sm:inline">Drag to rotate • Scroll to zoom</span>
          <span className="sm:hidden">Touch to interact</span>
        </div>
      )}
    </div>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any
    }
  }
}
