import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link as RouterLink } from "@tanstack/react-router";
import { ExternalLink, Home, Map } from "lucide-react";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { ACCOMMODATION_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';
import { Skeleton } from '../components/ui/skeleton';

export const Route = createFileRoute('/accommodation')({
  component: Accommodation,
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

function Accommodation() {
  const { data: accommodationsData, isLoading } = useSanityQuery(
    ['sanity', 'accommodation'],
    ACCOMMODATION_QUERY
  );

  const accommodationsList = accommodationsData && accommodationsData.length > 0
    ? accommodationsData.map((acc: any, idx: number) => ({
        id: acc._id || idx,
        name: acc.name,
        image: acc.image ? urlFor(acc.image).width(800).url() : "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBiZWFjaHxlbnwxfHx8fDE3NzU0ODc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: acc.description,
        link: acc.link
      }))
    : [];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Home className="size-16 mx-auto mb-6 text-primary-foreground/80" />
          <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-wide">Places to Stay {isLoading && '(Loading...)'}</h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-primary-foreground/90">
            Hand-picked recommendations for comfortable lodging near our dive center.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We've carefully researched local hotels, resorts, and guest houses to offer our visiting divers perfectly located accommodation options. Whether you're looking for budget-friendly lodging or luxury amenities, you can find our recommended spots below to suit your preference.
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {[1, 2, 3, 4].map(idx => (
                 <Skeleton key={idx} className="h-[500px] w-full rounded-2xl" />
               ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {accommodationsList.map((accommodation: any) => (
                <Card key={accommodation.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-card flex flex-col h-full rounded-2xl">
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <ImageWithFallback
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="font-serif text-3xl mb-4 text-card-foreground">
                      {accommodation.name}
                    </h3>

                    {accommodation.description && (
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-1 whitespace-pre-wrap">
                        {accommodation.description}
                      </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-border/60">
                      <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
                        <a href={accommodation.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 justify-center">
                          <span>Visit Website</span>
                          <ExternalLink className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Help Action Box */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background shadow-xl rounded-3xl overflow-hidden border-primary/20 relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Map className="w-64 h-64 text-primary" />
            </div>
            <CardContent className="p-10 md:p-16 text-center relative z-10">
              <h2 className="text-4xl font-serif mb-6 text-foreground">Need Help Deciding?</h2>
              <p className="text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our team can help you find the perfect place to stay. Let us know your ideas, comfort range, and price, and we will be extremely happy to help personalize your stay.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                <a href="#footer">
                  Contact Us for Assistance
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
