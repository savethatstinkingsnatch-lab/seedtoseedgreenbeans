import { createFileRoute, Link } from "@tanstack/react-router";
import { SeasonDesk } from "@/components/calculators";
import { Shell } from "@/components/chrome";

export const Route = createFileRoute("/planner")({
  component: Planner,
});

function Planner() {
  return (
    <Shell>
      <div className="max-w-3xl py-8">
        <p className="text-sm text-pod">Season desk</p>
        <h1 className="mt-2 font-display text-4xl text-balance md:text-5xl">From frost date to seed jar</h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty">
          Put in the last spring frost and the first fall frost. The desk lays out sowings, first snaps, and whether a seed crop will dry before the vines die. It is a plan, not a promise — soil temperature still gets the final say.
        </p>
        <div className="mt-8">
          <SeasonDesk />
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          Spacing and a germination count live in the{" "}
          <Link to="/read/$chapter" params={{ chapter: "sowing" }} className="text-leaf underline">
            sowing chapter
          </Link>{" "}
          and the{" "}
          <Link to="/read/$chapter" params={{ chapter: "seed" }} className="text-leaf underline">
            seed chapter
          </Link>
          . Write what you actually sow in the{" "}
          <Link to="/notebook" className="text-leaf underline">
            notebook
          </Link>
          .
        </p>
      </div>
    </Shell>
  );
}
