import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { SERVICES_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';


export const Route = createFileRoute('/services')({
  component: Services,
})


function Services() {
  const { data: services, isLoading } = useSanityQuery(
    ['sanity', 'services_full'],
    SERVICES_QUERY
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Our Services {isLoading && "(Loading...)"}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From beginner lessons to advanced diving expeditions and exciting fishing trips,
            we offer comprehensive ocean experiences for everyone
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services && services.length > 0 ? services.map((service: any) => (
              <Card key={service._id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                {service.image ? (
                  <img
                    src={urlFor(service.image).width(800).url()}
                    alt={service.name}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-muted flex items-center justify-center">No Image</div>
                )}
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>

                  <div className="flex flex-wrap gap-4 pt-4 border-t mt-auto">
                    {service.price && (
                      <Badge variant="default" className="flex items-center gap-2">
                        <span>Price: ${service.price}</span>
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )) : (
              !isLoading && <p className="text-center col-span-1 lg:col-span-2">No services found in database.</p>
            )}
          </div>
        </div>
      </section>

      {/* Group Booking Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-accent border-accent-foreground/10">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="size-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="size-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-serif mb-4">Group Bookings & Private Charters</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Planning a group outing, corporate event, or special celebration? We offer
                customized packages for groups of all sizes.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Request a Quote
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to reserve your spot or learn more about our services
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
