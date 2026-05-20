import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Bounty Program",
  description:
    "Paid work on Levi's data. Specific asks and open finds. We pay for substantive work.",
};

const tiers = [
  {
    tier: "Tier 1",
    name: "Interesting find",
    range: "$500–$2,000",
    desc:
      "Something we didn't know that adds material context to the case — a literature connection we missed, a pattern in the data we hadn't seen, a hypothesis worth carrying forward.",
  },
  {
    tier: "Tier 2",
    name: "Meaningful find",
    range: "$2,000–$10,000",
    desc:
      "A finding that changes our ranking of the leading diagnostic or treatment hypotheses, or that meaningfully reframes a piece of the case.",
  },
  {
    tier: "Tier 3",
    name: "Definitive find",
    range: "$25,000–$100,000",
    desc:
      "A finding that establishes Levi's root cause, identifies a treatment that works for him, or otherwise resolves a major open question.",
  },
];

const bounties = [
  {
    n: "01",
    title: "Quantitative HFO analysis of Levi's EEGs",
    range: "$3,000–$5,000",
    body:
      "Detect, quantify, and characterize high-frequency oscillations in the available recordings, particularly post-pulse. Output: a report with method, results, and comparison across recordings. Open code earns the higher end.",
  },
  {
    n: "02",
    title: "Spindle density and morphology analysis",
    range: "$2,000–$4,000",
    body:
      "Quantify sleep spindle density, morphology, and topography across recordings as a marker of thalamocortical recovery. Output: report plus code.",
  },
  {
    n: "03",
    title: "Slow-wave slope analysis",
    range: "$2,000–$4,000",
    body:
      "Compute slow-wave slope as a marker of synaptic homeostasis and recovery. Output: report plus code.",
  },
  {
    n: "04",
    title: "Source localization of residual spike-wave activity",
    range: "$3,000–$7,000",
    body:
      "Identify the cortical generators of the residual interictal activity on post-treatment EEG, particularly the right-temporal-predominant pattern. Output: localization report and methodological description.",
  },
  {
    n: "05",
    title: "Deep mosaic-sensitive re-analysis of available genetic data",
    range: "$5,000–$15,000",
    body:
      "Run mosaic variant calling on the trio WGS BAM/FASTQ files for the canonical PROS / mTOR-pathway genes (PIK3CA, AKT1, AKT3, PIK3R2, MTOR, NPRL2, TBC1D7, CCND2) and any additional cellular-overgrowth or somatic-epilepsy genes you think are worth interrogating. Output: variant call set plus interpretive report.",
  },
  {
    n: "06",
    title: "Episignature analysis on existing methylation data",
    range: "$2,000–$5,000",
    body:
      "Apply published episignatures relevant to Levi's overgrowth phenotype (Sotos, Weaver, DNMT3A/TBRS, BWS, Kabuki, ATRX, etc.) using publicly available classifiers. Output: classification result with confidence, and recommendation if a new methylation run would change the call.",
  },
  {
    n: "07",
    title: "Specialized neuroradiology re-read of the April 2026 MRI",
    range: "$1,000–$3,000",
    body:
      "Read for subtle focal cortical dysplasia or mosaic-mTORopathy features and re-characterization of the right-greater-than-left periventricular white-matter signal. Plus expenses.",
  },
  {
    n: "08",
    title: "Cytokine interpretation across serum and CSF panels",
    range: "$1,500–$3,000",
    body:
      "Read the published cytokine panels in context of the seronegative-neuroinflammation literature and recommend the next testing step. Output: interpretive memo with prioritized recommendations.",
  },
  {
    n: "09",
    title: "Drug repurposing screen against Levi's phenotype",
    range: "$3,000–$7,000",
    body:
      "Generate a ranked list of repurposing candidates from currently-approved medications, with mechanism, dose-route considerations (Levi cannot swallow pills — liquid, injectable, IV, sublingual, buccal, nasal, transdermal, or crushable immediate-release only), expected side-effect profile, and evidence base.",
  },
  {
    n: "10",
    title: "Comprehensive case re-read for missed diagnoses",
    range: "$1,000–$3,000",
    body:
      "Read everything on this site and write a memo on what you think we have missed or under-weighted, with reasoning. If the read leads to a Tier 2 or Tier 3 find, the open-finds tier applies on top.",
  },
  {
    n: "11",
    title: "Hackathon / multi-person sprint",
    range: "Custom",
    body:
      "If a credible group wants to organize a multi-day or multi-week sprint on Levi's data, we will fund it. Reach out to discuss scope.",
  },
];

