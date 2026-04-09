import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "@tanstack/react-router";
import { Wifi, Coffee, UtensilsCrossed, Wind, MapPin, Star, Waves, Home } from "lucide-react";


export const Route = createFileRoute('/accommodation')({
  component: Accommodation,
})


function Accommodation() {
  const accommodations = [
    {
      id: 1,
      name: "Ocean View Resort",
      type: "Partner Hotel",
      rating: 4.5,
      distance: "0.5 miles from dive center",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzU0ODc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["Free WiFi", "Pool", "Restaurant", "Beach Access", "Air Conditioning", "Parking"],
      priceRange: "$$$",
      description: "Luxurious beachfront resort with stunning ocean views and direct beach access. Perfect for divers seeking comfort and convenience."
    },
    {
      id: 2,
      name: "Coastal Inn",
      type: "Budget-Friendly",
      rating: 4.0,
      distance: "1 mile from dive center",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBiZWFjaHxlbnwxfHx8fDE3NzU0ODc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning", "Parking"],
      priceRange: "$",
      description: "Comfortable and affordable accommodation ideal for budget-conscious travelers. Clean, simple rooms with all essential amenities."
    },
    {
      id: 3,
      name: "Seaside Villas",
      type: "Luxury Option",
      rating: 5.0,
      distance: "2 miles from dive center",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZpbGxhJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTQ4Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["Private Pool", "Full Kitchen", "Ocean View", "WiFi", "Concierge Service", "BBQ Area"],
      priceRange: "$$$$",
      description: "Exclusive private villas with premium amenities. Ideal for families or groups seeking privacy and luxury during their diving vacation."
    },
    {
      id: 4,
      name: "Divers Lodge",
      type: "Diver-Focused",
      rating: 4.3,
      distance: "0.2 miles from dive center",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwY29hc3RhbHxlbnwxfHx8fDE3NzU0ODc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      amenities: ["Gear Storage", "Rinse Stations", "WiFi", "Breakfast", "Dive Equipment Room", "Air Filling Station"],
      priceRange: "$$",
      description: "Purpose-built accommodation designed specifically for divers. Features specialized facilities for equipment storage and maintenance."
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Accommodation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comfortable places to stay near our dive center
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">
            We've partnered with local hotels and resorts to offer our guests comfortable accommodation 
            options within easy reach of our dive center. Whether you're looking for budget-friendly lodging 
            or luxury amenities, we have recommendations to suit every preference and budget.
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-2xl mb-1">
                        {accommodation.name}
                      </h3>
                      <Badge variant="secondary">{accommodation.type}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="size-5 text-primary fill-primary" />
                      <span className="font-serif">{accommodation.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="size-4" />
                    <span className="text-sm">{accommodation.distance}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {accommodation.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-serif mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-muted-foreground">
                      <span className="text-sm">Price Range: </span>
                      <span className="font-serif text-lg text-card-foreground">
                        {accommodation.priceRange}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Amenities Icons Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">
            Common Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi className="size-8 text-accent-foreground" />
              </div>
              <p className="font-serif">Free WiFi</p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="size-8 text-accent-foreground" />
              </div>
              <p className="font-serif">Breakfast</p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wind className="size-8 text-accent-foreground" />
              </div>
              <p className="font-serif">Air Conditioning</p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Waves className="size-8 text-accent-foreground" />
              </div>
              <p className="font-serif">Beach Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-accent">
            <CardContent className="p-8 text-center">
              <Home className="size-12 mx-auto mb-4 text-accent-foreground" />
              <h2 className="text-3xl font-serif mb-4">Need Help with Accommodation?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Our team can help you find the perfect place to stay and may be able to secure 
                special rates for our diving guests. Contact us for personalized recommendations 
                and booking assistance.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us for Booking Help
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-8">
            Good to Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-3">Transportation</h3>
                <p className="text-muted-foreground">
                  We offer complimentary pickup and drop-off service from most local accommodations 
                  for guests participating in our dive trips.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-3">Package Deals</h3>
                <p className="text-muted-foreground">
                  Ask about our diving + accommodation packages for the best value. We offer special 
                  rates when you book multiple days of diving.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-3">Seasonal Availability</h3>
                <p className="text-muted-foreground">
                  Accommodation prices and availability vary by season. We recommend booking well in 
                  advance during peak diving season (June-September).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-3">Group Bookings</h3>
                <p className="text-muted-foreground">
                  Planning a group diving trip? We can arrange group rates and coordinate bookings 
                  to ensure your party stays together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
