import { createLazyFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Shield, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { ABOUT_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';
import { Skeleton } from '#/components/ui/skeleton';
import { PageBreadcrumbs } from '../components/PageBreadcrumbs';
import { BookingCTA } from '../components/BookingCTA';

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const { data: aboutData, isLoading } = useSanityQuery(
    ['sanity', 'about'],
    ABOUT_QUERY
  );

  return (
    <div>
      {/* Header */}
      <section className="relative bg-accent-foreground text-white py-16 md:py-24 overflow-hidden">
        {aboutData?.profileImage && <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${urlFor(aboutData.profileImage).width(1600).url()})` }} />}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground via-accent-foreground/90 to-primary/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumbs current="About" light />
          <div className="max-w-3xl mt-10">
          <p className="text-sm uppercase tracking-[0.18em] font-semibold text-white/70 mb-3">The people behind your dive</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-5">
            {isLoading ? <Skeleton className="h-12 w-64 mx-auto bg-primary-foreground/20" /> : (aboutData?.pageTitle || 'Meet Your Instructor')}
          </h1>
          <div className="text-lg md:text-xl max-w-2xl text-white/85 leading-relaxed">
            {isLoading ? <Skeleton className="h-6 w-96 mx-auto bg-primary-foreground/20" /> : (aboutData?.subtitle || '')}
          </div>
          </div>
        </div>
      </section>

      {/* Instructor Profile & Bio */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              {isLoading ? (
                <>
                  <Skeleton className="h-10 w-48" />
                  <Skeleton className="h-8 w-64" />
                  <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-serif text-foreground">
                    {aboutData?.instructorName || ''}
                  </h2>
                  <h3 className="text-2xl text-muted-foreground font-medium">
                    {aboutData?.instructorRole || ''}
                  </h3>
                  
                  <div className="max-w-prose space-y-4 text-muted-foreground text-lg whitespace-pre-wrap leading-relaxed">
                    {aboutData?.bio && <p>{aboutData.bio}</p>}
                  </div>

                  <blockquote className="border-l-4 border-primary pl-5 py-2 text-xl font-serif italic text-foreground">
                    Tobago's reefs are more than dive sites—they are part of the community we are proud to share and protect.
                  </blockquote>

                  {/* Certifications */}
                  {aboutData?.certifications && aboutData.certifications.length > 0 && (
                    <div className="pt-6 border-t border-border mt-8">
                      <h4 className="text-xl font-serif mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent-foreground" />
                        Certifications & Qualifications
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {aboutData.certifications.map((cert: string, idx: number) => (
                          <li key={idx} className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {aboutData?.stats?.length > 0 && <div className="grid grid-cols-2 gap-4 pt-4">{aboutData.stats.slice(0, 4).map((stat: any, idx: number) => <div key={idx} className="rounded-2xl border bg-background p-5"><div className="text-3xl font-serif text-primary">{stat.value}</div><div className="text-sm text-muted-foreground">{stat.label}</div></div>)}</div>}
                </>
              )}
            </div>

            <div className="lg:sticky lg:top-24 order-1 lg:order-2">
              {isLoading ? (
                <Skeleton className="w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-xl shadow-xl border-4 border-muted" />
              ) : (
                aboutData?.profileImage && (
                  <img
                    src={urlFor(aboutData.profileImage).width(800).url()}
                    alt={aboutData.instructorName || "Instructor"}
                    className="w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] object-cover rounded-xl shadow-xl"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values (Kept from original) */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Your safety is our top priority. We maintain the highest safety standards and
                  use only certified equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Ocean Conservation</h3>
                <p className="text-muted-foreground">
                  We're committed to protecting marine ecosystems and educating others about
                  ocean conservation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from instruction to
                  equipment quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="size-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a welcoming community where ocean lovers can connect and share their
                  passion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <BookingCTA title="Dive With the Wild Turtle Team" description="Tell us what you want from your Tobago dive experience and we’ll help you plan the right course, guided dive or package." />

    </div>
  );
}
