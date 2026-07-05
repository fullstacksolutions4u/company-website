import Link from "next/link";
import Icon from "@/components/Icon";
import { Container, SectionHeading, PrimaryButton, SecondaryButton, Card } from "@/components/ui";
import StatBar from "@/components/StatBar";
import HeroVisual from "@/components/HeroVisual";
import {
  services,
  techStack,
  portfolio,
  testimonials,
  process,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="hero-wash absolute inset-0 overflow-hidden" aria-hidden />
        <Container className="relative pb-24 pt-10 sm:pt-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
            <div>
              <p className="text-2xl font-light text-foreground sm:text-3xl">
                Expertise gained from over
              </p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                1200+ web projects
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted">
                Full Stack Solutions excels in the professional design, redesigns, and
                continuous support of customer-facing and enterprise web applications,
                ensuring elevated conversion and adoption rates.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="/contact">Book a Free Consultation</PrimaryButton>
                <SecondaryButton href="/case-studies">View Case Studies</SecondaryButton>
              </div>
            </div>
            <HeroVisual />
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2">
          <Container>
            <StatBar />
          </Container>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-t border-border pb-24 pt-32 sm:pt-36">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Services built to take you from concept to scale"
            description="Whichever stage your product is at, our team plugs in with the right engineering discipline to move it forward."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} className="group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
                >
                  Learn more
                  <Icon name="arrowRight" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface/40 py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A proven process, refined over hundreds of projects"
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-border">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border py-24">
        <Container>
          <SectionHeading eyebrow="Our Toolbox" title="Technology we build with" center />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-muted transition hover:border-accent/40 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio preview */}
      <section className="border-t border-border bg-surface/40 py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Products we've shipped for our clients"
            />
            <SecondaryButton href="/case-studies">View All Projects</SecondaryButton>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((item) => (
              <Card key={item.slug} className="overflow-hidden p-0">
                <div className={`h-40 w-full bg-gradient-to-br ${item.gradient}`} />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border py-24">
        <Container>
          <SectionHeading eyebrow="Client Voices" title="Trusted by teams who ship" center />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center glow sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us about your project and we&apos;ll get back to you within one business
              day with next steps.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Get a Free Consultation</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
