import React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Users, Calendar, Package } from "lucide-react";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { COURSES_QUERY, RENTALS_QUERY, DIVES_QUERY } from '../lib/sanity-queries';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Skeleton } from "../components/ui/skeleton";


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

  const { data: dives, isLoading: loadingDives } = useSanityQuery(
    ['sanity', 'dives'],
    DIVES_QUERY
  );



  const fallbackPricingData = [
    {
      category: "Diving Sessions",
      type: "general",
      items: [
        {
          name: "Single Dive",
          price: "$120",
          rate: "Per dive",
          includes: ["Equipment rental", "Professional guide", "Safety briefing", "Boat transportation"],
          participants: "Min 2, Max 6"
        },
        {
          name: "Two-Tank Dive",
          price: "$200",
          rate: "Per dive",
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
      type: "courses",
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
    dynamicPricingData.push({
      category: "Rentals",
      type: "rentals",
      items: rentals.map((r: any) => ({
        name: r.name,
        price: r.price ? `$${r.price}` : "Daily rate",
        duration: r.duration || "Daily",
        includes: ["Well-maintained gear"],
        participants: "Per person"
      }))
    })
  }

  if (dives && dives.length > 0) {
    dynamicPricingData.push({
      category: "Diving Sessions",
      type: "general",
      items: dives.map((d: any) => ({
        name: d.name,
        price: d.cost ? `$${d.cost}` : "Contact Us",
        rate: d.rate || "Per dive",
        includes: d.includes || [],
        popular: d.popular,
        participants: "Open"
      }))
    });
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

  const isLoading = loadingCourses || loadingRentals || loadingDives;

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
          {isLoading ? (
            <div className="w-full min-h-[500px]">
              <div className="flex justify-center mb-12 px-2">
                <Skeleton className="h-[60px] w-full max-w-4xl rounded-2xl" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-[300px] w-full rounded-xl" />
                ))}
              </div>
            </div>
          ) : (
          <Tabs defaultValue="courses" className="w-full">
            <div className="flex justify-center mb-12 px-2">
              <TabsList className="flex flex-col sm:flex-row h-auto w-full max-w-4xl bg-muted/80 p-1.5 rounded-2xl shadow-inner border border-input mx-auto gap-1">
                {finalPricingData.map((category, idx) => (
                  <TabsTrigger 
                    key={idx} 
                    value={category.type} 
                    className="text-base sm:text-lg font-serif py-3 flex-1 px-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="min-h-[400px]">
              {finalPricingData.map((category, categoryIndex) => (
                <TabsContent 
                  key={categoryIndex} 
                  value={category.type} 
                  className="mt-0 outline-none animate-in fade-in-50 slide-in-from-bottom-4 duration-500 ease-out"
                >
                  
                  {category.type === 'rentals' ? (
                    <div className="bg-card rounded-lg border shadow-sm overflow-hidden flex flex-col">
                    <Table className="table-fixed">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground px-4 sm:px-6 w-1/2">Gear Item</TableHead>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground text-center w-1/4">Duration</TableHead>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground text-right px-4 sm:px-6 w-1/4">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Array.from(new Set(category.items.map((i: any) => i.duration))).map((durationValue: any) => (
                          <React.Fragment key={durationValue as string}>
                            <TableRow className="border-t bg-muted/5">
                              <TableCell colSpan={3} className="text-right text-primary text-xs tracking-widest font-bold uppercase py-3 px-4 sm:px-6">
                                {durationValue === 'Daily' ? 'Per-day' : durationValue} Rentals
                              </TableCell>
                            </TableRow>
                            {category.items.filter((i: any) => i.duration === durationValue).map((item: any, itemIndex: number) => (
                              <TableRow key={`${durationValue}-${itemIndex}`}>
                                <TableCell className="font-medium px-4 sm:px-6">
                                  <div className="flex items-center gap-4">
                                    <div className="size-5 bg-primary flex-shrink-0 rounded flex items-center justify-center text-primary-foreground">
                                      <Check className="size-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-base">{item.name}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className="bg-primary-foreground border-none hover:bg-primary-foreground text-primary font-medium rounded-full px-3 py-0.5 whitespace-nowrap">
                                    {item.duration}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-medium text-lg text-primary whitespace-nowrap text-right px-4 sm:px-6">{item.price}</TableCell>
                              </TableRow>
                            ))}
                          </React.Fragment>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="p-6 border-t flex justify-center bg-muted/5">
                      <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px]">
                        <Link to="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                ) : category.type === 'general' ? (
                  <div className="bg-card rounded-lg border shadow-sm overflow-hidden flex flex-col">
                    <Table className="table-fixed">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground px-4 sm:px-6 w-2/5">Session</TableHead>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground text-center">Rate</TableHead>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground text-center w-1/4">Includes</TableHead>
                          <TableHead className="text-sm font-bold tracking-widest uppercase text-muted-foreground text-right px-4 sm:px-6 w-1/5">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.items.map((item: any, itemIndex: number) => (
                          <TableRow key={itemIndex}>
                            <TableCell className="font-medium px-4 sm:px-6">
                              <div className="flex items-center gap-4">
                                <div className="size-5 bg-primary flex-shrink-0 rounded flex items-center justify-center text-primary-foreground">
                                  <Check className="size-3" strokeWidth={3} />
                                </div>
                                <span className="text-base">{item.name}</span>
                                {item.popular && (
                                  <Badge className="bg-primary hover:bg-primary text-[10px] px-1.5 py-0 h-4">Popular</Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge className="bg-primary-foreground border-none hover:bg-primary-foreground text-primary font-medium rounded-full px-3 py-0.5 whitespace-nowrap">
                                {item.rate}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center text-sm text-muted-foreground">
                              <div className="max-w-[150px] truncate mx-auto" title={item.includes.join(', ')}>
                                {item.includes.join(', ')}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium text-lg text-primary whitespace-nowrap text-right px-4 sm:px-6">{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="p-6 border-t flex justify-center bg-muted/5">
                      <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px]">
                        <Link to="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className={(category.type === 'courses') ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-4"}>
                    {category.items.map((item: any, itemIndex: number) => (
                      <Card 
                        key={itemIndex} 
                        className={`relative overflow-hidden hover:shadow-md transition-shadow ${
                          item.popular ? 'border-primary border-2' : ''
                        } ${(category.type === 'courses') ? 'flex flex-col' : ''}`}
                      >
                        {item.popular && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary">Popular</Badge>
                          </div>
                        )}
                        <CardContent className={`p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${(category.type === 'courses') ? '!flex-col !items-start h-full' : ''}`}>
                          <div className="flex-1 space-y-4 w-full">
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

                          <div className={`flex flex-col items-start gap-4 min-w-[200px] border-border ${(category.type === 'courses') ? 'border-t w-full pt-4 md:items-center md:border-l-0 md:pl-0 mt-auto' : 'md:items-end border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6'}`}>
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
                )}
              </TabsContent>
            ))}
            </div>
          </Tabs>
          )}
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

