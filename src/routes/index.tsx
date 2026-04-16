import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Anchor, Fish, Waves, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import SliderPkg from 'react-slick';
import { useSanityQuery } from '../hooks/useSanityQuery';
import { SERVICES_QUERY, HOME_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';


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

  const heroImagesFallback = [
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

  const { data: homeData } = useSanityQuery(
    ['sanity', 'home'],
    HOME_QUERY
  );

  const { data: services, isLoading } = useSanityQuery(
    ['sanity', 'services'],
    SERVICES_QUERY
  );

  const activeImages = homeData?.images && homeData.images.length > 0
    ? homeData.images.map((img: any) => ({
        url: urlFor(img).url(),
        alt: "Hero image"
      }))
    : heroImagesFallback;
  
  const headline = homeData?.herotitle || "Dive Into Adventure";
  const subheadline = homeData?.herotitle2 || "Join Wild Turtle Scuba Club for unforgettable underwater experiences";

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px]">
        <div className="hero-carousel absolute inset-0">
          <Slider {...carouselSettings}>
            {activeImages.map((image: any, index: number) => (
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
            <h1 className="text-5xl md:text-6xl font-serif mb-6 whitespace-pre-wrap">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {subheadline}
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">What We Offer {isLoading && '(Loading...)'}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ocean experiences designed for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services && services.length >= 4 ? (
              services.slice(0, 4).map((service: any, index: number) => {
                // Determine styling based on position in grid
                const styleMaps = [
                  {
                    container: "relative group overflow-hidden rounded-lg md:row-span-2 h-[500px] md:h-auto",
                    gradient: "bg-gradient-to-t from-accent-foreground via-accent-foreground/60 to-transparent",
                    contentInner: "absolute bottom-0 left-0 right-0 p-8 text-primary-foreground",
                    titleClass: "font-serif text-3xl mb-3",
                    descClass: "text-lg mb-4 text-primary-foreground/90",
                    isInnerWrapped: false
                  },
                  {
                    container: "relative group overflow-hidden rounded-lg h-[320px]",
                    gradient: "bg-gradient-to-t from-accent-foreground via-accent-foreground/50 to-transparent",
                    contentInner: "absolute bottom-0 left-0 right-0 p-6 text-primary-foreground",
                    titleClass: "font-serif text-2xl mb-2",
                    descClass: "mb-3 text-primary-foreground/90",
                    isInnerWrapped: false
                  },
                  {
                    container: "relative group overflow-hidden rounded-lg h-[320px]",
                    gradient: "bg-gradient-to-t from-accent-foreground via-accent-foreground/50 to-transparent",
                    contentInner: "absolute bottom-0 left-0 right-0 p-6 text-primary-foreground",
                    titleClass: "font-serif text-2xl mb-2",
                    descClass: "mb-3 text-primary-foreground/90",
                    isInnerWrapped: false
                  },
                  {
                    container: "relative group overflow-hidden rounded-lg h-[240px] md:col-span-2",
                    gradient: "bg-gradient-to-r from-accent-foreground via-accent-foreground/60 to-transparent",
                    contentInner: "absolute inset-0 flex items-center",
                    contentInnerSub: "p-8 text-primary-foreground max-w-2xl",
                    titleClass: "font-serif text-3xl mb-3",
                    descClass: "text-lg mb-4 text-primary-foreground/90",
                    isInnerWrapped: true
                  }
                ];

                const style = styleMaps[index];

                return (
                  <div key={service._id} className={style.container}>
                    <Link to="/pricing" className="block w-full h-full">
                      {service.image ? (
                        <ImageWithFallback
                          src={urlFor(service.image).width(1200).url()}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center transition-transform duration-700 group-hover:scale-105">No Image</div>
                      )}
                      <div className={`absolute inset-0 ${style.gradient}`}></div>
                      
                      {style.isInnerWrapped ? (
                        <div className={style.contentInner}>
                          <div className={style.contentInnerSub}>
                            <h3 className={style.titleClass}>{service.name}</h3>
                            <p className={style.descClass}>{service.description}</p>
                            <div className="flex items-center gap-4 text-sm mt-4">
                              <span className="bg-primary/20 px-3 py-1 rounded-full">Flexible duration</span>
                              <span className="bg-primary/20 px-3 py-1 rounded-full">{service.price ? `From $${service.price}` : 'Pricing varies'}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={style.contentInner}>
                          <h3 className={style.titleClass}>{service.name}</h3>
                          <p className={style.descClass}>{service.description}</p>
                          <div className="flex items-center gap-4 text-sm mt-4">
                            <span className="bg-primary/20 px-3 py-1 rounded-full">Flexible duration</span>
                            <span className="bg-primary/20 px-3 py-1 rounded-full">{service.price ? `From $${service.price}` : 'Pricing varies'}</span>
                          </div>
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })
            ) : (
              <>
                {/* Fallback Static Masonry Mapping */}
                <div className="relative group overflow-hidden rounded-lg md:row-span-2 h-[500px] md:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1602144586093-06c14ac4fe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZpc2glMjBjb3JhbCUyMHJlZWZ8ZW58MXx8fHwxNzc1NDY3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coral reef diving"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground via-accent-foreground/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                    <h3 className="font-serif text-3xl mb-3">Guided Diving Sessions</h3>
                    <p className="text-lg mb-4 text-primary-foreground/90">
                      Explore vibrant coral reefs and encounter marine life with expert dive masters
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-primary/20 px-3 py-1 rounded-full">3-4 hours</span>
                      <span className="bg-primary/20 px-3 py-1 rounded-full">From $120</span>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg h-[320px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1563967983-ad006a6fd00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGluc3RydWN0b3IlMjBsZXNzb258ZW58MXx8fHwxNzc1NDg3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Diving instructor teaching"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground via-accent-foreground/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="font-serif text-2xl mb-2">PADI Certification</h3>
                    <p className="mb-3 text-primary-foreground/90">
                      Professional training from beginner to advanced levels
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-primary/20 px-3 py-1 rounded-full">3-4 days</span>
                      <span className="bg-primary/20 px-3 py-1 rounded-full">From $450</span>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg h-[320px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1644238068169-c016acf11403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFuJTIwc3Vuc2V0fGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fishing boat at sunset"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground via-accent-foreground/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="font-serif text-2xl mb-2">Deep Sea Fishing</h3>
                    <p className="mb-3 text-primary-foreground/90">
                      Experience the thrill of offshore fishing expeditions
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-primary/20 px-3 py-1 rounded-full">Half/Full day</span>
                      <span className="bg-primary/20 px-3 py-1 rounded-full">From $200</span>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg h-[240px] md:col-span-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1647222887233-f933843cf5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmluZyUyMGVxdWlwbWVudCUyMGdlYXJ8ZW58MXx8fHwxNzc1NDg3ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Scuba diving equipment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground via-accent-foreground/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 text-primary-foreground max-w-2xl">
                      <h3 className="font-serif text-3xl mb-3">Equipment Rentals</h3>
                      <p className="text-lg mb-4 text-primary-foreground/90">
                        High-quality, well-maintained scuba gear for independent divers
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-primary/20 px-3 py-1 rounded-full">Daily or weekly</span>
                        <span className="bg-primary/20 px-3 py-1 rounded-full">From $40/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/pricing">
                View All Pricing
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
