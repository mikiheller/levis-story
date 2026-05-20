import Link from "next/link";

const CONTACT_EMAIL = "hello@example.com";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-medium tracking-tight">
              Levi
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              An open case file. Public data, open questions, and a paid bounty
              program for anyone who can help.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-soft">
              Pages
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground hover:text-accent">
                  Levi&apos;s Story
                </Link>
              </li>
              <li>
                <Link
                  href="/philosophy"
                  className="text-foreground hover:text-accent"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="text-foreground hover:text-accent"
                >
                  Data Vault
                </Link>
              </li>
              <li>
                <Link
                  href="/bounties"
                  className="text-foreground hover:text-accent"
                >
                  Bounty Program
                </Link>
              </li>
              <li>
                <Link
                  href="/stay-in-touch"
                  className="text-foreground hover:text-accent"
                >
                  Stay in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-soft">
              Direct contact
            </p>
            <p className="mt-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              We read everything. We try to respond to substantive messages.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-soft sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} The Heller family. Levi&apos;s data is
            published voluntarily.
          </p>
          <p>Last updated continuously.</p>
        </div>
      </div>
    </footer>
  );
}
