import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/disclaimer')({
  head: () => ({
    meta: [
      { title: 'Disclaimer & Liability Review | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Read the official liability and risk disclaimer for diving and boating excursions with Wild Turtle Scuba Club Ltd.' },
      { name: 'keywords', content: 'disclaimer, diving liability, scuba club legal, boating risks' },
      { property: 'og:title', content: 'Disclaimer & Liability Review | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Read the official liability and risk disclaimer for diving and boating excursions with Wild Turtle Scuba Club Ltd.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Disclaimer & Liability Review | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Read the official liability and risk disclaimer for diving and boating excursions with Wild Turtle Scuba Club Ltd.' }
    ]
  })
})
