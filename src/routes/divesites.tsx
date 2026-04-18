import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/divesites')({
  head: () => ({
    meta: [
      { title: 'Dive Sites | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Explore our amazing dive sites with various difficulty levels and depths.' },
      { name: 'keywords', content: 'dive locations, pristine reef, scuba dive spots, deep dives, local diving sites' },
      { property: 'og:title', content: 'Dive Sites | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Explore our amazing dive sites with various difficulty levels and depths.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Dive Sites | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Explore our amazing dive sites with various difficulty levels and depths.' }
    ]
  })
})
