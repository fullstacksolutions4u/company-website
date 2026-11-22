"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { submitEnquiry } from "@/lib/web3forms";

const budgets = ["Under $10k", "$10k - $50k", "$50k - $150k", "$150k+"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "submitted" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    // Hidden honeypot field: real users never fill it in.
    if (data.botcheck) return;
    delete data.botcheck;

    setStatus("sending");
    try {
      await submitEnquiry(data);
      setStatus("submitted");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground">Message received</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
          Thanks for reaching out. A member of our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Cooper"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Mobile number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\-\s()]{7,20}"
            title="Enter a valid mobile number"
            required
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Inc."
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground">
            Project budget
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build?"
          className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>
      {status === "error" && (
        <p role="alert" className="text-center text-sm text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}
