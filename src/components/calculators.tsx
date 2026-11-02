import { useMemo, useState } from "react";
import { Field, fieldClass } from "@/components/chrome";
import { addDays, formatDay, parseDay } from "@/lib/dates";

export function BedCalculator({
  defaultSpacing = 6,
  defaultLength = 8,
  defaultRows = 1,
}: {
  defaultSpacing?: number;
  defaultLength?: number;
  defaultRows?: number;
}) {
  const [length, setLength] = useState(defaultLength);
  const [spacing, setSpacing] = useState(defaultSpacing);
  const [rows, setRows] = useState(defaultRows);

  const plants =
    spacing > 0 && length > 0 ? Math.max(1, Math.floor((length * 12) / spacing)) * Math.max(1, rows) : 0;
  const toSow = Math.ceil(plants * 1.25);

  return (
    <div className="my-6 border border-line bg-sheet p-4 md:p-5">
      <h3 className="font-display text-xl text-balance">How many seeds</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Sow a quarter extra. Thin to the best plants. Beans resent being moved, so the extras go in the row, not in pots.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Field label="Row length (feet)">
          <input
            className={fieldClass}
            type="number"
            min={1}
            max={200}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </Field>
        <Field label="Spacing (inches)">
          <input
            className={fieldClass}
            type="number"
            min={2}
            max={24}
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
          />
        </Field>
        <Field label="Rows">
          <input
            className={fieldClass}
            type="number"
            min={1}
            max={8}
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          />
        </Field>
      </div>
      <p className="mt-4 font-display text-2xl text-leaf tabular-nums">
        {plants} plants · sow {toSow} seeds
      </p>
    </div>
  );
}

export function GermTest() {
  const [tested, setTested] = useState(10);
  const [sprouted, setSprouted] = useState(9);
  const pct = tested > 0 ? Math.round((Math.min(sprouted, tested) / tested) * 100) : 0;
  const advice =
    pct >= 85
      ? "Sow at the spacing in the book."
      : pct >= 70
        ? "Usable. Sow a little thicker, then thin."
        : pct >= 50
          ? "Sow thickly. Fine for a dinner row. Thin material if this lot is your only seed for next year."
          : "This lot is tired. Replace it, or sow very thick and do not count on it.";

  return (
    <div className="my-6 border border-line bg-sheet p-4 md:p-5">
      <h3 className="font-display text-xl text-balance">A ten-seed test</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        Dampen a paper towel, lay the seeds on it, roll it up, and keep it warm — about 70°F (21°C) — inside a loose bag. Count sprouts at seven days.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Seeds tested">
          <input
            className={fieldClass}
            type="number"
            min={1}
            max={100}
            value={tested}
            onChange={(e) => setTested(Number(e.target.value))}
          />
        </Field>
        <Field label="Sprouted">
          <input
            className={fieldClass}
            type="number"
            min={0}
            max={100}
            value={sprouted}
            onChange={(e) => setSprouted(Number(e.target.value))}
          />
        </Field>
      </div>
      <p className="mt-4 font-display text-2xl text-leaf tabular-nums">{pct}%</p>
      <p className="mt-1 text-sm leading-relaxed">{advice}</p>
    </div>
  );
}

type HabitPick = "Bush" | "Pole";

