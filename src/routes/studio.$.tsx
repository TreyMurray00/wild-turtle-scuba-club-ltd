import { createFileRoute } from '@tanstack/react-router'
import { Studio } from 'sanity'
import config from '../sanity/sanity.config'

export const Route = createFileRoute('/studio/$')({
  component: StudioPage,
})

function StudioPage() {
  return (
    <div className="h-screen max-h-[100dvh] overscroll-none overflow-auto">
      <style suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: `
          body { margin: 0; padding: 0; overflow: hidden; }
        `
      }} />
      <Studio config={config} />
    </div>
  )
}
