import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'PADI Certification & Tobago Dive Packages | Wild Turtle' },
      { name: 'description', content: 'Explore PADI certification courses in Trinidad and Tobago, guided Tobago dives, equipment rental and tailored dive holiday packages.' },
      { name: 'keywords', content: 'PADI certification courses in Trinidad and Tobago, PADI courses Tobago, Tobago dive packages, scuba diving Tobago prices, dive holiday Tobago, diving gear rental Tobago' },
      { property: 'og:title', content: 'PADI Certification & Tobago Dive Packages | Wild Turtle' },
      { property: 'og:description', content: 'Explore PADI courses, guided scuba diving, equipment rental and tailored dive holiday packages in Tobago.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'PADI Certification & Tobago Dive Packages | Wild Turtle' },
      { property: 'twitter:description', content: 'Explore PADI courses, guided scuba diving and tailored dive holiday packages in Tobago.' }
    ],
    links: [{ rel: 'canonical', href: 'https://www.new.divingintobago.com/pricing' }]
  })
})
