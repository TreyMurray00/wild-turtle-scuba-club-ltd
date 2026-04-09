import { Anchor, Fish, MapPin, Navigation } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Navigation, title: "Certified Professionals" },
  { icon: Anchor, title: "Top Equipment" },
  { icon: MapPin, title: "Best Locations" },
  { icon: Fish, title: "All Skill Levels" },
];

export function Highlights() {
  return (
    <section className="w-full bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((highlight, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-accent/40 p-4 rounded-full text-primary shadow-sm hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground font-sans text-lg">
                {highlight.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
