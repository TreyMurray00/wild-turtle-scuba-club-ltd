import { createFileRoute } from '@tanstack/react-router'
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Heart, Shield, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useSanityQuery } from '../hooks/useSanityQuery';
import { ABOUT_QUERY } from '../lib/sanity-queries';
import { urlFor } from '../lib/sanity';

export const Route = createFileRoute('/about')({
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
      <section className="bg-gradient-to-br from-accent-foreground to-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-4">
            {aboutData?.pageTitle || 'Meet Your Instructor'} {isLoading && '(Loading...)'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {aboutData?.subtitle || 'Your trusted guide for unforgettable ocean adventures'}
          </p>
        </div>
      </section>

      {/* Instructor Profile & Bio */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-foreground">
                {aboutData?.instructorName || 'Riche Louis'}
              </h2>
              <h3 className="text-2xl text-muted-foreground font-medium">
                {aboutData?.instructorRole || 'Lead Instructor & Founder'}
              </h3>
              
              <div className="space-y-4 text-muted-foreground text-lg whitespace-pre-wrap">
                {aboutData?.bio ? (
                  <p>{aboutData.bio}</p>
                ) : (
                  <>
                    <p>
                      With over 20 years of experience exploring the depths, I founded Wild Turtle Scuba Club Ltd. 
                      to share my passion for the ocean. What started as a personal journey has grown into a lifelong mission 
                      to provide safe, thrilling, and environmentally conscious diving and fishing experiences.
                    </p>
                    <p>
                      I believe every dive is an opportunity to learn and grow, not just as a diver but as an 
                      advocate for our marine ecosystems. Whether you're taking your first breath underwater or looking 
                      to refine advanced skills, my goal is to make every adventure memorable.
                    </p>
                  </>
                )}
              </div>

              {/* Certifications (if any available) */}
              {(aboutData?.certifications && aboutData.certifications.length > 0) || !aboutData ? (
                <div className="pt-6 border-t border-border mt-8">
                  <h4 className="text-xl font-serif mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-foreground" />
                    Certifications & Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {aboutData?.certifications ? (
                      aboutData.certifications.map((cert: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{cert}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">PADI Master Scuba Diver Trainer (MSDT)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">Emergency First Response Instructor</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">USCG Licensed Captain</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="sticky top-6">
              {aboutData?.profileImage ? (
                <img
                  src={urlFor(aboutData.profileImage).width(800).url()}
                  alt={aboutData.instructorName || "Instructor"}
                  className="w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] object-cover rounded-xl shadow-xl"
                />
              ) : (
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628371190872-df8c9dee1093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwdW5kZXJ3YXRlciUyMG9jZWFufGVufDF8fHx8MTc3NTQ4Nzg1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Scuba diver"
                  className="w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] object-cover rounded-xl shadow-xl border-4 border-muted"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutData?.stats && aboutData.stats.length > 0 ? (
              aboutData.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))
            ) : (
              // Fallback default stats
              <>
                <div>
                  <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">20+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">5000+</div>
                  <div className="text-muted-foreground">Logged Dives</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">500+</div>
                  <div className="text-muted-foreground">Certified Students</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif mb-2 text-accent-foreground">100%</div>
                  <div className="text-muted-foreground">Safety Record</div>
                </div>
              </>
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
