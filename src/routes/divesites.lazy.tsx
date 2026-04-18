import { createLazyFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Skeleton } from "../components/ui/skeleton";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { DIVESITES_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';
import { Waves, Navigation } from "lucide-react";

export const Route = createLazyFileRoute('/divesites')({
  component: DiveSites,
})

function DiveSites() {
  const { data: diveSites, isLoading } = useSanityQuery(
    ['sanity', 'divesites'],
    DIVESITES_QUERY
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center pt-16">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMG9jZWFufGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Coral reef"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent-foreground/70"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif text-primary-foreground mb-6">Explore Our Dive Sites</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover the beauty beneath the waves at our curated selection of pristine diving locations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {isLoading ? (
              [1, 2, 3].map(idx => (
                <Card key={idx} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row bg-card border-border/50">
                  <div className="w-full md:w-[40%] min-h-[300px] relative shrink-0">
                    <Skeleton className="w-full h-full rounded-none" />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col flex-1 w-full relative">
                    <Skeleton className="h-10 w-2/4 mb-6" />
                    <Skeleton className="h-4 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-3" />
                    <Skeleton className="h-4 w-4/5 mb-8" />
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                      <Skeleton className="h-8 w-32" />
                      <Skeleton className="h-8 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : diveSites && diveSites.length > 0 ? (
              diveSites.map((site: any) => (
                <Card key={site._id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row bg-card border-border/50 group">
                  <div className="w-full md:w-[40%] min-h-[300px] relative bg-muted shrink-0 group flex items-center justify-center border-r border-border/50">
                    {site.images && site.images.length > 0 ? (
                      <>
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                        <ImageWithFallback
                          src={urlFor(site.images[0]).width(800).url()}
                          alt={site.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </>
                    ) : (
                      <div className="text-muted-foreground/40 flex flex-col items-center gap-2">
                         <Waves className="size-12 opacity-50 mb-2"/>
                         <span className="text-sm font-medium">No image available</span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 md:p-8 flex flex-col flex-1 w-full relative">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-serif text-2xl md:text-3xl text-card-foreground">{site.name}</h3>
                    </div>
                    
                    {site.description && (
                      <p className="text-muted-foreground text-base mb-6 leading-relaxed whitespace-pre-wrap flex-1">
                        {site.description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-auto pt-4">
                       {site.maxDepth && (
                          <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">
                            <Navigation className="size-4 text-primary" />
                            <span className="font-medium">Max Depth: {site.maxDepth}m</span>
                          </div>
                       )}
                       {site.difficulty && (
                          <Badge className={`
                            ${site.difficulty === 'easy' ? 'bg-green-500/10 text-green-700 hover:bg-green-500/20' : ''}
                            ${site.difficulty === 'intermediate' ? 'bg-amber-500/10 text-amber-700 hover:bg-amber-500/20' : ''}
                            ${site.difficulty === 'advanced' ? 'bg-red-500/10 text-red-700 hover:bg-red-500/20' : ''}
                            capitalize border-none shadow-none px-3 py-1.5 text-xs font-medium
                          `}>
                            {site.difficulty}
                          </Badge>
                       )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-1 lg:col-span-2 text-center py-20 text-muted-foreground">
                <Waves className="size-16 mx-auto opacity-50 mb-4" />
                <h3 className="text-2xl font-serif mb-2 text-accent-foreground">No Dive Sites Found</h3>
                <p>Check back later as we add more amazing locations to explore!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
