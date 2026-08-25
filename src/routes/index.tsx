import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Diving in Tobago & PADI Courses | Wild Turtle Scuba Club' },
      { name: 'description', content: 'Dive Tobago with Wild Turtle Scuba Club in Castara. Explore reef dives and PADI certification courses from Depot Road, Tobago, Trinidad and Tobago.' },
      { name: 'keywords', content: 'diving in Tobago, scuba diving Tobago, PADI certification courses in Tobago, PADI certifications Trinidad and Tobago, Castara dive centre, Depot Road Castara' },
      { property: 'og:title', content: 'Diving in Tobago & PADI Courses | Wild Turtle Scuba Club' },
      { property: 'og:description', content: 'Dive Tobago with Wild Turtle Scuba Club in Castara. Explore reef dives and PADI certification courses from Depot Road, Tobago, Trinidad and Tobago.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Diving in Tobago & PADI Courses | Wild Turtle Scuba Club' },
      { property: 'twitter:description', content: 'Dive Tobago with Wild Turtle Scuba Club in Castara. Explore reef dives and PADI certification courses from Depot Road, Tobago, Trinidad and Tobago.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/' }]
  })
})
