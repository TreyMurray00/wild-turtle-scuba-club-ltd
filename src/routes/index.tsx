import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Anchor, Fish, Waves, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import SliderPkg from 'react-slick';


export const Route = createFileRoute('/')({
  component: Home,
})

const Slider = typeof SliderPkg === 'object' && SliderPkg.default ? SliderPkg.default : SliderPkg;

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: true,
  };

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1628371190872-df8c9dee1093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwdW5kZXJ3YXRlciUyMG9jZWFufGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Scuba diver underwater"
    },
    {
      url: "https://images.unsplash.com/photo-1602144586093-06c14ac4fe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNzc1NDY3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Coral reef with tropical fish"
    },
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc3NTQ4Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Sea turtle swimming"
    },
    {
      url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGdyb3VwfGVufDF8fHx8MTc3NTQ4Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Group of scuba divers"
    }
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px]">
        <div className="hero-carousel absolute inset-0">
          <Slider {...carouselSettings}>
            {heroImages.map((image, index) => (
              <div key={index} className="relative h-[600px]">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-accent-foreground/70 z-[5]"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4 text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Dive Into Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join Wild Turtle Scuba Club for unforgettable underwater experiences
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link to="/contact">
                Book Your Adventure
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="size-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg mb-2">Certified Professionals</h3>
              <p className="text-muted-foreground">
                All instructors are PADI certified with years of experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="size-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg mb-2">Top Equipment</h3>
              <p className="text-muted-foreground">
                Modern, well-maintained diving and fishing gear
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="size-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg mb-2">Best Locations</h3>
              <p className="text-muted-foreground">
                Access to pristine dive sites and fishing spots
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="size-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg mb-2">All Skill Levels</h3>
              <p className="text-muted-foreground">
                From beginners to advanced divers and anglers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Comprehensive diving and fishing experiences for everyone
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diving Sessions */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602144586093-06c14ac4fe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNzc1NDY3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coral reef diving"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-2">Diving Sessions</h3>
                <p className="text-muted-foreground mb-4">
                  Experience breathtaking underwater worlds with guided diving tours
                </p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fishing Trips */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644238068169-c016acf11403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFuJTIwc3Vuc2V0fGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fishing trip"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-2">Fishing Trips</h3>
                <p className="text-muted-foreground mb-4">
                  Deep sea and coastal fishing adventures for all experience levels
                </p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Scuba Lessons */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563967983-ad006a6fd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGluc3RydWN0b3IlMjBsZXNzb258ZW58MXx8fHwxNzc1NDg3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diving lessons"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-2">Scuba Lessons</h3>
                <p className="text-muted-foreground mb-4">
                  Get certified with our comprehensive PADI training programs
                </p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-4">Ready to Dive In?</h2>
          <p className="text-xl mb-8 text-accent-foreground">
            Book your next underwater adventure or fishing trip today
          </p>
          <Button asChild size="lg" variant="default">
            <Link to="/contact">
              Contact Us Now
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