export function SeasonDesk() {
  const [spring, setSpring] = useState("2027-04-20");
  const [fall, setFall] = useState("2027-10-15");
  const [habit, setHabit] = useState<HabitPick>("Pole");
  const [days, setDays] = useState(65);
  const [indoor, setIndoor] = useState(false);

  const plan = useMemo(() => {
    const s = parseDay(spring);
    const f = parseDay(fall);
    if (Number.isNaN(s.getTime()) || Number.isNaN(f.getTime()) || f <= s) return null;
    const firstSow = addDays(s, 7);
    const lastSow = addDays(f, -(days + 14));
    const sowings: Date[] = [];
    if (habit === "Pole") {
      sowings.push(firstSow);
    } else {
      let cursor = firstSow;
      let guard = 0;
      while (cursor <= lastSow && guard < 14) {
        sowings.push(cursor);
        cursor = addDays(cursor, 14);
        guard += 1;
      }
    }
    return {
      firstSow,
      lastSow,
      sowings,
      short: habit === "Bush" && firstSow > lastSow,
      indoorSow: addDays(s, -14),
      transplant: addDays(s, 7),
      seedReady: addDays(firstSow, days + 40),
      frost: f,
    };
  }, [spring, fall, habit, days]);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Last spring frost" hint="The date you usually stop fearing a freeze.">
          <input className={fieldClass} type="date" value={spring} onChange={(e) => setSpring(e.target.value)} />
        </Field>
        <Field label="First fall frost" hint="When a freeze is likely to end tender growth.">
          <input className={fieldClass} type="date" value={fall} onChange={(e) => setFall(e.target.value)} />
        </Field>
        <Field label="Habit">
          <select
            className={fieldClass}
            value={habit}
            onChange={(e) => {
              const next = e.target.value as HabitPick;
              setHabit(next);
              setDays(next === "Bush" ? 55 : 65);
            }}
          >
            <option value="Bush">Bush — succession every two weeks</option>
            <option value="Pole">Pole — one sowing, a long harvest</option>
          </select>
        </Field>
        <Field label="Days to first snap" hint="From the packet. Dry beans need longer; add them in your head.">
          <input
            className={fieldClass}
            type="number"
            min={40}
            max={120}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </Field>
      </div>
      <label className="mt-4 flex min-h-11 items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={indoor}
          onChange={(e) => setIndoor(e.target.checked)}
          className="size-4 accent-leaf"
        />
        Show an indoor start, only if your season is very short
      </label>

      {!plan ? (
        <p className="mt-6 border border-line bg-pod-soft px-4 py-3 text-sm leading-relaxed">
          Fall frost needs to land after spring frost. In the southern hemisphere, use the frost dates that bracket your warm season — the arithmetic does not care what month that is.
        </p>
      ) : (
        <div className="mt-6 space-y-3">
          {plan.short ? (
            <p className="border border-line bg-pod-soft px-4 py-3 text-sm leading-relaxed">
              This frost window is tight for a bush bean of {days} days. Sow once, as soon as the soil is warm, and choose a faster variety if you can.
            </p>
          ) : null}
          <ol className="divide-y divide-line border border-line bg-sheet">
            {indoor ? (
              <>
                <Row
                  when={formatDay(plan.indoorSow)}
                  title="Sow indoors, only if you must"
                  text="Two weeks before the last frost, in pots you can plant whole. Earlier than that and the plants stall and sulk."
                />
                <Row
                  when={formatDay(plan.transplant)}
                  title="Set them out"
                  text="After the frost date, into warm soil. Do not bare-root them. Direct sowing is still the better default."
                />
              </>
            ) : null}
            {plan.sowings.map((d, i) => (
              <Row
                key={d.toISOString()}
                when={formatDay(d)}
                title={
                  habit === "Pole"
                    ? "Direct sow the pole beans"
                    : `Bush sowing ${i + 1}`
                }
                text={
                  habit === "Pole"
                    ? `Soil should be near 60°F. First snaps around ${formatDay(addDays(d, days))}, then keep picking until frost.`
                    : `First snaps around ${formatDay(addDays(d, days))}. A bush plant then gives you about three weeks of pods.`
                }
              />
            ))}
            {habit === "Bush" && !plan.short ? (
              <Row
                when={formatDay(plan.lastSow)}
                title="Last worthwhile bush sowing"
                text="After this, a new row may not finish before frost. Pole beans already in the ground will still be picking."
              />
            ) : null}
            <Row
              when={formatDay(plan.seedReady)}
              title="Seed from the first sowing"
              text={
                plan.seedReady <= plan.frost
                  ? "Pods left on the plant from the first sowing should be dry and rattling around now, with a little margin before frost."
                  : "Dry seed may not finish on the vine before frost. Leave pods until they are yellow and leathery, then pull the whole plant and hang it under cover."
              }
            />
            <Row
              when={formatDay(plan.frost)}
              title="First fall frost"
              text="Tender vines stop. Dry pods already leathery can finish indoors. Green snaps left outside will scar."
            />
          </ol>
          <p className="text-sm leading-relaxed text-muted">
            A soil thermometer beats this calendar. If the bed is still cold a week after your frost date, wait. Days on a packet assume warm soil and start at emergence-to-harvest roughly as printed — catalogs count from sowing.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({ when, title, text }: { when: string; title: string; text: string }) {
  return (
    <li className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:gap-6">
      <p className="font-display text-pod tabular-nums sm:w-36 sm:shrink-0">{when}</p>
      <div>
        <p className="font-display text-lg text-balance">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{text}</p>
      </div>
    </li>
  );
}
