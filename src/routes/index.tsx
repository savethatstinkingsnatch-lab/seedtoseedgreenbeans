import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ReadDot, Shell } from "@/components/chrome";
import { CHAPTERS } from "@/content/chapters";
import { TRELLISES } from "@/content/trellises";
import { VARIETIES } from "@/content/varieties";
import { EDITION } from "@/lib/edition";
import { useBook } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

const SPINE = [
  { label: "Sow", chapter: "sowing" },
  { label: "Climb", chapter: "trellises" },
  { label: "Flower", chapter: "care" },
  { label: "Snap", chapter: "kitchen" },
  { label: "Dry", chapter: "seed" },
  { label: "Jar", chapter: "seed" },
];

function Home() {
  const read = useBook((s) => s.read);
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const hits = useMemo(() => {
    if (query.length < 2) return null;
    return {
      chapters: CHAPTERS.filter((c) => `${c.title} ${c.lede} ${c.kicker}`.toLowerCase().includes(query)),
      varieties: VARIETIES.filter((v) => `${v.name} ${v.notes} ${v.use}`.toLowerCase().includes(query)),
      trellises: TRELLISES.filter((t) => `${t.name} ${t.summary}`.toLowerCase().includes(query)),
    };
  }, [query]);

  return (
    <Shell>
      <figure className="mt-6">
        <img
          src="/plates/cover.jpg"
          alt="Pole beans on a wooden trellis in morning light, pods hanging among the leaves"
          className="aspect-video w-full rounded-md border border-line object-cover"
        />
      </figure>
      <div className="relative z-10 -mt-8 border border-line bg-sheet px-5 py-6 md:-mt-16 md:px-10 md:py-8">
        <p className="text-sm tracking-wide text-pod">The Education Revolution · Volume 1</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight text-balance md:text-6xl">
          Volume 1: Green Beans
        </h1>
        <p className="mt-3 text-lg">by {EDITION.author}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
          Planting, trellises, the kitchen harvest, and the jar you sow next spring. Ten short chapters and six structures you can build.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/read/$chapter"
            params={{ chapter: "the-plant" }}
            className="inline-flex min-h-11 items-center bg-leaf px-4 text-paper transition-transform duration-150 active:scale-[0.96]"
          >
            Begin with the plant
          </Link>
          <Link
            to="/trellises"
            className="inline-flex min-h-11 items-center border border-line bg-sheet px-4 text-ink transition-transform duration-150 active:scale-[0.96]"
          >
            Trellis designs
          </Link>
        </div>
      </div>

      <ol className="mt-8 grid grid-cols-3 gap-px border border-line bg-line sm:grid-cols-6">
        {SPINE.map((step) => (
          <li key={step.label} className="bg-sheet">
            <Link
              to="/read/$chapter"
              params={{ chapter: step.chapter }}
              className="flex min-h-14 items-center justify-center font-display text-lg text-ink"
            >
              {step.label}
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <label className="block">
          <span className="mb-1 block text-sm text-muted">Index</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search varieties, chapters, trellises"
            className="min-h-11 w-full border border-line bg-sheet px-3 text-base outline-none focus-visible:border-leaf"
          />
        </label>
        {hits ? (
          <div className="mt-4 border border-line bg-sheet p-4">
            {hits.chapters.length + hits.varieties.length + hits.trellises.length === 0 ? (
              <p className="text-sm">Nothing under that name.</p>
            ) : null}
            {hits.chapters.map((c) => (
              <Link
                key={c.slug}
                to="/read/$chapter"
                params={{ chapter: c.slug }}
                className="flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0"
              >
                <span>{c.title}</span>
                <span className="text-sm text-muted">Chapter</span>
              </Link>
            ))}
            {hits.varieties.map((v) => (
              <Link
                key={v.name}
                to="/read/$chapter"
                params={{ chapter: "varieties" }}
                className="flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0"
              >
                <span>{v.name}</span>
                <span className="text-sm text-muted">
                  {v.habit} · {v.days} days
                </span>
              </Link>
            ))}
            {hits.trellises.map((t) => (
              <Link
                key={t.id}
                to="/trellises/$id"
                params={{ id: t.id }}
                className="flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0"
              >
                <span>{t.name}</span>
                <span className="text-sm text-muted">Trellis</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl text-balance">Contents</h2>
          <p className="text-sm text-muted tabular-nums">
            {read.length} of {CHAPTERS.length} read
          </p>
        </div>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {CHAPTERS.map((c) => (
            <li key={c.slug}>
              <Link
                to="/read/$chapter"
                params={{ chapter: c.slug }}
                className="flex items-baseline gap-3 py-4"
              >
                <span className="w-10 shrink-0 font-display text-pod tabular-nums">{c.numeral}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-2xl text-balance">{c.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{c.lede}</span>
                </span>
                <ReadDot on={read.includes(c.slug)} />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <Tool
          href="/trellises"
          kicker="Build"
          title="Six trellises"
          text="Teepee, A-frame, cattle-panel arch, strings, a wind ladder, and corn as a living pole."
        />
        <Tool
          href="/planner"
          kicker="Dates"
          title="Season desk"
          text="Your frost dates become sowings, first picks, and the week seed should rattle."
        />
        <Tool
          href="/notebook"
          kicker="This garden"
          title="Notebook"
          text="A planting log that stays on this device. Variety, bed, and whether those pods are for seed."
        />
      </section>
      <p className="mt-12 text-sm text-muted">
        © {EDITION.year} {EDITION.author}
      </p>
    </Shell>
  );
}

function Tool({
  href,
  kicker,
  title,
  text,
}: {
  href: "/trellises" | "/planner" | "/notebook";
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <Link to={href} className="block border border-line bg-sheet p-5">
      <p className="text-sm text-pod">{kicker}</p>
      <h3 className="mt-1 font-display text-2xl text-balance">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </Link>
  );
}
