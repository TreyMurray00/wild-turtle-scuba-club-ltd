import React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Users, Calendar, Package, CreditCard, Home } from "lucide-react";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { COURSES_QUERY, RENTALS_QUERY, DIVES_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';
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
  head: () => ({
    meta: [
      { title: 'Pricing & Packages | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Transparent pricing for all our diving courses, gear rentals, and fishing services.' },
      { property: 'og:title', content: 'Pricing & Packages | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Transparent pricing for all our diving courses, gear rentals, and fishing services.' }
    ]
  })
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



  // We map the retrieved sanity records dynamically to categories
  const formatPrice = (val: any, fallback: string) => {
    if (!val) return fallback;
    const strVal = String(val);
    return /[a-zA-Z]/.test(strVal) ? strVal : `$${strVal}`;
  };

  let dynamicPricingData: any[] = [];
  
  if (courses && courses.length > 0) {
    dynamicPricingData.push({
      category: "Certification Courses",
      type: "courses",
      items: courses.map((c: any) => ({
        name: c.name,
        price: formatPrice(c.cost, "Contact Us"),
        duration: c.duration || "Flexible",
        includes: c.includes || [],
        description: c.description || "",
        difficulty: c.difficulty || null,
        image: c.image ? urlFor(c.image).url() : undefined,
        popular: c.popular || false
      }))
    });
  }

  if (rentals && rentals.length > 0) {
    dynamicPricingData.push({
      category: "Rentals",
      type: "rentals",
      items: rentals.map((r: any) => ({
        name: r.name,
        price: formatPrice(r.price, "Daily rate"),
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
        price: formatPrice(d.cost, "Contact Us"),
        rate: d.rate || "Per dive",
        includes: d.includes || [],
        popular: d.popular,
        participants: "Open"
      }))
    });
  }

  const finalPricingData = dynamicPricingData;
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
                    className="text-base sm:text-lg font-serif py-3 flex-1 w-full px-4 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="max-w-4xl mx-auto mb-10 bg-muted/50 border border-border rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 text-left shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <CreditCard className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Prices and Payment</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  All prices are quoted in <strong>US$</strong> (our rate is $1 US = $6.5 TT).<br />
                  Prices are subject to change without notice.
                </p>
                <div className="inline-flex items-center gap-2 bg-background border px-4 py-2 rounded-lg text-sm text-foreground shadow-sm">
                  <span className="font-medium">We accept Visa and MasterCard</span>
                  <span className="text-muted-foreground">—</span>
                  <span className="font-medium text-amber-600 dark:text-amber-500">Please note there's a 4% charge to all card transactions.</span>
                </div>
              </div>
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
                        <a href="#footer">Book Now</a>
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
                        <a href="#footer">Book Now</a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-8">
                    {category.items.map((item: any, itemIndex: number) => (
                      <Card 
                        key={itemIndex} 
                        className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row bg-card ${
                          item.popular ? 'border-primary shadow-md' : 'border-border/50'
                        }`}
                      >
                        {/* Image holding container ensures an elegant placeholder if an image is not yet uploaded */}
                        <div className="w-full md:w-[40%] min-h-[300px] relative bg-muted shrink-0 group flex items-center justify-center border-r border-border/50">
                          {item.image ? (
                            <>
                              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                            </>
                          ) : (
                            <div className="text-muted-foreground/40 flex flex-col items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-12"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                              <span className="text-sm font-medium">Image Placeholder</span>
                            </div>
                          )}

                          {item.popular && (
                            <div className="absolute top-4 right-4 z-20">
                              <Badge className="bg-primary hover:bg-primary shadow-sm backdrop-blur-sm text-primary-foreground border-none">Popular</Badge>
                            </div>
                          )}
                        </div>
                        
                        <CardContent className="p-6 md:p-8 flex flex-col flex-1 w-full relative">
                          <h3 className="font-serif text-2xl md:text-3xl mb-4 text-card-foreground">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-muted-foreground text-base mb-6 leading-relaxed whitespace-pre-wrap">
                              {item.description}
                            </p>
                          )}
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                            {item.duration && (
                              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-md">
                                <Clock className="size-4 text-primary" />
                                <span className="font-medium">{item.duration}</span>
                              </div>
                            )}
                            {item.difficulty && (
                               <Badge className={`
                                 ${item.difficulty === 'beginner' ? 'bg-green-500/10 text-green-700 hover:bg-green-500/20' : ''}
                                 ${item.difficulty === 'intermediate' ? 'bg-amber-500/10 text-amber-700 hover:bg-amber-500/20' : ''}
                                 ${item.difficulty === 'advanced' ? 'bg-red-500/10 text-red-700 hover:bg-red-500/20' : ''}
                                 capitalize border-none shadow-none px-3 py-1.5 text-xs
                               `}>
                                 {item.difficulty} Level
                               </Badge>
                            )}
                          </div>

                          {item.includes && item.includes.length > 0 && (
                            <div className="space-y-3 mb-8 flex-1">
                              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Course Includes</p>
                              <div className="flex flex-col space-y-2">
                                {item.includes.map((include: string, includeIndex: number) => (
                                  <div key={includeIndex} className="flex items-start gap-3">
                                    <div className="mt-0.5 bg-primary/10 rounded-full p-1">
                                      <Check className="size-3 text-primary flex-shrink-0" strokeWidth={3} />
                                    </div>
                                    <span className="text-base text-muted-foreground leading-snug">{include}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-auto pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Course Fee</p>
                              <div className="text-3xl font-serif text-primary">{item.price}</div>
                            </div>
                            <Button asChild size="lg" className="rounded-full px-8 shrink-0 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                              <a href="#footer">Book Now</a>
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

      {/* Accommodation Notice */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
             <div className="bg-primary/10 p-4 rounded-full">
               <Home className="size-10 text-primary" />
             </div>
          </div>
          <h2 className="text-3xl font-serif mb-4 text-foreground">Need a place to stay?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            We can assist with your accommodation needs. Let us know your ideas, comfort range and price and we will be happy to help. Here is a list of links to hotels and guest houses that we recommend.
          </p>
          <Button asChild size="lg" className="rounded-full shadow-md text-base px-8 transition-transform hover:scale-105 active:scale-95">
            <Link to="/accommodation">View Recommended Accommodations</Link>
          </Button>
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
                    <a href="#footer">
                      Book Package
                    </a>
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

