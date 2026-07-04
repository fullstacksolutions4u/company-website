import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { Container, SectionHeading, PrimaryButton, Card, Eyebrow } from "@/components/ui";
import { techCategories, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technologies",
  description: `The frontend, backend, mobile, cloud, and data technologies ${company.name} builds with.`,
};

export default function TechnologiesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Technologies</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A modern stack, <span className="text-gradient">chosen deliberately</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              We stay close to a curated set of proven technologies rather than chasing
              every new framework — so what we build is maintainable for years, not months.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((category) => (
              <Card key={category.slug} id={category.slug} className="scroll-mt-24">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="cube" className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-foreground">{category.title}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
              eyebrow="Don't See Your Stack?"
              title="We adapt to what your team already runs"
              description="Have an existing codebase or a specific technology requirement? We'll meet you where you are."
            />
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Discuss Your Stack</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
