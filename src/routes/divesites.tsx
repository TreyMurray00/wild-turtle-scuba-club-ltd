import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/divesites')({
  head: () => ({
    meta: [
      { title: 'Tobago Dive Sites near Castara | Wild Turtle Scuba Club' },
      { name: 'description', content: 'Discover Tobago dive sites from Castara with Wild Turtle Scuba Club. Find reef diving for every experience level on Tobago’s Caribbean coast.' },
      { name: 'keywords', content: 'Tobago dive sites, diving in Tobago, Castara diving, Tobago reef diving, scuba diving Trinidad and Tobago' },
      { property: 'og:title', content: 'Tobago Dive Sites near Castara | Wild Turtle Scuba Club' },
      { property: 'og:description', content: 'Discover Tobago dive sites from Castara with Wild Turtle Scuba Club. Find reef diving for every experience level on Tobago’s Caribbean coast.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Tobago Dive Sites near Castara | Wild Turtle Scuba Club' },
      { property: 'twitter:description', content: 'Discover Tobago dive sites from Castara with Wild Turtle Scuba Club.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/divesites' }]
  })
})