export default function BountiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bounty Program"
        title="If you do work that helps Levi, we will pay you."
        lede="Levi's case file is too rich to fully analyze ourselves. We know — statistically, almost for certain — that there are people in the world right now who could look at this data and see things we haven't. We want to make it worth their time."
      />

      {/* How the structure works */}
      <section className="border-b border-border-soft py-16">
        <Container>
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            How the structure works
          </h2>
          <div className="prose mt-6">
            <p>Bounties come in two flavors:</p>
            <ol>
              <li>
                <strong>Specific asks.</strong> Concrete tasks where we know
                what we want done. Listed below with bounty amounts,
                eligibility criteria, and submission process.
              </li>
              <li>
                <strong>Open finds.</strong> Open-ended — if you look at
                Levi&apos;s data and find something we don&apos;t already know,
                we want to pay you. Tiered by impact.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Open finds tiers */}
      <section className="border-b border-border-soft py-16">
        <Container size="wide">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Open-finds tiers
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight">
            What &ldquo;a find&rdquo; means.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            We define &ldquo;find&rdquo; inclusively. A finding that turns out,
            on follow-up, not to hold up is still eligible for the lower tier
            if it was substantive work and led us somewhere useful.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiers.map((t, i) => (
              <article
                key={t.tier}
                className={`relative rounded-lg border p-7 ${
                  i === 2
                    ? "border-accent bg-surface shadow-[0_12px_32px_-18px_rgba(138,74,61,0.4)]"
                    : "border-border bg-surface"
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-soft">
                  {t.tier}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-4 font-mono text-2xl font-medium tabular-nums text-accent">
                  {t.range}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {t.desc}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-muted">
            We define &ldquo;we don&apos;t already know&rdquo; by what is
            published on this site at the time of the submission. If you
            propose something already there, you can still help — we&apos;ll
            engage — but it won&apos;t earn a bounty.
          </p>
        </Container>
      </section>

      {/* Specific bounties list */}
      <section className="py-16">
        <Container size="wide">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Specific bounties
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight">
            Initial set.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Anchored to currently open analytical questions in Levi&apos;s
            case. We&apos;ll add and adjust as the case evolves.
          </p>

          <ol className="mt-12 divide-y divide-border-soft border-y border-border-soft">
            {bounties.map((b) => (
              <li
                key={b.n}
                className="grid gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10"
              >
                <span className="font-mono text-sm text-muted-soft md:pt-1">
                  {b.n}
                </span>
                <div className="md:max-w-3xl">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
                <span className="font-mono text-base font-medium tabular-nums text-accent md:pt-1.5">
                  {b.range}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Eligibility & process */}
      <section className="border-t border-border-soft bg-surface-warm/40 py-16">
        <Container>
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            Eligibility &amp; process
          </h2>
          <div className="prose mt-6">
            <ul>
              <li>
                Anyone can submit. You do not need to be a credentialed
                researcher or clinician.
              </li>
              <li>
                Submissions should be reproducible (we should be able to follow
                your method) and clearly written.
              </li>
              <li>
                Submit by email. Include a short description, the work product,
                and how you would like to be paid.
              </li>
              <li>We aim to respond within two weeks.</li>
            </ul>

            <h3>What we don&apos;t pay for</h3>
            <ul>
              <li>
                <strong>Speculative emails.</strong> &ldquo;You should look
                into X&rdquo; with no attached work is welcome — send it — but
                is not bounty-eligible.
              </li>
              <li>
                <strong>Generic AI output.</strong> If you used a large
                language model to do the analysis, that&apos;s fine and we do
                too — but you have to actually verify the output yourself and
                stand behind it. We can tell the difference between a careful
                AI-assisted analysis and an uncritical chatbot dump, and we
                will not pay for the latter.
              </li>
              <li>
                <strong>Things we have already published.</strong> Check
                what&apos;s already in the data vault and our analysis before
                submitting.
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/stay-in-touch"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Get in touch about a submission
            </Link>
            <Link
              href="/data"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              See the data first →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
