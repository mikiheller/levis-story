import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Data Vault",
  description:
    "Levi's clinical data, organized by type. Records, imaging, genetics, EEG, labs, growth, behavioral observations.",
};

type DataSection = {
  id: string;
  label: string;
  status: "available" | "partial" | "soon";
  blurb: string;
};

const sections: DataSection[] = [
  {
    id: "eeg",
    label: "EEG",
    status: "available",
    blurb:
      "Raw EEG files (where releasable), clinical reports, our own summaries by recording. As of mid-2026 we have multiple long-form recordings including a clean continuous overnight study. We are particularly interested in quantitative work on high-frequency oscillations, spindle morphology and density, slow-wave slope, sleep architecture, and source localization of the residual spike-wave activity.",
  },
  {
    id: "mri",
    label: "MRI",
    status: "available",
    blurb:
      "DICOM and reports for the April 2026 MRI (with MR spectroscopy). The radiology read is on file with our annotations. We are particularly interested in specialist re-reads for subtle focal cortical dysplasia or mosaic-mTORopathy features, and quantitative interpretation of the right-greater-than-left periventricular white-matter signal.",
  },
  {
    id: "genetics",
    label: "Genetics",
    status: "available",
    blurb:
      "Reports from Stanford trio exome (May 2025), GeneDx trio whole-genome sequencing (January 2026), GeneDx genome reanalysis (April 2026), Quest ClariSure SNP microarray (June 2024), Invitae 320-gene epilepsy panel (April 2026), and Invitae 53-gene overgrowth panel (April 2026). All standard panels and broad sequencing to date are negative. Our suspicion centers on low-VAF mosaicism not detectable at standard sequencing depth, methylation/imprinting findings not captured by sequencing, or non-coding variation. Selected raw data may be available on request.",
  },
  {
    id: "labs",
    label: "Labs",
    status: "available",
    blurb:
      "All laboratory values to date, including hematology, chemistry, inflammatory markers, cytokine panels (serum and CSF), autoimmune panels, lumbar puncture findings, hormonal workup, and biomarker panels including NfL.",
  },
  {
    id: "growth",
    label: "Growth",
    status: "available",
    blurb:
      "Longitudinal height, weight, head circumference, and BMI from birth through the present, with percentile crossings annotated. Bone age (UCSF May 2026), both the manual gestalt read and a BoneXpert quantitative re-analysis of the same DICOM.",
  },
  {
    id: "photos-videos",
    label: "Photos & video",
    status: "available",
    blurb:
      "Time-stamped photos and short video segments documenting Levi's developmental trajectory, including pre-regression baseline, mid-regression, and post-treatment changes. Selected video may be redacted or watermarked at the family's discretion.",
  },
  {
    id: "behavioral",
    label: "Behavioral tracking",
    status: "partial",
    blurb:
      "Structured behavioral and developmental observations, including ABAS-3 and VB-MAPP trajectories, ABA progress notes, and family-side behavior diaries.",
  },
  {
    id: "family-history",
    label: "Family history & parental anchors",
    status: "available",
    blurb:
      "Parental anthropometrics (heights, head circumference, BMI), family medical history, sibling information where relevant.",
  },
  {
    id: "providers",
    label: "Provider directory & consult history",
    status: "available",
    blurb: "Where Levi has been seen, by whom, for what.",
  },
  {
    id: "sleep",
    label: "Sleep tracking",
    status: "soon",
    blurb: "Sleep tracker data, including raw exports where the device permits.",
  },
  {
    id: "cgm",
    label: "Continuous glucose monitoring",
    status: "soon",
    blurb: "As that stream comes online.",
  },
  {
    id: "stool",
    label: "Stool / GI tracking",
    status: "soon",
    blurb: "As that stream comes online.",
  },
  {
    id: "remi",
    label: "Remi",
    status: "soon",
    blurb: "As that stream comes online.",
  },
  {
    id: "oura",
    label: "Oura ring",
    status: "soon",
    blurb: "As that stream comes online.",
  },
  {
    id: "apple-watch",
    label: "Apple Watch",
    status: "soon",
    blurb: "As that stream comes online.",
  },
  {
    id: "headband-eeg",
    label: "Headband EEG",
    status: "soon",
    blurb: "If/when a wearable EEG stream is set up.",
  },
];

const statusConfig = {
  available: {
    label: "Available",
    className: "bg-accent/10 text-accent",
  },
  partial: {
    label: "Partial",
    className: "bg-amber-50 text-amber-800",
  },
  soon: {
    label: "Soon",
    className: "bg-surface-warm text-muted",
  },
} as const;

export default function DataVaultPage() {
  return (
    <>
      <PageHeader
        eyebrow="Data Vault"
        title="The data lives here."
        lede="Everything we have on Levi that we are publishing, organized by type. If you want the case at a glance, start at the homepage. If you want the strategy, see Philosophy. If you want to actually do work, start here."
      />

      {/* How it's organized */}
      <section className="border-b border-border-soft py-14">
        <Container>
          <h2 className="font-serif text-2xl font-medium tracking-tight">
            What you&apos;ll find
          </h2>
          <p className="mt-4 text-muted">
            Each section has three layers, in increasing order of how much
            opinion they contain:
          </p>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
              <span className="font-mono text-xs font-medium text-accent">
                01
              </span>
              <div>
                <p className="font-medium text-foreground">Raw data</p>
                <p className="text-[15px] text-muted">
                  Downloadable where we can release it.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-xs font-medium text-accent">
                02
              </span>
              <div>
                <p className="font-medium text-foreground">
                  Our extracted &amp; normalized version
                </p>
                <p className="text-[15px] text-muted">
                  Cleaner, easier to query, with provenance to the raw source.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-xs font-medium text-accent">
                03
              </span>
              <div>
                <p className="font-medium text-foreground">
                  Our current analysis &amp; open questions
                </p>
                <p className="text-[15px] text-muted">
                  What we have concluded, what we are still chasing, and what
                  we&apos;d most like outside help on.
                </p>
              </div>
            </li>
          </ol>
        </Container>
      </section>

      {/* Sections */}
      <section className="py-16">
        <Container size="wide">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Sections
            </h2>
            <a
              href="#bulk-download"
              className="text-sm font-medium text-accent hover:underline"
            >
              Bulk download →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((s) => {
              const sc = statusConfig[s.status];
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
                >
                  <header className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                      {s.label}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ${sc.className}`}
                    >
                      {sc.label}
                    </span>
                  </header>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  {s.status !== "soon" && (
                    <p className="mt-4 text-sm font-medium text-foreground/70">
                      <span className="text-muted-soft">Coming:</span> raw
                      files, normalized export, our analysis.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How to use */}
      <section
        id="bulk-download"
        className="border-t border-border-soft bg-surface-warm/40 py-16"
      >
        <Container>
          <h2 className="font-serif text-3xl font-medium tracking-tight">
            How to use it
          </h2>
          <div className="prose mt-6">
            <p>
              If you want to download everything, a bulk download archive is
              coming. If you want to browse a specific category, click into
              the section above. If you want to know what we have already
              concluded and what we are still chasing, see our case overview
              and differential — both linked from the homepage.
            </p>
            <p>
              If you want to do paid work on this data, see{" "}
              <a href="/bounties">the bounty program</a>.
            </p>

            <h3>What we ask</h3>
            <p>
              Tell us what you find. Even if it is small. Even if it
              doesn&apos;t pan out. Especially if it contradicts something we
              have already concluded.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
