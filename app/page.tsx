import Header from "@/components/header"
import ModelViewer from "@/components/model-viewer"

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
