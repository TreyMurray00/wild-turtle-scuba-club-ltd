import { createLazyFileRoute } from '@tanstack/react-router'
import { ExternalLink, MapPin, Users } from 'lucide-react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Skeleton } from '../components/ui/skeleton'
import { PageBreadcrumbs } from '../components/PageBreadcrumbs'
import { BookingCTA } from '../components/BookingCTA'
import { useSanityQuery } from '../hooks/useSanityQuery'
import { ACCOMMODATION_QUERY } from '../lib/sanity-queries'
import { urlFor } from '../lib/sanity'

export const Route = createLazyFileRoute('/accommodation')({ component: Accommodation })

function Accommodation() {
  const { data: accommodationsData, isLoading } = useSanityQuery(['sanity', 'accommodation'], ACCOMMODATION_QUERY)
  const accommodations = accommodationsData ?? []

  return (
    <div>
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumbs current="Accommodation" light />
          <div className="max-w-3xl mt-10">
            <p className="text-sm uppercase tracking-[0.18em] font-semibold text-white/70 mb-3">Stay close to the water</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-5 leading-tight">Where to Stay for Your Tobago Dive Holiday</h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">Independent hotels, apartments and guest houses convenient for diving with our Castara team.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="size-14 rounded-2xl bg-accent flex items-center justify-center"><MapPin className="size-7 text-primary" /></div>
          <div><h2 className="text-2xl font-serif mb-2">Accommodation near our Castara dive centre</h2><p className="text-muted-foreground leading-relaxed">Use these recommendations as a starting point. Tell us your dates, budget and preferred comfort level and we can help you coordinate your stay with your diving schedule.</p></div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10"><p className="text-sm uppercase tracking-[0.18em] font-semibold text-primary mb-3">Compare your options</p><h2 className="text-4xl md:text-5xl font-serif">Recommended Places to Stay</h2></div>
          {isLoading ? <div className="grid lg:grid-cols-2 gap-6">{[1, 2, 3, 4].map((item) => <Skeleton key={item} className="h-80 rounded-2xl" />)}</div> : accommodations.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {accommodations.map((accommodation: any, index: number) => (
                <Card key={accommodation._id || index} className="group overflow-hidden rounded-2xl border-border/70 bg-card hover:shadow-xl transition-all md:flex">
                  <div className="relative h-56 md:h-auto md:w-[42%] shrink-0 bg-muted overflow-hidden">
                    {accommodation.image ? <ImageWithFallback src={urlFor(accommodation.image).width(800).url()} alt={`${accommodation.name} accommodation in Castara, Tobago`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="absolute inset-0 flex items-center justify-center"><MapPin className="size-12 text-primary/30" /></div>}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">{[accommodation.accommodationType, accommodation.priceRange, accommodation.distance].filter(Boolean).map((tag: string) => <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{tag}</span>)}</div>
                    <h3 className="font-serif text-2xl mb-3">{accommodation.name}</h3>
                    {accommodation.description && <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-5">{accommodation.description}</p>}
                    {accommodation.bestFor && <p className="flex items-center gap-2 text-sm text-muted-foreground mb-5"><Users className="size-4 text-primary" /><strong className="text-foreground">Best for:</strong> {accommodation.bestFor}</p>}
                    {accommodation.link && <Button asChild variant="outline" className="mt-auto rounded-full self-start border-primary text-primary hover:bg-primary hover:text-white"><a href={accommodation.link} target="_blank" rel="noreferrer">View {accommodation.name} <ExternalLink className="ml-2 size-4" /></a></Button>}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : <div className="rounded-2xl border bg-card p-10 text-center"><h3 className="font-serif text-2xl mb-3">Recommendations coming soon</h3><p className="text-muted-foreground">Contact our team and we’ll help you explore places to stay near the dive centre.</p></div>}
        </div>
      </section>

      <section className="py-10 bg-card border-y"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">Please note:</strong> These accommodations are independently owned and operated. Wild Turtle Scuba Club provides recommendations and planning assistance but does not control third-party pricing, availability or services.</div></section>

      <BookingCTA title="Plan Your Stay and Diving Together" description="Share your dates, accommodation preferences and diving goals. We’ll help you build a practical Tobago itinerary." />
    </div>
  )
}
