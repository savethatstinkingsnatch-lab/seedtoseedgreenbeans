import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Shell } from "@/components/chrome";
import { BODIES } from "@/content/bodies";
import { chapterBySlug, CHAPTERS, neighbors } from "@/content/chapters";
import { EDITION } from "@/lib/edition";
import { useBook } from "@/lib/store";

export const Route = createFileRoute("/read/$chapter")({
  component: Reader,
});

function Reader() {
  const { chapter } = Route.useParams();
  const meta = chapterBySlug(chapter);
  const read = useBook((s) => s.read);
  const toggleRead = useBook((s) => s.toggleRead);

  if (!meta) {
    return (
      <Shell>
        <div className="py-16">
          <h1 className="font-display text-4xl">That chapter is not in the book</h1>
          <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-leaf underline">
            Back to the contents
          </Link>
        </div>
      </Shell>
    );
  }

  const Body = BODIES[meta.slug];
  const { prev, next } = neighbors(meta.slug);
  const done = read.includes(meta.slug);

  return (
    <Shell>
      <div className="gap-10 py-8 lg:grid lg:grid-cols-[14rem_minmax(0,42rem)]">
        <aside className="mb-8 hidden lg:block">
          <p className="text-sm text-muted">Contents</p>
          <ol className="mt-3 space-y-1">
            {CHAPTERS.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/read/$chapter"
                  params={{ chapter: c.slug }}
                  className={
                    "flex min-h-11 items-baseline gap-2 text-sm " +
                    (c.slug === meta.slug ? "text-leaf" : "text-ink")
                  }
                  aria-current={c.slug === meta.slug ? "page" : undefined}
                >
                  <span className="tabular-nums text-muted">{c.numeral}</span>
                  {c.title}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
        <article>
          <p className="text-sm text-pod">
            Chapter {meta.numeral} · {meta.kicker}
          </p>
          <h1 className="mt-2 font-display text-4xl text-balance md:text-5xl">{meta.title}</h1>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-pretty text-muted">{meta.lede}</p>
          <p className="mt-2 text-sm text-muted">
            {meta.minutes} minute read · {EDITION.author}
          </p>
          <div className="book mt-6 max-w-2xl text-lg">{Body ? <Body /> : null}</div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button tone={done ? "sheet" : "leaf"} onClick={() => toggleRead(meta.slug)}>
              {done ? "Read — tap to clear" : "Mark this chapter read"}
            </Button>
          </div>
          <nav className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Chapters">
            {prev ? (
              <Link
                to="/read/$chapter"
                params={{ chapter: prev.slug }}
                className="min-h-14 border border-line bg-sheet p-4"
              >
                <span className="block text-sm text-muted">Previous</span>
                <span className="font-display text-xl">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/read/$chapter"
                params={{ chapter: next.slug }}
                className="min-h-14 border border-line bg-sheet p-4 sm:text-right"
              >
                <span className="block text-sm text-muted">Next</span>
                <span className="font-display text-xl">{next.title}</span>
              </Link>
            ) : (
              <Link to="/trellises" className="min-h-14 border border-line bg-sheet p-4 sm:text-right">
                <span className="block text-sm text-muted">Then build</span>
                <span className="font-display text-xl">Trellis designs</span>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </Shell>
  );
}
