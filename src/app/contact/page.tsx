import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import Icon from "@/components/Icon";
import { company } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name} to discuss your web or app development project.`,
};

export default function ContactPage() {
  return (
    <section className="bg-grid py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build <span className="text-gradient">something great</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Tell us about your project and one of our engineers will follow up within one
            business day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name="mail" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Email</h3>
              <a href={`mailto:${company.email}`} className="mt-1 block text-sm text-muted hover:text-accent">
                {company.email}
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name="phone" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Phone</h3>
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 block text-sm text-muted hover:text-accent"
              >
                {company.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name="pin" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">Office</h3>
              <p className="mt-1 text-sm text-muted">{company.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
