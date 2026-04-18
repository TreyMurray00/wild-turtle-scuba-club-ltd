import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Review our no-tracking privacy policy confirming that no user data is collected.' },
      { name: 'keywords', content: 'privacy policy, no tracking, data use policy, scuba legal' },
      { property: 'og:title', content: 'Privacy Policy | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Review our no-tracking privacy policy confirming that no user data is collected.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Privacy Policy | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Review our no-tracking privacy policy confirming that no user data is collected.' }
    ]
  })
})
