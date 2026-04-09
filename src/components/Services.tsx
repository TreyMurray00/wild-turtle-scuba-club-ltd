import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Fish, Anchor, Navigation2 } from "lucide-react";
import { Button } from "./ui/button";

const SERVICES = [
  {
    title: "Scuba Diving",
    description: "Explore the vibrant coral reefs and marine life with our guided diving tours.",
    icon: Anchor,
  },
  {
    title: "Fishing Trips",
    description: "Enjoy a day on the open sea with our professional fishing charters.",
    icon: Fish,
  },
  {
    title: "Snorkeling",
    description: "Perfect for all ages, discover the shallow water wonders of the coast.",
    icon: Navigation2,
  }
];

export function Services() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <Card key={idx} className="bg-card hover:shadow-xl transition-shadow duration-300 border-border/40 shadow-sm flex flex-col group">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-5 rounded-full mb-4 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 group-hover:font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
