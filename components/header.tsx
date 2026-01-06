export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <h1 className="text-xl font-semibold tracking-tight">AR Showcase</h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500/60 rounded-full"></span>
            AR Ready
          </span>
        </div>
      </div>
    </header>
  )
}
