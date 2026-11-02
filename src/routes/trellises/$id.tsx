import { createFileRoute, Link } from "@tanstack/react-router";
import { DRAWINGS } from "@/components/blueprints";
import { BedCalculator } from "@/components/calculators";
import { Note, Shell } from "@/components/chrome";
import { TRELLISES, trellisById } from "@/content/trellises";

export const Route = createFileRoute("/trellises/$id")({
  component: TrellisDetail,
});

function TrellisDetail() {
  const { id } = Route.useParams();
  const trellis = trellisById(id);

  if (!trellis) {
    return (
      <Shell>
        <div className="py-16">
          <h1 className="font-display text-4xl">No trellis by that name</h1>
          <Link to="/trellises" className="mt-4 inline-flex min-h-11 items-center text-leaf underline">
            All six designs
          </Link>
        </div>
      </Shell>
    );
  }

  const Drawing = DRAWINGS[trellis.drawing];
  const index = TRELLISES.findIndex((t) => t.id === trellis.id);
  const next = TRELLISES[(index + 1) % TRELLISES.length];

  return (
    <Shell>
      <article className="max-w-3xl py-8">
        <Link to="/trellises" className="text-sm text-leaf underline">
          All designs
        </Link>
        <p className="mt-4 text-sm text-pod">{trellis.kicker}</p>
        <h1 className="mt-2 font-display text-4xl text-balance md:text-5xl">{trellis.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty">{trellis.summary}</p>
        {trellis.photo ? (
          <figure className="mt-6">
            <img
              src={trellis.photo}
              alt={trellis.photoAlt ?? ""}
              className="aspect-4/3 w-full rounded-md border border-line object-cover"
            />
          </figure>
        ) : null}
        <dl className="mt-6 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3">
          {[
            ["Climb", trellis.height],
            ["Footprint", trellis.footprint],
            ["Plants", trellis.plants],
            ["Lasts", trellis.lasts],
            ["Best when", trellis.best],
          ].map(([label, value]) => (
            <div key={label} className="bg-sheet px-4 py-3">
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="mt-1 font-display text-lg leading-snug">{value}</dd>
            </div>
          ))}
        </dl>
        <h2 className="mt-10 font-display text-3xl text-balance">Working drawing</h2>
        <Drawing />
        <h2 className="mt-8 font-display text-3xl">Materials</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-sm text-muted">
                <th className="py-2 pr-3 font-display font-medium">Item</th>
                <th className="py-2 font-display font-medium">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {trellis.materials.map((m) => (
                <tr key={m.item} className="border-b border-line">
                  <td className="py-3 pr-3">{m.item}</td>
                  <td className="py-3">{m.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-10 font-display text-3xl">Build it</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          {trellis.steps.map((step) => (
            <li key={step} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
        {(trellis.id === "strings" || trellis.id === "ladder" || trellis.id === "arch") && (
          <BedCalculator
            defaultLength={trellis.id === "arch" ? 4 : 8}
            defaultSpacing={6}
            defaultRows={trellis.id === "arch" ? 2 : 1}
          />
        )}
        {trellis.id === "teepee" ? (
          <Note title="Around the poles">
            Six seeds at each of six poles is 36 seeds. Thin to three or four plants a pole. You are not filling a row so much as ringing the feet.
          </Note>
        ) : null}
        <h2 className="mt-10 font-display text-3xl">Watch for</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          {trellis.cautions.map((c) => (
            <li key={c} className="leading-relaxed">
              {c}
            </li>
          ))}
        </ul>
        {next ? (
          <Link
            to="/trellises/$id"
            params={{ id: next.id }}
            className="mt-10 flex min-h-16 items-center justify-between border border-line bg-sheet px-4"
          >
            <span>
              <span className="block text-sm text-muted">Next design</span>
              <span className="font-display text-2xl">{next.name}</span>
            </span>
          </Link>
        ) : null}
      </article>
    </Shell>
  );
}
