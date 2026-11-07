import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, CalendarRange, Check, Fence, NotebookPen } from "lucide-react";
import { useEffect, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useBook } from "@/lib/store";

const tap = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";

export function HydrateBook() {
  useEffect(() => {
    void useBook.persist.rehydrate();
  }, []);
  return null;
}

const NAV = [
  { href: "/", label: "Book", icon: BookOpen },
  { href: "/trellises", label: "Trellises", icon: Fence },
  { href: "/planner", label: "Planner", icon: CalendarRange },
  { href: "/notebook", label: "Notebook", icon: NotebookPen },
] as const;

function active(path: string, href: string) {
  if (href === "/") return path === "/" || path.startsWith("/read");
  return path === href || path.startsWith(`${href}/`);
}

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-paper text-ink">
      <HydrateBook />
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link to="/" className="font-display text-lg leading-none text-ink">
            Volume 1: Green Beans
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {NAV.map((item) => {
              const on = active(path, item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 text-sm",
                    on ? "text-leaf" : "text-muted",
                  )}
                  aria-current={on ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 pb-28 md:px-8 md:pb-20">{children}</div>
      <nav
        className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-sheet md:hidden"
        aria-label="Sections"
      >
        <ul className="grid grid-cols-4">
          {NAV.map((item) => {
            const on = active(path, item.href);
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-xs",
                    on ? "text-leaf" : "text-muted",
                  )}
                  aria-current={on ? "page" : undefined}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function Button({
  tone = "leaf",
  className,
  ...props
}: ComponentProps<"button"> & { tone?: "leaf" | "ghost" | "sheet" }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 px-4 text-base disabled:opacity-50",
        tap,
        tone === "leaf" && "bg-leaf text-paper",
        tone === "ghost" && "border border-line bg-transparent text-ink",
        tone === "sheet" && "border border-line bg-sheet text-ink",
        className,
      )}
      {...props}
    />
  );
}

export function Plate({
  src,
  alt,
  caption,
  tall,
}: {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full rounded-md border border-line object-cover",
          tall ? "aspect-3/4" : "aspect-4/3",
        )}
      />
      <figcaption className="mt-2 text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-6 border-l-2 border-pod bg-pod-soft px-4 py-3">
      <p className="font-display text-sm text-pod">{title}</p>
      <div className="mt-1 text-sm leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-muted">{label}</span>
      {children}
      {hint ? <span className="mt-1 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
}

export const fieldClass =
  "min-h-11 w-full border border-line bg-sheet px-3 text-base text-ink outline-none focus-visible:border-leaf";

export function ReadDot({ on }: { on: boolean }) {
  if (!on) return <span className="inline-block size-4" aria-hidden="true" />;
  return <Check className="size-4 text-leaf" aria-label="Read" />;
}
