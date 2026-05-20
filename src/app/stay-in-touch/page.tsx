import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SignupForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Stay in Touch",
  description:
    "Sign up for updates on Levi's progress, new data, new bounties, and pieces on how we're approaching all of this.",
};

const CONTACT_EMAIL = "hello@example.com";

export default function StayInTouchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay in Touch"
        title="Get the updates."
        lede="We will be publishing updates over time — Levi's progress, new data, new bounties, new findings, and occasionally pieces on how we're approaching all of this. Sign up below."
      />

      <section className="py-16">
        <Container>
          <SignupForm />
        </Container>
      </section>

      <section className="border-t border-border-soft bg-surface-warm/40 py-14">
        <Container>
          <h2 className="font-serif text-2xl font-medium tracking-tight">
            Direct contact
          </h2>
          <p className="mt-3 text-muted">
            If you would rather just email us:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent underline decoration-1 underline-offset-2 hover:text-accent-soft"
            >
              {CONTACT_EMAIL}
            </a>
            . We read everything. We try to respond to substantive messages,
            though volume may eventually require us to triage.
          </p>

          <h3 className="mt-10 font-serif text-lg font-semibold tracking-tight">
            What we&apos;ll do with your email
          </h3>
          <p className="mt-2 text-muted">
            We will use it to send the updates you signed up for, and nothing
            else. We will not sell, share, or rent the list. You can
            unsubscribe at any time from any email we send.
          </p>
        </Container>
      </section>
    </>
  );
}
