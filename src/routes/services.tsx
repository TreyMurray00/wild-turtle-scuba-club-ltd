import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Check, Calendar, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";


export const Route = createFileRoute('/services')({
  component: Services,
})


function Services() {
  const services = [
    {
      id: 1,
      title: "Diving Sessions",
      image: "https://images.unsplash.com/photo-1602144586093-06c14ac4fe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNzc1NDY3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Explore stunning coral reefs and marine life with our expert guides",
      features: [
        "All equipment included",
        "Small group sizes (max 6 divers)",
        "Multiple dive sites available",
        "Safety briefing and support",
      ],
      duration: "3-4 hours",
      price: "Starting at $120",
    },
    {
      id: 2,
      title: "Scuba Certification Courses",
      image: "https://images.unsplash.com/photo-1563967983-ad006a6fd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGluc3RydWN0b3IlMjBsZXNzb258ZW58MXx8fHwxNzc1NDg3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Get PADI certified with our comprehensive training programs",
      features: [
        "PADI certified instructors",
        "Theory and practical training",
        "Pool and open water sessions",
        "Certification materials included",
      ],
      duration: "3-4 days",
      price: "Starting at $450",
    },
    {
      id: 3,
      title: "Deep Sea Fishing Trips",
      image: "https://images.unsplash.com/photo-1644238068169-c016acf11403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFuJTIwc3Vuc2V0fGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Experience the thrill of deep sea fishing with professional guides",
      features: [
        "Professional fishing gear provided",
        "Experienced captain and crew",
        "Bait and tackle included",
        "Fish cleaning service available",
      ],
      duration: "Half day or full day",
      price: "Starting at $200",
    },
    {
      id: 4,
      title: "Scuba Gear Rentals",
      image: "https://images.unsplash.com/photo-1647222887233-f933843cf5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGVxdWlwbWVudCUyMGdlYXJ8ZW58MXx8fHwxNzc1NDg3ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Rent high-quality diving equipment for your underwater adventures",
      features: [
        "Modern, well-maintained equipment",
        "Full gear packages or individual items",
        "Wetsuits in all sizes",
        "Flexible rental periods",
      ],
      duration: "Daily or weekly",
      price: "Starting at $40/day",
    },
    {
      id: 5,
      title: "Snorkeling Tours",
      image: "https://images.unsplash.com/photo-1661953029179-e1b0dc900490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYmVhY2glMjBjb2FzdHxlbnwxfHx8fDE3NzU0ODc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Perfect for families and beginners to explore shallow reefs",
      features: [
        "Snorkeling equipment provided",
        "Suitable for all ages",
        "Calm, shallow water locations",
        "Marine life spotting guides",
      ],
      duration: "2-3 hours",
      price: "Starting at $60",
    },
    {
      id: 6,
      title: "Advanced Diving Courses",
      image: "https://images.unsplash.com/photo-1628371190872-df8c9dee1093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwdW5kZXJ3YXRlciUyMG9jZWFufGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Take your diving skills to the next level with specialized training",
      features: [
        "Wreck diving certification",
        "Night diving training",
        "Deep diving techniques",
        "Underwater navigation",
      ],
      duration: "2-3 days",
      price: "Starting at $350",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Our Services</h1>
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
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t">
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>{service.duration}</span>
                    </Badge>
                    <Badge variant="default" className="flex items-center gap-2">
                      <span>{service.price}</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
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
