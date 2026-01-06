/**
 * Header Component
 * 
 * Responsive header for the AR Showcase application
 * Displays app title and AR status indicator
 */
export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"></div>
          <h1 className="text-base sm:text-xl font-semibold tracking-tight">AR Showcase</h1>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500/60 rounded-full"></span>
            <span className="hidden sm:inline">AR Ready</span>
            <span className="sm:hidden">AR</span>
          </span>
        </div>
      </div>
    </header>
  )
}
