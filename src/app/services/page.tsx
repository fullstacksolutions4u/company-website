import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { Container, SectionHeading, PrimaryButton, Eyebrow } from "@/components/ui";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile app development, backend & cloud engineering, UI/UX design, custom software, and DevOps services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Full-stack engineering, <span className="text-gradient">end to end</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              From the first line of code to the millionth user, our team covers the entire
              stack — web, mobile, backend, cloud, and design.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-20">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 items-start gap-10 lg:grid-cols-5"
              >
                <div className="lg:col-span-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-foreground">
                    {String(idx + 1).padStart(2, "0")}. {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted">{service.summary}</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-3">
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/40 py-24">
        <Container>
          <SectionHeading eyebrow="How We Work" title="From kickoff to launch" center />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="text-5xl font-bold text-border">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center glow sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us what you&apos;re trying to build — we&apos;ll help you scope the right
              solution.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Talk to an Engineer</PrimaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
