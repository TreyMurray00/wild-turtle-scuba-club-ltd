import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Users, Calendar, Package } from "lucide-react";


export const Route = createFileRoute('/pricing')({
  component: Pricing,
})


function Pricing() {
  const pricingData = [
    {
      category: "Diving Sessions",
      items: [
        {
          name: "Single Dive",
          price: "$120",
          duration: "3-4 hours",
          includes: ["Equipment rental", "Professional guide", "Safety briefing", "Boat transportation"],
          participants: "Min 2, Max 6"
        },
        {
          name: "Two-Tank Dive",
          price: "$200",
          duration: "5-6 hours",
          includes: ["Equipment rental", "Professional guide", "Two dive sites", "Boat transportation", "Snacks and drinks"],
          participants: "Min 2, Max 6",
          popular: true
        },
        {
          name: "Night Dive",
          price: "$150",
          duration: "3 hours",
          includes: ["Equipment rental including lights", "Night dive specialist guide", "Safety briefing", "Boat transportation"],
          participants: "Min 4, Max 6"
        }
      ]
    },
    {
      category: "Certification Courses",
      items: [
        {
          name: "Open Water Certification",
          price: "$450",
          duration: "3-4 days",
          includes: ["All training materials", "Pool sessions", "4 open water dives", "PADI certification", "Equipment rental"],
          participants: "Max 4 per instructor"
        },
        {
          name: "Advanced Open Water",
          price: "$350",
          duration: "2-3 days",
          includes: ["All training materials", "5 adventure dives", "PADI certification", "Equipment rental"],
          participants: "Max 4 per instructor"
        },
        {
          name: "Rescue Diver Course",
          price: "$400",
          duration: "3 days",
          includes: ["All training materials", "Pool and open water sessions", "Emergency scenarios", "PADI certification"],
          participants: "Max 6 per instructor"
        }
      ]
    },
    {
      category: "Fishing Trips",
      items: [
        {
          name: "Half-Day Fishing",
          price: "$200",
          duration: "4 hours",
          includes: ["Fishing gear", "Bait and tackle", "Experienced captain", "Ice and cooler"],
          participants: "Up to 4 people"
        },
        {
          name: "Full-Day Fishing",
          price: "$350",
          duration: "8 hours",
          includes: ["Fishing gear", "Bait and tackle", "Experienced captain", "Lunch included", "Ice and cooler"],
          participants: "Up to 4 people",
          popular: true
        },
        {
          name: "Deep Sea Fishing",
          price: "$500",
          duration: "10 hours",
          includes: ["Premium fishing gear", "Bait and tackle", "Experienced captain and mate", "Lunch and drinks", "Fish cleaning service"],
          participants: "Up to 6 people"
        }
      ]
    },
    {
      category: "Equipment Rentals",
      items: [
        {
          name: "Full Scuba Gear Package",
          price: "$50/day",
          duration: "Daily",
          includes: ["BCD", "Regulator", "Wetsuit", "Fins, mask, snorkel", "Dive computer"],
          participants: "Per person"
        },
        {
          name: "Individual Items",
          price: "$10-25/day",
          duration: "Daily",
          includes: ["Individual equipment pieces", "Various sizes available", "Well-maintained gear"],
          participants: "Per person"
        },
        {
          name: "Weekly Rental",
          price: "$250/week",
          duration: "7 days",
          includes: ["Full gear package", "Significant savings", "Perfect for extended stays"],
          participants: "Per person"
        }
      ]
    },
    {
      category: "Specialty Programs",
      items: [
        {
          name: "Snorkeling Tour",
          price: "$60",
          duration: "2-3 hours",
          includes: ["Snorkeling equipment", "Guide", "Boat transportation", "Marine life spotting"],
          participants: "Family-friendly"
        },
        {
          name: "Private Diving Session",
          price: "$300",
          duration: "Flexible",
          includes: ["Dedicated instructor", "Customized itinerary", "Equipment rental", "Flexible scheduling"],
          participants: "1-2 people"
        },
        {
          name: "Underwater Photography",
          price: "$180",
          duration: "4 hours",
          includes: ["Camera equipment", "Photography guide", "Photo editing tips", "Digital copies of photos"],
          participants: "Max 4"
        }
      ]
    }
  ];

  const packages = [
    {
      name: "Weekend Warrior",
      price: "$380",
      savings: "Save $40",
      includes: ["2 two-tank dives", "Equipment rental for 2 days", "Complimentary photos"],
      ideal: "Perfect for a weekend getaway"
    },
    {
      name: "Week Long Adventure",
      price: "$950",
      savings: "Save $150",
      includes: ["5 two-tank dives", "Equipment rental for full week", "1 night dive included", "Accommodation assistance"],
      ideal: "Best value for extended trips",
      popular: true
    },
    {
      name: "Family Package",
      price: "$450",
      savings: "Save $70",
      includes: ["2 snorkeling tours", "1 beginner dive session", "Equipment for family of 4", "Family photos"],
      ideal: "Great for families with kids"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transparent pricing for all our diving and fishing services
          </p>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pricingData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-serif mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex} 
                      className={`relative overflow-hidden hover:shadow-xl transition-shadow ${
                        item.popular ? 'border-primary border-2' : ''
                      }`}
                    >
                      {item.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary">Popular</Badge>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="font-serif text-2xl mb-2">
                          {item.name}
                        </h3>
                        <div className="text-4xl font-serif text-primary mb-4">
                          {item.price}
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="size-4 flex-shrink-0" />
                            <span className="text-sm">{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="size-4 flex-shrink-0" />
                            <span className="text-sm">{item.participants}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-6">
                          <p className="font-serif text-sm mb-2">Includes:</p>
                          {item.includes.map((include, includeIndex) => (
                            <div key={includeIndex} className="flex items-start gap-2">
                              <Check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{include}</span>
                            </div>
                          ))}
                        </div>

                        <Button asChild className="w-full">
                          <Link to="/contact">
                            Book Now
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Package className="size-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-serif mb-4">
              Special Package Deals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save more with our bundled packages designed for different types of adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-shadow ${
                  pkg.popular ? 'border-primary border-2' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-serif">
                    Best Value
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-serif text-primary">{pkg.price}</span>
                    <Badge variant="secondary">{pkg.savings}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 italic">
                    {pkg.ideal}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((include, includeIndex) => (
                      <div key={includeIndex} className="flex items-start gap-2">
                        <Check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{include}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link to="/contact">
                      Book Package
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="size-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif mb-2">Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Advance booking recommended. 48-hour cancellation policy applies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="size-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif mb-2">Group Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Special rates available for groups of 8 or more. Contact us for details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Package className="size-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif mb-2">What's Included</h3>
                <p className="text-sm text-muted-foreground">
                  All prices include necessary equipment unless otherwise stated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Check className="size-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif mb-2">Deposits</h3>
                <p className="text-sm text-muted-foreground">
                  50% deposit required to secure your booking. Balance due on arrival.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Contact us for current availability and to make your reservation. 
            We're happy to answer any questions about our services and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
