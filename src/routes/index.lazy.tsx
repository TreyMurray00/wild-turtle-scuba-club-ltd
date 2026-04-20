import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Anchor, Fish, Waves, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import SliderPkg from 'react-slick';
import { useSanityQuery } from '../hooks/useSanityQuery';
import { SERVICES_QUERY, HOME_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';

export const Route = createLazyFileRoute('/')({
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
    arrows: false,
  };

  const { data: homeData, isLoading: isHomeLoading } = useSanityQuery(
    ['sanity', 'home'],
    HOME_QUERY
  );

  const { data: services, isLoading: isServicesLoading } = useSanityQuery(
    ['sanity', 'services'],
    SERVICES_QUERY
  );

  const activeImages = homeData?.images && homeData.images.length > 0
    ? homeData.images.map((img: any) => ({
        url: urlFor(img).url(),
        alt: "Hero image"
      }))
    : [];
  
  const headline = homeData?.herotitle || "";
  const subheadline = homeData?.herotitle2 || "";

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] bg-accent-foreground/90">
        {isHomeLoading ? (
          <Skeleton className="w-full h-full rounded-none opacity-50" />
        ) : (
          <div className="hero-carousel absolute inset-0">
            {activeImages.length > 0 && (
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
            )}
          </div>
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-accent-foreground/60 z-[5]"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 w-full">
          <div className="text-center max-w-4xl mx-auto px-4 text-primary-foreground w-full flex flex-col items-center">
            {isHomeLoading ? (
              <Skeleton className="h-16 w-3/4 mb-6 bg-primary-foreground/20 rounded-xl" />
            ) : (
              <h1 className="text-5xl md:text-6xl font-serif mb-6 whitespace-pre-wrap">
                {headline}
              </h1>
            )}
            
            {isHomeLoading ? (
              <Skeleton className="h-8 w-2/3 mb-8 bg-primary-foreground/20 rounded-lg" />
            ) : (
              <p className="text-xl md:text-2xl mb-8">
                {subheadline}
              </p>
            )}

            <Button asChild size="lg" className="text-lg">
              <a href="#footer">
                Book Your Adventure
                <ArrowRight className="ml-2 size-5" />
              </a>
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
            <h2 className="text-5xl font-serif mb-4 flex items-center justify-center gap-2">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ocean experiences designed for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isServicesLoading ? (
              <>
                <Skeleton className="rounded-lg md:row-span-2 h-[500px] w-full border-2 border-muted" />
                <Skeleton className="rounded-lg h-[320px] w-full border-2 border-muted" />
                <Skeleton className="rounded-lg h-[320px] w-full border-2 border-muted" />
                <Skeleton className="rounded-lg h-[240px] md:col-span-2 w-full border-2 border-muted" />
              </>
            ) : services && services.length > 0 ? (
              services.slice(0, 4).map((service: any, index: number) => {
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
            ) : null}
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
            <a href="#footer">
              Contact Us Now
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
