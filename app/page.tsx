import Header from "@/components/header"
import ModelViewer from "@/components/model-viewer"

/**
 * Home Page
 * 
 * Main page for the AR Product Viewer application
 * Features a responsive layout with header and 3D model viewer with AR capabilities
 */
export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <ModelViewer />
      </div>
    </main>
  )
}
