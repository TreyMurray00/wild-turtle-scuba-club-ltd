import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accommodation')({
  head: () => ({
    meta: [
      { title: 'Recommended Accommodations | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Explore our hand-picked recommendations for comfortable lodging near our dive center. From resorts to guest houses.' },
      { name: 'keywords', content: 'dive accommodations, places to stay, scuba resort, lodging near dive shop, guest houses' },
      { property: 'og:title', content: 'Recommended Accommodations | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Explore our hand-picked recommendations for comfortable lodging near our dive center. From resorts to guest houses.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Recommended Accommodations | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Explore our hand-picked recommendations for comfortable lodging near our dive center. From resorts to guest houses.' }
    ]
  })
})
