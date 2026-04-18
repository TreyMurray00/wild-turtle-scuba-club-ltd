import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Home | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Join Wild Turtle Scuba Club for unforgettable underwater experiences. Scuba diving sessions, PADI certification, deep sea fishing, and more.' },
      { name: 'keywords', content: 'scuba diving, wild turtle scuba, PADI certification, deep sea fishing, diving club, ocean adventures' },
      { property: 'og:title', content: 'Home | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Join Wild Turtle Scuba Club for unforgettable underwater experiences. Scuba diving sessions, PADI certification, deep sea fishing, and more.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Home | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Join Wild Turtle Scuba Club for unforgettable underwater experiences. Scuba diving sessions, PADI certification, deep sea fishing, and more.' }
    ]
  })
})
