import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Users, Calendar, Package } from "lucide-react";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { COURSES_QUERY, RENTALS_QUERY } from '../lib/sanity-queries';


export const Route = createFileRoute('/pricing')({
  component: Pricing,
})


function Pricing() {
  const { data: courses, isLoading: loadingCourses } = useSanityQuery(
    ['sanity', 'courses'],
    COURSES_QUERY
  );

  const { data: rentals, isLoading: loadingRentals } = useSanityQuery(
    ['sanity', 'rentals'],
    RENTALS_QUERY
  );



  const fallbackPricingData = [
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
        }
      ]
    }
  ];

  // We map the retrieved sanity records dynamically to categories
  let dynamicPricingData: any[] = [];
  
  if (courses && courses.length > 0) {
    dynamicPricingData.push({
      category: "Certification Courses",
      items: courses.map((c: any) => ({
        name: c.name,
        price: c.cost ? `$${c.cost}` : "Contact Us",
        duration: "Flexible",
        includes: [c.description || "Everything you need"],
        participants: "Open",
      }))
    });
  }



  if (rentals && rentals.length > 0) {
    // Map rentals potentially by category, but keep it simple as one broad category here if needed.
    // Grouping by category property in rental:
    const rentalCategories = new Set(rentals.map((r: any) => r.category || "General Rentals"));
    rentalCategories.forEach(cat => {
      dynamicPricingData.push({
        category: cat,
        items: rentals.filter((r: any) => (r.category || "General Rentals") === cat).map((r: any) => ({
          name: r.name,
          price: r.price ? `$${r.price}` : "Daily rate",
          duration: r.duration || "Daily",
          includes: ["Well-maintained gear", "Various sizes available"],
          participants: "Per person"
        }))
      })
    })
  }

  const finalPricingData = dynamicPricingData.length > 0 ? dynamicPricingData : fallbackPricingData;


  const packages = [
    {
      name: "Week Long Adventure",
      price: "$950",
      savings: "Save $150",
      includes: ["5 two-tank dives", "Equipment rental for full week", "1 night dive included", "Accommodation assistance"],
      ideal: "Best value for extended trips",
      popular: true
    }
  ];

  const isLoading = loadingCourses || loadingRentals;

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">Pricing {isLoading && "(Loading...)"}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transparent pricing for all our diving and fishing services
          </p>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {finalPricingData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-serif mb-8 text-center">
                  {category.category}
                </h2>
                <div className="flex flex-col space-y-4">
                  {category.items.map((item: any, itemIndex: number) => (
                    <Card 
                      key={itemIndex} 
                      className={`relative overflow-hidden hover:shadow-md transition-shadow ${
                        item.popular ? 'border-primary border-2' : ''
                      }`}
                    >
                      {item.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary">Popular</Badge>
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="font-serif text-2xl mb-1">
                              {item.name}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              {item.duration && (
                                <div className="flex items-center gap-1">
                                  <Clock className="size-4 flex-shrink-0" />
                                  <span>{item.duration}</span>
                                </div>
                              )}
                              {item.participants && (
                                <div className="flex items-center gap-1">
                                  <Users className="size-4 flex-shrink-0" />
                                  <span>{item.participants}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <p className="font-serif text-sm">Includes:</p>
                            <div className="flex flex-col space-y-1">
                              {item.includes.map((include: string, includeIndex: number) => (
                                <div key={includeIndex} className="flex items-start gap-2 max-w-lg">
                                  <Check className="size-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{include}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4 min-w-[200px] border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                          <div className="text-4xl font-serif text-primary">
                            {item.price}
                          </div>
                          <Button asChild className="w-full md:w-auto">
                            <Link to="/contact">
                                Book Now
                            </Link>
                          </Button>
                        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-shadow lg:col-start-2 ${
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

    </div>
  );
}
