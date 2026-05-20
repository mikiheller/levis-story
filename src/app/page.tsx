import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-soft">
        <Container size="wide" className="py-12 sm:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                An open case file
              </p>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                A boy, not a case.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                This is Levi. He is five years old. He used to talk. He used to
                play. We are running his case in public because his brain
                doesn&apos;t have time for us not to.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/data"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
                >
                  See the data
                </Link>
                <Link
                  href="/bounties"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Bounty program →
                </Link>
              </div>
            </div>
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-warm shadow-[0_30px_60px_-25px_rgba(0,0,0,0.18)] md:aspect-[3/4]">
              <Image
                src="/photos/levi-smiling-1.jpg"
                alt="Levi smiling outdoors"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <article className="py-16 sm:py-20">
        <Container>
          <div className="prose">
            <p className="text-xl leading-relaxed">
              This is Levi. He is five years old. He has three brothers — one
              older, two younger. He loves climbing, the iPad, the slide at the
              playground, and his family. He used to talk. He used to play. He
              doesn&apos;t talk anymore, and most of his play has gone away
              with the words.
            </p>
            <p>
              He is not a case. He is our son. But because of how rare his
              situation is, and because the medical system is not built to move
              at the speed his brain needs us to move, this website also has to
              function as a case file — one that anyone in the world can read,
              question, and help with.
            </p>

            <h2>What&apos;s happening</h2>
            <p>
              Levi was born healthy and developed normally for the first two
              years of his life. Around 2.5 years old, he began a slow
              regression: fewer words, less response to his name, narrower
              play, more self-stimulatory behavior, less eye contact. He was
              diagnosed with autism at 3 years and 10 months. The regression
              continued. By age 4 he had only a few words. Around his fifth
              birthday he stopped using words altogether.
            </p>
            <p>
              In March 2026, an overnight EEG at Stanford revealed the
              underlying biology: a sleep-activated epilepsy pattern called{" "}
              <em>DEE-SWAS</em> (Developmental and/or Epileptic Encephalopathy
              with Spike-Wave Activation in Sleep, formerly called CSWS or
              ESES). During sleep, when his brain should have been
              consolidating language and memory, it was instead lit up with
              continuous abnormal electrical activity — 95–100% of his sleep
              was occupied by the spike-wave pattern.
            </p>
            <p>
              The good news: this is treatable. A three-day high-dose steroid
              pulse at the end of March 2026 cleared most of the abnormal
              electrical activity, and we saw immediate, real changes in Levi —
              more eye contact, more nonverbal communication, more interest in
              his brothers, the first time he picked up a fork. A second
              steroid pulse followed in April. The brain is responding.
            </p>
          </div>

          <figure className="my-16 -mx-6 sm:mx-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-warm sm:rounded-lg">
              <Image
                src="/photos/levi-smiling-2.jpg"
                alt="Levi engaged and present after treatment"
                fill
                sizes="(min-width: 768px) 65ch, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-6 sm:px-0">
              The brain came back online.
            </figcaption>
          </figure>

          <div className="prose">
            <h2>What we still don&apos;t know</h2>
            <p>
              We don&apos;t know <em>why</em>. Levi has been through
              whole-exome sequencing, two rounds of whole-genome sequencing,
              two large targeted panels (320 epilepsy genes, 53 overgrowth
              genes), a chromosomal microarray, MRI, MR spectroscopy, EEG,
              cytokine panels, autoimmune panels, a lumbar puncture, hormonal
              workup, and more. The standard tests are negative. Something is
              driving this, and the standard playbook has not found it.
            </p>
            <p>
              There are also things about Levi that don&apos;t fit a &ldquo;just
              DEE-SWAS&rdquo; story. He was born at normal size, but by his
              first birthday he was at the 99th percentile for height, weight,
              and head circumference, and he has stayed there. Neither parent
              is that big. His bone age sits at his chronological age (it
              isn&apos;t precocious puberty, it isn&apos;t a growth-hormone
              problem). He has temperature instability, hyperphagia, and a
              1.5-year history of waking around 3 a.m. several nights a week.
              Something in the brain — we suspect the hypothalamus, or a
              cellular-growth pathway in a subset of his cells — is part of
              this picture.
            </p>
            <p>
              We believe finding the root cause matters. Suppressing the
              seizures buys time, but the underlying mechanism is probably
              still active. If we can identify it, we can target it. If we can
              target it, we may be able to do more than hold the line — we may
              be able to give Levi the rest of his developmental window back.
            </p>
          </div>

          {/* Three goals */}
          <section className="my-20 border-y border-border-soft py-14">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Our three goals, in order
            </p>
            <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
              {[
                {
                  n: "1",
                  title: "Stop the spikes.",
                  body:
                    "Eliminate the abnormal sleep-activated electrical activity and prevent it from coming back. Every additional month of unsuppressed activity in his sleep is more cognitive damage we will then have to repair. This is the immediate target.",
                },
                {
                  n: "2",
                  title: "Get to root cause.",
                  body:
                    "The standard tests are negative and we still do not know the underlying mechanism. Suppressing the spikes buys time but does not address the cause, which is almost certainly still active. If we can identify the mechanism, we can target it — and stop fighting symptoms with blunt tools.",
                },
                {
                  n: "3",
                  title: "Repair the brain.",
                  body:
                    "Suppressing the spikes is necessary but not sufficient. We want his language, play, social engagement, learning, and sleep architecture back — biologically and through intensive functional therapy.",
                },
              ].map((g) => (
                <li key={g.n} className="relative">
                  <div className="font-serif text-5xl font-medium leading-none text-accent/70">
                    {g.n}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {g.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <div className="prose">
            <h2>Why this also helps other kids</h2>
            <p>
              What we find for Levi is likely to be relevant to many other
              children: kids labeled &ldquo;autism&rdquo; who actually have
              something treatable underneath; kids with brain injury of one
              kind or another; kids whose families suspect a genetic story but
              can&apos;t find a gene; kids with DEE-SWAS, ESES, Landau-Kleffner,
              or atypical absence epilepsy and the cognitive damage these
              patterns cause. Levi&apos;s data is public so those families
              don&apos;t have to start from scratch.
            </p>

            <h2>Why this site exists</h2>
            <p>
              We are doing this in public because Levi&apos;s situation calls
              for more brains than we can put in a conference room. The world
              has researchers and clinicians and parents who could, in an
              afternoon, see something in Levi&apos;s data that we have missed.
              We want them to be able to see it. This site is where the data
              lives, where our philosophy of how we&apos;re approaching the
              case lives, and where the open questions we&apos;d most like
              outside help on live.
            </p>
            <p>
              If you are a researcher, clinician, fellow parent, AI engineer,
              or just a curious person who wants to look at the data and tell
              us what you see, you are welcome here.
            </p>
          </div>

          {/* Where to start cards */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <StartCard
              href="/data"
              eyebrow="Data Vault"
              title="The data lives here"
              body="Records, imaging, genetics, EEG, labs, growth, behavioral observations."
            />
            <StartCard
              href="/philosophy"
              eyebrow="Our Philosophy"
              title="How we think about this case"
              body="Including why we voluntarily waived Levi's medical privacy."
            />
            <StartCard
              href="/bounties"
              eyebrow="Bounty Program"
              title="Paid work on Levi's data"
              body="Specific asks and open finds. We pay for substantive work."
            />
          </div>
        </Container>

        {/* Family / second photo strip */}
        <div className="mx-auto mt-20 max-w-6xl px-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-warm">
              <Image
                src="/photos/levi-1.jpg"
                alt="Levi with his family"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-warm">
              <Image
                src="/photos/levi-smiling-3.jpg"
                alt="Levi"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </article>
    </>
  );
}

function StartCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-soft group-hover:text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-serif text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      <p className="mt-4 text-sm font-medium text-foreground group-hover:text-accent">
        Open →
      </p>
    </Link>
  );
}
