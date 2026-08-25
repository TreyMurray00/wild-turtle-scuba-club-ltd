import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Tobago Scuba Diving Gallery | Wild Turtle Scuba Club' },
      { name: 'description', content: 'See scuba diving, reef life and ocean adventures with Wild Turtle Scuba Club in Castara, Tobago, Trinidad and Tobago.' },
      { name: 'keywords', content: 'Tobago scuba diving photos, Castara diving gallery, Tobago reef diving, Wild Turtle Scuba Club' },
      { property: 'og:title', content: 'Tobago Scuba Diving Gallery | Wild Turtle Scuba Club' },
      { property: 'og:description', content: 'See scuba diving, reef life and ocean adventures with Wild Turtle Scuba Club in Castara, Tobago.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Tobago Scuba Diving Gallery | Wild Turtle Scuba Club' },
      { property: 'twitter:description', content: 'See scuba diving, reef life and ocean adventures with Wild Turtle Scuba Club in Castara, Tobago.' },
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/gallery' }],
  }),
  component: () => null,
})
