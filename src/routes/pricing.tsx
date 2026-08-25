import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'PADI Courses & Scuba Diving Prices in Tobago | Wild Turtle' },
      { name: 'description', content: 'View PADI certification course, scuba diving and equipment rental prices in Castara, Tobago. Book with Wild Turtle Scuba Club, Depot Road.' },
      { name: 'keywords', content: 'PADI certification courses in Tobago, PADI courses Tobago prices, scuba diving Tobago prices, diving gear rental Tobago, Castara diving' },
      { property: 'og:title', content: 'PADI Courses & Scuba Diving Prices in Tobago | Wild Turtle' },
      { property: 'og:description', content: 'View PADI certification course, scuba diving and equipment rental prices in Castara, Tobago. Book with Wild Turtle Scuba Club, Depot Road.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'PADI Courses & Scuba Diving Prices in Tobago | Wild Turtle' },
      { property: 'twitter:description', content: 'View PADI certification course, scuba diving and equipment rental prices in Castara, Tobago.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/pricing' }]
  })
})
