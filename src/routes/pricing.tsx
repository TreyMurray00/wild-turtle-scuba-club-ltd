import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing & Packages | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Transparent pricing for all our diving courses, gear rentals, and fishing services.' },
      { name: 'keywords', content: 'scuba diving prices, PADI dive course cost, diving gear rental rates, scuba packages' },
      { property: 'og:title', content: 'Pricing & Packages | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Transparent pricing for all our diving courses, gear rentals, and fishing services.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Pricing & Packages | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Transparent pricing for all our diving courses, gear rentals, and fishing services.' }
    ]
  })
})
