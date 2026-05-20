"use client";

import { useState } from "react";

const roles = [
  "Parent / family member of a child with a similar situation",
  "Clinician",
  "Researcher / scientist",
  "AI / ML engineer",
  "Citizen scientist",
  "Friend or family of ours",
  "Just curious",
];

const interests = [
  "Levi's progress and family updates",
  "The science (DEE-SWAS / ESES, brain repair, mosaic genetics, overgrowth, etc.)",
  "New data dropping in the vault",
  "New bounties",
  "Drug repurposing and treatment experiments",
  "AI / ML angles — how we're using AI, methodology posts",
  "Open-data and patient-led research",
  "Hackathon and sprint opportunities",
  "Everything",
];

export function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Stubbed for now — when an email backend is wired up (Resend, Loops,
    // ConvertKit, etc.), POST the form data here.
    await new Promise((r) => setTimeout(r, 600));

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-surface p-8 sm:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Thanks
        </p>
        <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight">
          You&apos;re on the list.
        </h2>
        <p className="mt-3 text-muted">
          We&apos;ll be in touch when we have updates worth sending. In the
          meantime, the data vault and bounty program are open and don&apos;t
          require an account.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Email */}
      <Field
        label="Email address"
        required
        htmlFor="email"
      >
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </Field>

      {/* Name */}
      <Field label="Name" htmlFor="name" optional>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </Field>

      {/* Roles */}
      <Field
        label="How would you describe yourself?"
        optional
        helper="Pick any that apply."
      >
        <div className="grid gap-2 sm:grid-cols-2">
          {roles.map((r) => (
            <Checkbox key={r} name="role" value={r} label={r} />
          ))}
        </div>
      </Field>

      {/* Interests */}
      <Field
        label="What are you interested in hearing about?"
        helper="Pick any that apply."
      >
        <div className="grid gap-2 sm:grid-cols-2">
          {interests.map((r) => (
            <Checkbox key={r} name="interest" value={r} label={r} />
          ))}
        </div>
      </Field>

      {/* Free-text */}
      <Field
        label="Anything you want to tell us?"
        htmlFor="message"
        optional
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Sign up"}
        </button>
        <p className="text-xs text-muted-soft">
          We will only use your email for the updates you signed up for.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  helper,
  required,
  optional,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  helper?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline gap-2 text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-accent">*</span>}
        {optional && (
          <span className="text-xs font-normal text-muted-soft">
            (optional)
          </span>
        )}
      </label>
      {helper && <p className="mt-1 text-xs text-muted-soft">{helper}</p>}
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Checkbox({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) {
  return (
    <label className="flex items-start gap-3 rounded-md border border-border-soft bg-surface px-3 py-2.5 text-[15px] leading-snug text-foreground transition-colors hover:border-accent/60 has-[:checked]:border-accent/70 has-[:checked]:bg-accent/5">
      <input
        type="checkbox"
        name={name}
        value={value}
        className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--accent)]"
      />
      <span>{label}</span>
    </label>
  );
}
