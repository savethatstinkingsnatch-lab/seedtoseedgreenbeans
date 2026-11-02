import type { ReactNode } from "react";

function Frame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-6 border border-line bg-sheet p-3 md:p-5">
      <svg viewBox="0 0 360 230" className="h-auto w-full text-ink" role="img" aria-label={label}>
        {children}
      </svg>
      <figcaption className="mt-2 font-display text-sm text-muted">
        Working drawing · proportions, not a survey
      </figcaption>
    </figure>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
} as const;

const thin = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  opacity: 0.55,
} as const;

function Ground() {
  return <line x1="24" y1="188" x2="336" y2="188" {...thin} />;
}

function Dim({ x, y, children }: { x: number | string; y: number | string; children: string }) {
  return (
    <text x={x} y={y} fill="currentColor" fontSize="11" fontFamily="Fraunces, Palatino, serif">
      {children}
    </text>
  );
}

export function TeepeeDrawing() {
  const peak = { x: 180, y: 48 };
  const feet = [78, 110, 142, 218, 250, 282];
  return (
    <Frame label="Side view of a six-pole teepee, about four feet across and seven feet of climb">
      <Ground />
      {feet.map((x) => (
        <line key={x} x1={x} y1="188" x2={peak.x} y2={peak.y} {...stroke} />
      ))}
      <ellipse cx="180" cy="66" rx="13" ry="6" {...stroke} />
      <line x1="108" y1="154" x2="252" y2="154" {...thin} />
      <line x1="128" y1="120" x2="232" y2="120" {...thin} />
      <line x1="146" y1="90" x2="214" y2="90" {...thin} />
      <Dim x="12" y="22">
        7 ft of climb
      </Dim>
      <Dim x="138" y="216">
        4 ft circle
      </Dim>
    </Frame>
  );
}

export function AframeDrawing() {
  return (
    <Frame label="One A of the frame: seven-foot legs spread four feet at the feet, with rungs about a foot apart">
      <Ground />
      <line x1="70" y1="188" x2="180" y2="42" {...stroke} />
      <line x1="290" y1="188" x2="180" y2="42" {...stroke} />
      <line x1="96" y1="154" x2="264" y2="154" {...thin} />
      <line x1="118" y1="122" x2="242" y2="122" {...thin} />
      <line x1="140" y1="90" x2="220" y2="90" {...thin} />
      <Dim x="12" y="22">
        peak near 6.5 ft
      </Dim>
      <Dim x="108" y="216">
        feet 4 ft apart · three A's along 8 ft
      </Dim>
    </Frame>
  );
}

export function ArchDrawing() {
  return (
    <Frame label="Cattle panel bent into an arch about six feet across and seven feet at the crown">
      <Ground />
      <path d="M86 188 C86 48 274 48 274 188" {...stroke} />
      <line x1="74" y1="188" x2="74" y2="132" {...stroke} />
      <line x1="286" y1="188" x2="286" y2="132" {...stroke} />
      <Dim x="12" y="22">
        16 ft panel · crown near 7 ft
      </Dim>
      <Dim x="112" y="216">
        feet about 6 ft apart
      </Dim>
    </Frame>
  );
}

export function StringsDrawing() {
  const xs = [86, 118, 150, 182, 214, 246, 278];
  return (
    <Frame label="Two posts, a top bar, and a vertical string every six inches">
      <Ground />
      <line x1="48" y1="188" x2="48" y2="40" {...stroke} />
      <line x1="316" y1="188" x2="316" y2="40" {...stroke} />
      <line x1="48" y1="46" x2="316" y2="46" {...stroke} />
      <line x1="48" y1="176" x2="316" y2="176" {...thin} />
      {xs.map((x) => (
        <line key={x} x1={x} y1="46" x2={x} y2="176" {...thin} />
      ))}
      <Dim x="12" y="22">
        posts no more than 8 ft apart
      </Dim>
      <Dim x="112" y="216">
        one string every 6 in
      </Dim>
    </Frame>
  );
}

export function LadderDrawing() {
  return (
    <Frame label="Pairs of stakes a foot apart with three horizontal lines on each face">
      <Ground />
      {[64, 148, 232].map((x) => (
        <g key={x}>
          <line x1={x} y1="188" x2={x} y2="44" {...stroke} />
          <line x1={x + 26} y1="188" x2={x + 26} y2="44" {...stroke} />
        </g>
      ))}
      {[78, 118, 158].map((y) => (
        <line key={y} x1="64" y1={y} x2="258" y2={y} {...thin} />
      ))}
      <Dim x="12" y="22">
        wires at 12, 36, and 60 in
      </Dim>
      <Dim x="108" y="216">
        a pair of stakes every 4 ft
      </Dim>
    </Frame>
  );
}

export function SistersDrawing() {
  return (
    <Frame label="Three corn stalks with a bean vine spiraling the center stalk">
      <Ground />
      <line x1="96" y1="188" x2="112" y2="48" {...stroke} />
      <line x1="180" y1="188" x2="172" y2="40" {...stroke} />
      <line x1="262" y1="188" x2="246" y2="56" {...stroke} />
      <path
        d="M180 176 C154 160 198 146 174 126 C150 106 196 92 172 74 C156 62 186 52 172 44"
        {...thin}
      />
      <ellipse cx="78" cy="184" rx="22" ry="7" {...thin} />
      <Dim x="12" y="22">
        corn up first
      </Dim>
      <Dim x="96" y="216">
        beans when the corn is 6–8 in
      </Dim>
    </Frame>
  );
}

export const DRAWINGS = {
  teepee: TeepeeDrawing,
  aframe: AframeDrawing,
  arch: ArchDrawing,
  strings: StringsDrawing,
  ladder: LadderDrawing,
  sisters: SistersDrawing,
} as const;
