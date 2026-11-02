import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button, Field, fieldClass, Shell } from "@/components/chrome";
import { VARIETIES } from "@/content/varieties";
import { formatDay, parseDay } from "@/lib/dates";
import { useBook, type Habit, type Planting } from "@/lib/store";

export const Route = createFileRoute("/notebook")({
  component: Notebook,
});

const EMPTY = {
  variety: "",
  habit: "Pole" as Habit,
  sown: "2027-05-01",
  bed: "",
  trellis: "",
  notes: "",
  forSeed: false,
};

function Notebook() {
  const plantings = useBook((s) => s.plantings);
  const addPlanting = useBook((s) => s.addPlanting);
  const removePlanting = useBook((s) => s.removePlanting);
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    void (async () => {
      await useBook.persist.rehydrate();
      if (live) setReady(true);
    })();
    return () => {
      live = false;
    };
  }, []);

  function set<K extends keyof typeof EMPTY>(key: K, value: (typeof EMPTY)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit() {
    const variety = form.variety.trim();
    if (!variety) return;
    addPlanting({
      variety,
      habit: form.habit,
      sown: form.sown,
      bed: form.bed.trim(),
      trellis: form.trellis.trim(),
      notes: form.notes.trim(),
      forSeed: form.forSeed,
    });
    setForm((f) => ({ ...EMPTY, sown: f.sown, habit: f.habit }));
  }

  return (
    <Shell>
      <div className="max-w-3xl py-8">
        <p className="text-sm text-pod">This garden</p>
        <h1 className="mt-2 font-display text-4xl text-balance md:text-5xl">Notebook</h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty">
          What you sowed, where, and whether those plants are feeding the kitchen or next year’s jar. It stays on this device.
        </p>

        <form
          className="mt-8 grid gap-4 border border-line bg-sheet p-4 md:p-5"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Variety">
              <input
                className={fieldClass}
                list="variety-names"
                value={form.variety}
                required
                onChange={(e) => set("variety", e.target.value)}
              />
              <datalist id="variety-names">
                {VARIETIES.map((v) => (
                  <option key={v.name} value={v.name} />
                ))}
              </datalist>
            </Field>
            <Field label="Habit">
              <select
                className={fieldClass}
                value={form.habit}
                onChange={(e) => set("habit", e.target.value as Habit)}
              >
                <option>Bush</option>
                <option>Pole</option>
                <option>Half-runner</option>
              </select>
            </Field>
            <Field label="Date sown">
              <input
                className={fieldClass}
                type="date"
                value={form.sown}
                onChange={(e) => set("sown", e.target.value)}
              />
            </Field>
            <Field label="Bed or place">
              <input className={fieldClass} value={form.bed} onChange={(e) => set("bed", e.target.value)} />
            </Field>
            <Field label="Trellis, if any">
              <input
                className={fieldClass}
                value={form.trellis}
                onChange={(e) => set("trellis", e.target.value)}
                placeholder="Teepee, arch, none"
              />
            </Field>
            <label className="flex min-h-11 items-end gap-3 pb-2 text-sm">
              <input
                type="checkbox"
                className="size-4 accent-leaf"
                checked={form.forSeed}
                onChange={(e) => set("forSeed", e.target.checked)}
              />
              Leave pods on these plants for seed
            </label>
          </div>
          <Field label="Notes">
            <textarea
              className={`${fieldClass} min-h-24 py-2`}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </Field>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Add planting</Button>
            <Button
              type="button"
              tone="ghost"
              onClick={() =>
                setForm({
                  variety: "Provider",
                  habit: "Bush",
                  sown: "2027-05-08",
                  bed: "North bed, front row",
                  trellis: "None",
                  notes: "Early sowing. Eat these. Save seed from the pole row instead.",
                  forSeed: false,
                })
              }
            >
              Fill an example
            </Button>
          </div>
        </form>

        <div className="mt-8">
          {!ready ? <p className="text-sm text-muted">Opening your notes…</p> : null}
          {ready && plantings.length === 0 ? (
            <p className="border border-line bg-sheet px-4 py-6 leading-relaxed">
              Nothing sown yet. When a row goes in, write it here so August-you knows which plants are for the jar.
            </p>
          ) : null}
          <ul className="space-y-3">
            {ready
              ? plantings.map((p) => (
                  <PlantingCard
                    key={p.id}
                    planting={p}
                    pending={pending === p.id}
                    onAsk={() => setPending(p.id)}
                    onCancel={() => setPending(null)}
                    onRemove={() => {
                      removePlanting(p.id);
                      setPending(null);
                    }}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    </Shell>
  );
}

function PlantingCard({
  planting,
  pending,
  onAsk,
  onCancel,
  onRemove,
}: {
  planting: Planting;
  pending: boolean;
  onAsk: () => void;
  onCancel: () => void;
  onRemove: () => void;
}) {
  const sown = parseDay(planting.sown);
  return (
    <li className="border border-line bg-sheet p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl">{planting.variety}</h2>
        <p className="text-sm text-pod">{planting.forSeed ? "Seed crop" : "Kitchen"}</p>
      </div>
      <p className="mt-1 text-sm text-muted">
        {planting.habit}
        {Number.isNaN(sown.getTime()) ? "" : ` · sown ${formatDay(sown)}`}
        {planting.bed ? ` · ${planting.bed}` : ""}
        {planting.trellis ? ` · ${planting.trellis}` : ""}
      </p>
      {planting.notes ? <p className="mt-3 leading-relaxed">{planting.notes}</p> : null}
      <div className="mt-4">
        {pending ? (
          <div className="flex flex-wrap gap-2">
            <Button type="button" tone="leaf" onClick={onRemove}>
              Remove this planting
            </Button>
            <Button type="button" tone="ghost" onClick={onCancel}>
              Keep it
            </Button>
          </div>
        ) : (
          <Button type="button" tone="ghost" onClick={onAsk} aria-label={`Remove ${planting.variety}`}>
            Remove
          </Button>
        )}
      </div>
    </li>
  );
}
