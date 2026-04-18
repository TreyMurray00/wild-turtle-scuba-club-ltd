import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' },
      { name: 'keywords', content: 'scuba instructor, diving philosophy, PADI master diver, scuba experience, wild turtle instructors' },
      { property: 'og:title', content: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' }
    ]
  })
})
