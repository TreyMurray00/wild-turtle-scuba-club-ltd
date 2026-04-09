import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
          alt="Scuba diving scene" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 drop-shadow-md">
          Dive Into Adventure
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow-sm font-sans">
          Discover the hidden wonders of the ocean with our expert-led scuba diving and fishing tours.
        </p>
        <Button size="lg" className="text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:scale-105 transition-transform duration-300">
          Book Your Adventure
        </Button>
      </div>
    </section>
  );
}
