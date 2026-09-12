import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Scuba Diving in Tobago & PADI Courses | Wild Turtle' },
      { name: 'description', content: 'Plan a Tobago dive holiday with reef diving, guided scuba trips and PADI certification courses in Castara, Trinidad and Tobago.' },
      { name: 'keywords', content: 'dive holiday Tobago, scuba diving in Tobago, diving in Tobago, scuba diving in Trinidad and Tobago, PADI certification courses in Trinidad and Tobago, Castara dive centre' },
      { property: 'og:title', content: 'Scuba Diving in Tobago & PADI Courses | Wild Turtle' },
      { property: 'og:description', content: 'Plan a Tobago dive holiday with guided reef dives and PADI certification courses in Castara, Trinidad and Tobago.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Scuba Diving in Tobago & PADI Courses | Wild Turtle' },
      { property: 'twitter:description', content: 'Plan a Tobago dive holiday with guided reef dives and PADI certification courses in Castara.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/' }]
  })
})
