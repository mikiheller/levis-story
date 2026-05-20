import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "How we think about Levi's case — including why we voluntarily waived his medical privacy.",
};

const principles = [
  {
    n: "01",
    title: "Results over everything.",
    blurb:
      "The only metric that matters is what happens to Levi. We are not optimizing for ethics theater, institutional comfort, or paper-trail aesthetics.",
    anchor: "results",
  },
  {
    n: "02",
    title: "Speed is the most important variable.",
    blurb:
      "Neuroplasticity has a closing window. Time is the resource we cannot get back.",
    anchor: "speed",
  },
  {
    n: "03",
    title: "We are willing to invent.",
    blurb:
      "There is no settled algorithm for Levi's case. We read primary literature, reason from mechanism, and act without waiting for a guideline.",
    anchor: "invent",
  },
  {
    n: "04",
    title: "We run parallel paths.",
    blurb:
      "Sequential is too slow. We accept the cost of figuring out which intervention worked later, in exchange for not burning months between attempts.",
    anchor: "parallel",
  },
  {
    n: "05",
    title: "We reason from first principles.",
    blurb:
      "We want to understand the mechanism well enough to generate our own hypotheses, not just borrow them from the literature.",
    anchor: "first-principles",
  },
  {
    n: "06",
    title: "We are aggressive about experimentation when the risk is low.",
    blurb:
      "Off-label drugs, repurposed drugs, supplements, non-standard labs — all on the table when the risk-benefit math is favorable.",
    anchor: "experimentation",
  },
  {
    n: "07",
    title: "We collect everything.",
    blurb:
      "Every datapoint we don't capture today is one we may regret tomorrow.",
    anchor: "collect",
  },
  {
    n: "08",
    title: "We are radically transparent.",
    blurb:
      "Levi's data is public. We have voluntarily waived the privacy protections he would otherwise have. We did this on purpose.",
    anchor: "privacy",
  },
  {
    n: "09",
    title: "We Founder-Mode this disease.",
    blurb:
      "We don't delegate the synthesis or the strategy. The providers will not coordinate themselves; we do that work.",
    anchor: "founder-mode",
  },
  {
    n: "10",
    title: "We use AI heavily, and we are disciplined about it.",
    blurb:
      "LLMs do an enormous amount of the synthesis on this site. We have an explicit workflow for catching their failure modes.",
    anchor: "ai",
  },
  {
    n: "11",
    title: "We push back, and we want you to push back too.",
    blurb:
      "Disagreement is welcome. Polite agreement that misses the right answer is not.",
    anchor: "pushback",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Philosophy"
        title="How we think about this case."
        lede="Levi's situation is rare, mechanistically open, and time-sensitive. The playbooks medicine has for problems like his were built for slower-moving diseases in adults, or for diseases where the genetic story is already known. We have had to build our own approach. Here it is."
      />

      {/* Principles grid */}
      <section className="border-b border-border-soft py-16 sm:py-20">
        <Container size="wide">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Our guiding principles
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            The one-page version.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Each is expanded below. Click a principle to jump there.
          </p>

          <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.n}>
                <a
                  href={`#${p.anchor}`}
                  className="group block border-l-2 border-border-soft pl-5 transition-colors hover:border-accent"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-soft">
                      {p.n}
                    </span>
                    <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Long-form expansions */}
      <article className="py-16 sm:py-20">
        <Container>
          <div className="prose">
            <p className="text-xl leading-relaxed text-muted">
              The rest of this page is the longer version of each principle.
            </p>

            <h2 id="results">1. Results over everything</h2>
            <p>
              We are running this case to get results. That is the entire
              point. The medical and research systems that surround a child
              like Levi are heavily weighted toward avoiding bad outcomes for
              the institution — lawsuit avoidance, IRB optics, regulatory
              caution, professional reputational risk — even when the cost is
              delayed care for the child. We do not weight those factors the
              way the system does. We weight outcomes for Levi.
            </p>
            <p>
              This shows up in how we make decisions. We try things that have
              not been studied in DEE-SWAS if the mechanism is reasonable and
              the risk profile is acceptable. We pay for labs that aren&apos;t
              clinically validated when we think the additional signal is
              worth it. We move on a faster cadence than a typical clinical
              workup. We are publicly sharing data that the default rules
              would suggest we keep private.
            </p>
            <p>
              We do not think this posture is reckless. We think it is what
              the situation actually calls for.
            </p>

            <h2 id="speed">2. Speed is the most important variable</h2>
            <p>
              Children&apos;s brains have a window. Neuroplasticity is highest
              in early childhood, declines through adolescence, and continues
              to narrow into adulthood. The DEE-SWAS literature is unambiguous
              on this point: the longer a child spends in continuous
              sleep-activated spike-wave activity, the worse the cognitive
              outcome, and the recovery curve is not symmetric with the
              regression curve. Skills lost can take much longer to return
              than they took to disappear, and some skills do not return at
              all.
            </p>
            <p>
              Levi is five. He still has substantial plasticity. He may not
              have it in two years. We are running this case at startup speed
              because the calendar is the most expensive variable in the
              equation and it is moving against us regardless of what we do.
            </p>

            <h2 id="invent">3. We are willing to invent</h2>
            <p>
              The category Levi sits in — DEE-SWAS with no identified genetic
              cause, in a child with a striking overgrowth phenotype and a
              hypothalamic-pattern overlay — does not have a settled treatment
              algorithm. There are guidelines for the seizure suppression
              piece. There is almost nothing for the recovery piece. The
              genetic and mechanistic question is wide open: standard panels
              have come back negative, and the most informative tests (deep
              mosaic-sensitive sequencing, episignature analysis, extended CSF
              immune panels) are not part of standard care.
            </p>
            <p>
              We are not waiting for someone to write the playbook. We are
              reading the primary literature, reasoning from mechanism,
              building hypotheses, and acting on the ones with a favorable
              expected-value calculation given Levi&apos;s specific biology.
            </p>

            <h2 id="parallel">4. We run parallel paths</h2>
            <p>
              When a sequential approach would burn months, we run things in
              parallel. We would rather have two labs running a similar assay
              with slightly different protocols and have to reconcile their
              results, than wait for one to finish and discover it
              didn&apos;t answer the question. We would rather give three
              carefully chosen interventions concurrently and later have the
              problem of &ldquo;which one worked&rdquo; than space them out
              by months and burn the developmental window finding out.
            </p>
            <p>
              The cost of parallel paths is interpretive complexity. The cost
              of sequential paths is time. For Levi, time is the more
              expensive resource. We accept the interpretive complexity and
              design as we go to keep it tractable — staggered start dates,
              pre-defined response metrics, frequent measurement, careful
              documentation. Where we can&apos;t separate the contributions
              of two interventions, we live with that and move on.
            </p>

            <h2 id="first-principles">5. We reason from first principles</h2>
            <p>
              We try to understand the mechanism well enough that we have our
              own ideas of what to try — not just options drawn from the
              literature, but ideas that follow from the underlying biology.
              If something has not been studied in DEE-SWAS but is
              mechanistically reasonable given Levi&apos;s phenotype, low
              risk, and available delivery route, we will consider it. If
              something has been studied but the study population, dose,
              timing, or endpoint does not actually match Levi, we will not
              treat that study as decisive.
            </p>
            <p>
              This is the same posture we use when evaluating advice from
              individual clinicians: useful as input, not load-bearing as
              conclusion. We listen carefully, ask hard questions about the
              underlying reasoning, and decide based on the merits of the
              argument rather than the credential of the person making it.
            </p>

            <h2 id="experimentation">
              6. We are aggressive about experimentation when the risk is low
            </h2>
            <p>
              Off-label use of approved drugs, repurposed drugs from adjacent
              diseases, supplements with real mechanistic stories, labs that
              aren&apos;t clinically validated but are credibly run, biomarker
              panels that aren&apos;t yet in standard practice — all on the
              table when the risk-benefit math is favorable.
            </p>
            <p>
              Our threshold is roughly: if the worst plausible outcome is
              minor and reversible, and the best plausible outcome is
              meaningful, we&apos;ll try it. If the worst plausible outcome is
              serious, we want a stronger story. We are not willing to take
              large risks with Levi&apos;s safety. We are very willing to take
              small ones for asymmetric upside, and we do not need a published
              trial to authorize that decision.
            </p>

            <h2 id="collect">7. We collect everything</h2>
            <p>
              Every datapoint we don&apos;t capture today is one we may regret
              tomorrow. We are aggressive about collecting and preserving
              everything we reasonably can: clinical records, raw imaging, raw
              genetic data, EEG files, lab values, growth measurements,
              behavioral observations, sleep data, photos, videos. Some of it
              will turn out to matter in ways we can&apos;t predict now. Some
              of it will turn out not to. The collection is cheap; the regret
              of having missed a window is not.
            </p>
          </div>

          {/* Privacy section - distinct treatment because it's the most important */}
          <section
            id="privacy"
            className="my-20 rounded-lg border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Principle 8 · The long version
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              We are radically transparent.
              <br />
              <span className="text-muted">
                We have voluntarily waived our privacy.
              </span>
            </h2>

            <div className="prose mt-8">
              <p>
                This is the part of our philosophy that requires the most
                explanation, so we&apos;ll spend longer on it.
              </p>

              <h3>Short version</h3>
              <p>
                We have decided to publish Levi&apos;s clinical data — records,
                imaging, genetics, EEG, labs, growth, behavioral observations,
                photos, videos, longitudinal device streams — publicly. This
                includes data that would normally be protected under HIPAA. We
                have voluntarily set aside the privacy protections that the
                law would otherwise extend to Levi&apos;s medical information.
                We did this on purpose, after thinking about it carefully,
                because public sharing gets more capable people looking at
                Levi&apos;s case faster, which improves the odds of resolving
                it.
              </p>

              <h3>Why public, not credentialed-researchers-only</h3>
              <p>
                The credentialed-researcher data-sharing model has a strong
                skew — some institutions and researchers have access, most do
                not. Pattern recognition on rare phenotypes benefits enormously
                from more eyes — not just more credentialed eyes, but more
                eyes generally, including citizen scientists, AI / ML
                practitioners, fellow parents, and clinicians outside
                Levi&apos;s referral network. The marginal benefit of one more
                capable person seeing Levi&apos;s complete data is high, and
                we are not willing to let credentialing gates throttle that.
              </p>

              <h3>What we are sharing</h3>
              <p>
                Clinical records and notes. MRI, including raw DICOM where
                available. Reports from all sequencing performed to date
                (exome, two rounds of genome, panels, microarray, methylation
                work as it comes in); selected raw read data where we judge
                the additional analysis upside is meaningful. Raw EEG files
                where we can release them. All laboratory values. Growth and
                physical measurements. Sleep, behavioral, and longitudinal
                device data as those streams come online. Photos and video.
                Our own differential, ranked diagnostics and treatments, and
                research synthesis.
              </p>

              <h3>What we are not sharing</h3>
              <p>
                Family members&apos; raw genetic data is not shared in raw
                form (the trio sequencing included Jake&apos;s and Miki&apos;s
                DNA, and any results derived from it are reported in ways that
                do not expose individual parental variants). The gestational
                carrier&apos;s identity is not shared. Live-location
                information is not shared.
              </p>

              <h3>HIPAA, specifically</h3>
              <p>
                HIPAA constrains <em>covered entities</em> (hospitals, clinics,
                insurers, and their business associates), not patients
                themselves. A family choosing to publish their own child&apos;s
                medical records is not violating HIPAA, because the family is
                not a covered entity. What the family is doing is voluntarily
                declining the protection HIPAA would otherwise provide if a
                covered entity tried to disclose this same information. We are
                not asking any covered entity to violate HIPAA on our behalf;
                when we obtain records from providers, we use the proper
                release-of-information processes and then publish what we have
                lawfully received.
              </p>

              <h3>What we ask of you</h3>
              <p>
                If you use Levi&apos;s data, please tell us what you find —
                this is the entire point of putting it out here. Please do not
                re-identify family members whose individual data we have
                intentionally not exposed. Please do not use Levi&apos;s data
                to harm Levi or his family.
              </p>
            </div>
          </section>

          <div className="prose">
            <h2 id="founder-mode">9. We Founder-Mode this disease</h2>
            <p>
              We do not delegate the synthesis. We read the reports. We read
              the studies. We track the open questions. We push on the things
              that aren&apos;t getting pushed on. We coordinate across the
              providers ourselves, because the providers do not coordinate
              with each other by default. We are aware that this approach is
              unusual, sometimes uncomfortable for the clinicians involved,
              and exhausting. We also believe it is the only way a case like
              Levi&apos;s actually moves.
            </p>
            <p>
              If you are reading this and you know someone in our situation:
              we cannot recommend Founder Mode to everyone, but we can
              recommend it to anyone who can muster it. The system is not
              optimized to do this for you.
            </p>

            <h2 id="ai">10. We use AI heavily, and we are disciplined about it</h2>
            <p>
              A meaningful portion of the synthesis on this site — the
              timeline, the differential, the ranked diagnostics and
              treatments, the research notes — is produced with heavy AI
              assistance, primarily large language models prompted in
              disciplined ways. This is one of the reasons we can run a case
              at this depth as a family of two with day jobs.
            </p>
            <p>
              We are not naive about the failure modes. AI systems hallucinate,
              confidently misremember, conflate similar entities, and
              confabulate plausible-sounding details that are wrong. We
              mitigate this with workflow discipline: every claim is anchored
              to source files in a vault we control; every clinical fact
              requires provenance; synthesis is a derived layer on top of
              canonical YAML and Markdown records rather than the model
              &ldquo;remembering&rdquo; anything; medication, dose, and result
              claims are cross-checked against the original documents before
              acting on them; we maintain an explicit list of standing
              corrections so old errors do not creep back in; and we are
              aggressive about catching the model in errors and updating the
              workflow so the same error does not happen twice.
            </p>
            <p>
              The result is a workflow that is genuinely faster and more
              thorough than what a non-AI version of us could do, without
              surrendering ground truth to a system that does not have it. We
              will write more about how this is structured over time — it is
              an interesting question for the broader project of patient-led
              research.
            </p>

            <h2 id="pushback">11. We push back, and we want you to push back</h2>
            <p>
              A philosophy that doesn&apos;t tolerate disagreement is just an
              aesthetic. If you read something on this site and think we are
              wrong — about the case, the science, the interpretation, the
              strategy, anything — we want to hear it. There is a{" "}
              <a href="/stay-in-touch">stay-in-touch</a> form. There is a{" "}
              <a href="/bounties">bounty program</a>. There is an email
              address at the bottom of every page. If you have a contrarian
              read, send it. If you think we are missing a diagnosis, missing
              a paper, overweighting a finding, or under-weighting one, send
              it. We may agree, we may not, but we will read it carefully and
              we will tell you what we think.
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}
