import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Shield, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { ABOUT_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';
import { Skeleton } from '#/components/ui/skeleton';

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { name: 'description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' },
      { name: 'keywords', content: 'scuba instructor, diving philosophy, PADI master diver, scuba experience, wild turtle instructors' },
      { property: 'og:title', content: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { property: 'og:description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Meet the Instructor | Wild Turtle Scuba Club Ltd.' },
      { property: 'twitter:description', content: 'Meet our lead instructor and learn about our diving philosophy, certifications, and experience at Wild Turtle Scuba Club.' }
    ]
  })
})

function About() {
  const { data: aboutData, isLoading } = useSanityQuery(
    ['sanity', 'about'],
    ABOUT_QUERY
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">
            {isLoading ? <Skeleton className="h-12 w-64 mx-auto bg-primary-foreground/20" /> : (aboutData?.pageTitle || 'Meet Your Instructor')}
          </h1>
          <div className="text-xl max-w-2xl mx-auto mt-4">
            {isLoading ? <Skeleton className="h-6 w-96 mx-auto bg-primary-foreground/20" /> : (aboutData?.subtitle || '')}
          </div>
        </div>
      </section>

      {/* Instructor Profile & Bio */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
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
                  
                  <div className="space-y-4 text-muted-foreground text-lg whitespace-pre-wrap">
                    {aboutData?.bio && <p>{aboutData.bio}</p>}
                  </div>

                  {/* Certifications */}
                  {aboutData?.certifications && aboutData.certifications.length > 0 && (
                    <div className="pt-6 border-t border-border mt-8">
                      <h4 className="text-xl font-serif mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent-foreground" />
                        Certifications & Qualifications
                      </h4>
                      <ul className="space-y-2">
                        {aboutData.certifications.map((cert: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="sticky top-6">
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

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {isLoading ? (
              Array(4).fill(0).map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Skeleton className="h-12 w-24 mb-2 bg-accent-foreground/10" />
                  <Skeleton className="h-5 w-32 bg-accent-foreground/10" />
                </div>
              ))
            ) : (
              aboutData?.stats && aboutData.stats.length > 0 && (
                aboutData.stats.map((stat: any, idx: number) => (
                  <div key={idx}>
                    <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))
              )
            )}
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

    </div>
  );
}
