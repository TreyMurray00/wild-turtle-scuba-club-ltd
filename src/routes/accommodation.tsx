import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accommodation')({
  head: () => ({
    meta: [
      { title: 'Castara Tobago Accommodation for Divers | Wild Turtle Scuba Club' },
      { name: 'description', content: 'Find recommended accommodation in Castara, Tobago near Wild Turtle Scuba Club—guest houses and places to stay for your Tobago diving trip.' },
      { name: 'keywords', content: 'Castara Tobago accommodation, where to stay in Castara, Tobago diving accommodation, guest houses Castara, Tobago dive trip' },
      { property: 'og:title', content: 'Castara Tobago Accommodation for Divers | Wild Turtle Scuba Club' },
      { property: 'og:description', content: 'Find recommended accommodation in Castara, Tobago near Wild Turtle Scuba Club—guest houses and places to stay for your Tobago diving trip.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Castara Tobago Accommodation for Divers | Wild Turtle Scuba Club' },
      { property: 'twitter:description', content: 'Find recommended accommodation in Castara, Tobago near Wild Turtle Scuba Club.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/accommodation' }]
  })
})
