import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { Container, SectionHeading, PrimaryButton, Card, Eyebrow } from "@/components/ui";
import { perks, openRoles, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles and culture at ${company.name} — a remote-first software engineering team.`,
};

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build your career <span className="text-gradient">alongside great engineers</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              We&apos;re a small, senior, remote-first team that cares about craft. If that
              sounds like your kind of place, we&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Why Join Us" title="What it's like to work here" center />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <Card key={perk.title}>
                <h3 className="text-lg font-semibold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{perk.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-24">
        <Container>
          <SectionHeading eyebrow="Open Roles" title="Current openings" center />
          <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name="briefcase" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted">
                      {role.department} &middot; {role.location} &middot; {role.type}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent"
                >
                  Apply
                  <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center glow sm:px-16">
            <SectionHeading
              center
              eyebrow="Don't See Your Role?"
              title="We're always open to meeting great people"
              description="Send us your resume and tell us what you'd want to work on — we review every application."
            />
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
