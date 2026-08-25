import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'PADI Dive Instructors in Tobago | Wild Turtle Scuba Club' },
      { name: 'description', content: 'Meet the PADI-certified dive professionals behind Wild Turtle Scuba Club in Castara, Tobago, Trinidad and Tobago.' },
      { name: 'keywords', content: 'PADI instructors Tobago, PADI certifications Trinidad and Tobago, Castara scuba instructor, Tobago dive centre' },
      { property: 'og:title', content: 'PADI Dive Instructors in Tobago | Wild Turtle Scuba Club' },
      { property: 'og:description', content: 'Meet the PADI-certified dive professionals behind Wild Turtle Scuba Club in Castara, Tobago, Trinidad and Tobago.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'PADI Dive Instructors in Tobago | Wild Turtle Scuba Club' },
      { property: 'twitter:description', content: 'Meet the PADI-certified dive professionals behind Wild Turtle Scuba Club in Castara, Tobago.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/about' }]
  })
})
