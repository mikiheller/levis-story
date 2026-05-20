import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** narrow = ~65ch reading column, wide = max-w-6xl */
  size?: "narrow" | "wide";
};

export function Container({
  children,
  className,
  size = "narrow",
}: ContainerProps) {
  const max = size === "narrow" ? "max-w-2xl" : "max-w-6xl";
  return (
    <div className={cn("mx-auto px-6 sm:px-8", max, className)}>{children}</div>
  );
}
