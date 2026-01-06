"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { RotateCcw, Upload } from "lucide-react"

export default function ModelViewer() {
  const [modelSrc, setModelSrc] = useState<string>("")
  const [fileName, setFileName] = useState<string>("No file loaded")
  const viewerRef = useRef<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const viewer = viewerRef.current
      if (viewer) {
        console.log("[v0] Model viewer initialized")
        if (viewer.updateFraming) {
          viewer.updateFraming()
        }
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [modelSrc])

  const handleARClick = () => {
    const viewer = viewerRef.current
    if (viewer) {
      console.log("[v0] Activating AR")
      viewer.activateAR()
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

  const handleResetView = () => {
    const viewer = viewerRef.current
    if (viewer) {
      console.log("[v0] Resetting camera")
      viewer.resetCamera()
    }
  }

  return (
    <div className="w-full h-full flex flex-col relative bg-white">
      {/* Main Viewer */}
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
            environment-image="neutral"
            exposure="1"
            shadow-intensity="1"
            style={
              {
                width: "100%",
                height: "100%",
              } as React.CSSProperties
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 text-lg mb-4">No 3D model loaded</p>
              <p className="text-gray-400">Click Upload to load a .glb, .gltf, or .obj file</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="flex gap-3">
          {/* Reset View Button */}
          <button
            onClick={handleResetView}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all shadow-lg"
            title="Reset View"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all shadow-lg flex items-center gap-2"
            title="Upload 3D Model"
          >
            <Upload className="w-5 h-5" />
            <span className="text-sm font-medium">Upload</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".glb,.gltf,.obj"
            onChange={handleModelUpload}
            className="hidden"
          />

          {/* File name display */}
          <div className="text-xs text-gray-700 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">{fileName}</div>
        </div>

        {/* AR Button */}
        {modelSrc && (
          <button
            onClick={handleARClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg font-medium"
            title="View in AR"
          >
            Open AR
          </button>
        )}
      </div>

      {/* Instructions */}
      {modelSrc && (
        <div className="absolute top-4 right-4 text-xs text-gray-700 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
          Drag to rotate • Scroll to zoom
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
