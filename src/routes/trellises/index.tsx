import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { TRELLISES } from "@/content/trellises";

export const Route = createFileRoute("/trellises/")({
  component: TrellisIndex,
});

function TrellisIndex() {
  return (
    <Shell>
      <div className="py-8">
        <p className="text-sm text-pod">Designs</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl text-balance md:text-5xl">
          Six ways to hold a pole bean
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
          Beans twine. They do not grab. Every design here gives a rough vertical something for the stem to circle, and tells you what to buy before you dig a hole. Bush beans need none of this.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-sheet text-muted">
              <tr>
                <th className="px-3 py-3 font-display font-medium">Design</th>
                <th className="px-3 py-3 font-display font-medium">Climb</th>
                <th className="px-3 py-3 font-display font-medium">Footprint</th>
                <th className="px-3 py-3 font-display font-medium">Lasts</th>
              </tr>
            </thead>
            <tbody>
              {TRELLISES.map((t) => (
                <tr key={t.id} className="border-t border-line">
                  <td className="px-3 py-3">
                    <Link to="/trellises/$id" params={{ id: t.id }} className="text-leaf underline">
                      {t.name}
                    </Link>
                  </td>
                  <td className="px-3 py-3">{t.height}</td>
                  <td className="px-3 py-3">{t.footprint}</td>
                  <td className="px-3 py-3">{t.lasts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {TRELLISES.map((t) => (
            <li key={t.id}>
              <Link to="/trellises/$id" params={{ id: t.id }} className="block border border-line bg-sheet">
                {t.photo ? (
                  <img src={t.photo} alt={t.photoAlt ?? ""} className="aspect-4/3 w-full object-cover" />
                ) : (
                  <div className="flex aspect-4/3 flex-col justify-end bg-leaf-deep p-5">
                    <p className="font-display text-3xl text-paper text-balance">Built low, on purpose</p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper">
                      Pairs of stakes and three wires. The working drawing is inside.
                    </p>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-pod">{t.kicker}</p>
                  <h2 className="mt-1 font-display text-2xl text-balance">{t.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          The reasons behind the string, the post depth, and the take-down are in{" "}
          <Link to="/read/$chapter" params={{ chapter: "trellises" }} className="text-leaf underline">
            the climbing chapter
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
