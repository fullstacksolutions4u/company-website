import type { Metadata } from "next";
import { Container, SectionHeading, PrimaryButton, Card, Eyebrow } from "@/components/ui";
import StatBar from "@/components/StatBar";
import { values, team, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${company.name} — our mission, values, and the team behind the software.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>About Us</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We&apos;re a team of engineers who <span className="text-gradient">obsess over craft</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              {company.name} was founded on a simple belief: great software comes from
              small, senior teams who care as much about the business outcome as the code
              itself.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <StatBar />
          </div>
        </Container>
      </section>

      <section id="story" className="scroll-mt-24 py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Our Story" title="Built by engineers, for builders" />
              <p className="mt-6 text-base leading-7 text-muted">
                {company.name} started in a two-person home office in 2018 with a single
                client and a shared frustration with agencies that prioritized invoices over
                outcomes. Eight years later, we&apos;re a distributed team of senior engineers,
                designers, and product strategists working with startups and enterprises
                across fintech, healthcare, logistics, and retail.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                We stayed intentionally small. Every project is staffed with engineers who
                have shipped production software for years — not a rotating bench of
                juniors. That&apos;s how we keep our 98% client retention rate.
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="Our Mission" title="Software that earns its keep" />
              <p className="mt-6 text-base leading-7 text-muted">
                We measure our work by the metrics that matter to your business: conversion
                rate, uptime, time-to-market, and customer retention — not just tickets
                closed. Every engagement starts with understanding what success looks like
                for you.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                Whether we&apos;re building your first MVP or modernizing a decade-old legacy
                system, our goal is the same: ship software that earns its keep long after
                we hand over the keys.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-24">
        <Container>
          <SectionHeading eyebrow="What We Value" title="The principles behind every project" center />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="leadership" className="scroll-mt-24 py-24">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The team steering the ship" center />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-accent-2/30 ring-1 ring-border" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center glow sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              We&apos;re always looking for ambitious projects and great engineers. Reach out
              and let&apos;s talk.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
