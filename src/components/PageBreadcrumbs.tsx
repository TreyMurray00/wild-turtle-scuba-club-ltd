import { ChevronRight, Home } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function PageBreadcrumbs({ current, light = false }: { current: string; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${light ? 'text-white/75' : 'text-muted-foreground'}`}>
      <Link to="/" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
        <Home className="size-4" /> Home
      </Link>
      <ChevronRight className="size-4 opacity-60" />
      <span aria-current="page" className={light ? 'text-white' : 'text-foreground'}>{current}</span>
    </nav>
  )
}
