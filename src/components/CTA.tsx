import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="w-full bg-accent/30 py-20">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground font-bold mb-6">
          Ready to Dive In?
        </h2>
        <p className="font-sans text-muted-foreground text-lg mb-8 max-w-xl">
          Book your next underwater adventure or fishing trip today. Our team of certified professionals is ready to guide you.
        </p>
        <Button size="lg" className="text-primary-foreground font-bold px-10 py-6 rounded-full text-lg shadow-md hover:scale-105 transition-transform duration-300">
          Contact Us Now
        </Button>
      </div>
    </section>
  );
}
