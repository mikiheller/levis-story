import { Container } from "@/components/container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
};

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="border-b border-border-soft bg-surface-warm/30 py-16 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
