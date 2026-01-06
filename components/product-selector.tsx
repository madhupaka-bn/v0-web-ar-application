"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface Product {
  id: string
  name: string
  model: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Astronaut",
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    description: "Detailed character model for interactive visualization",
  },
  {
    id: "2",
    name: "Shoe",
    model: "https://modelviewer.dev/shared-assets/models/shoe.glb",
    description: "Premium footwear design with realistic materials",
  },
  {
    id: "3",
    name: "Chair",
    model: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Chair/glTF/Chair.gltf",
    description: "Modern furniture piece for interior design",
  },
]

export default function ProductSelector() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0])

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    const viewer = document.querySelector("model-viewer") as any
    if (viewer) {
      viewer.src = product.model
      viewer.jumpCameraToGoal?.()
    }
  }

  return (
    <aside className="w-80 bg-card border border-border rounded-lg p-6 flex flex-col gap-6 max-h-full overflow-hidden">
      {/* Products Header */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Products</h2>
        <div className="space-y-2 overflow-y-auto max-h-96 pr-2">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductSelect(product)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-200 group ${
                selectedProduct.id === product.id
                  ? "bg-accent/10 border-accent"
                  : "border-border hover:bg-muted/50 hover:border-muted-foreground/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground truncate mt-1">{product.description}</p>
                </div>
                {selectedProduct.id === product.id && (
                  <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="pt-4 border-t border-border space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Features</h3>
        <div className="space-y-3">
          <Feature icon="🔄" label="Auto Rotation" />
          <Feature icon="🖱️" label="Interactive Controls" />
          <Feature icon="📱" label="Mobile Responsive" />
          <Feature icon="🎨" label="Realistic Lighting" />
        </div>
      </div>

      {/* AR Notice */}
      <div className="mt-auto pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">Tap the AR button to view products in your real environment</p>
      </div>
    </aside>
  )
}

function Feature({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-base">{icon}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
