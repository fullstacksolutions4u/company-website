import type { Metadata } from "next";
import { Container, SectionHeading, PrimaryButton, Card, Eyebrow } from "@/components/ui";
import { portfolio, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `A selection of web, mobile, and enterprise software projects delivered by ${company.name}.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Case Studies</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Products we&apos;ve <span className="text-gradient">designed &amp; shipped</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              A sample of the platforms, apps, and systems we&apos;ve built for clients across
              fintech, healthcare, logistics, retail, and industrial tech.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <Card key={item.slug} className="overflow-hidden p-0">
                <div className={`h-48 w-full bg-gradient-to-br ${item.gradient}`} />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center glow sm:px-16">
            <SectionHeading
              center
              eyebrow="Your Project Here"
              title="Let's build your next success story"
              description="Whatever stage your idea is at, we can help you scope, build, and launch it."
            />
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
