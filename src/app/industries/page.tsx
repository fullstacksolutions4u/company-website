import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { Container, SectionHeading, PrimaryButton, Card, Eyebrow } from "@/components/ui";
import { industries, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description: `Industries ${company.name} builds software for, including fintech, healthcare, logistics, retail, manufacturing, and real estate.`,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Deep expertise, <span className="text-gradient">across every vertical</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              We&apos;ve shipped production software for regulated, high-stakes industries —
              we understand the compliance, security, and scale requirements each one demands.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.slug} id={industry.slug} className="scroll-mt-24">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={industry.icon} className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-foreground">{industry.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{industry.description}</p>
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
              eyebrow="Not Listed?"
              title="We've likely worked in your space too"
              description="Tell us about your industry's specific requirements and we'll show you relevant experience."
            />
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Talk to Our Team</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
