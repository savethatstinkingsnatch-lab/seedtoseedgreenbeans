import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ReadDot, c as useBook, o as Shell } from "./chrome-DzePlBUW.mjs";
import { t as TRELLISES } from "./trellises-ChApWvBQ.mjs";
import { r as VARIETIES } from "./varieties-DIKFQxe5.mjs";
import { t as CHAPTERS } from "./chapters-CGAo5Ocp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BjgsAhqo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EDITION = {
	title: "From Seed to Seed",
	author: "Jessica McIntosh",
	year: 2026
};
var SPINE = [
	{
		label: "Sow",
		chapter: "sowing"
	},
	{
		label: "Climb",
		chapter: "trellises"
	},
	{
		label: "Flower",
		chapter: "care"
	},
	{
		label: "Snap",
		chapter: "kitchen"
	},
	{
		label: "Dry",
		chapter: "seed"
	},
	{
		label: "Jar",
		chapter: "seed"
	}
];
function Home() {
	const read = useBook((s) => s.read);
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const hits = (0, import_react.useMemo)(() => {
		if (query.length < 2) return null;
		return {
			chapters: CHAPTERS.filter((c) => `${c.title} ${c.lede} ${c.kicker}`.toLowerCase().includes(query)),
			varieties: VARIETIES.filter((v) => `${v.name} ${v.notes} ${v.use}`.toLowerCase().includes(query)),
			trellises: TRELLISES.filter((t) => `${t.name} ${t.summary}`.toLowerCase().includes(query))
		};
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/plates/cover.jpg",
				alt: "Pole beans on a wooden trellis in morning light, pods hanging among the leaves",
				className: "aspect-video w-full rounded-md border border-line object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 -mt-8 border border-line bg-sheet px-5 py-6 md:-mt-16 md:px-10 md:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm tracking-wide text-pod",
					children: "A field book of green beans"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-3xl font-display text-4xl leading-tight text-balance md:text-6xl",
					children: "From seed to seed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-lg",
					children: ["by ", EDITION.author]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-pretty",
					children: "Planting, trellises, the kitchen harvest, and the jar you sow next spring. Ten short chapters and six structures you can build."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/read/$chapter",
						params: { chapter: "the-plant" },
						className: "inline-flex min-h-11 items-center bg-leaf px-4 text-paper transition-transform duration-150 active:scale-[0.96]",
						children: "Begin with the plant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trellises",
						className: "inline-flex min-h-11 items-center border border-line bg-sheet px-4 text-ink transition-transform duration-150 active:scale-[0.96]",
						children: "Trellis designs"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 grid grid-cols-3 gap-px border border-line bg-line sm:grid-cols-6",
			children: SPINE.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "bg-sheet",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/read/$chapter",
					params: { chapter: step.chapter },
					className: "flex min-h-14 items-center justify-center font-display text-lg text-ink",
					children: step.label
				})
			}, step.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1 block text-sm text-muted",
					children: "Index"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search varieties, chapters, trellises",
					className: "min-h-11 w-full border border-line bg-sheet px-3 text-base outline-none focus-visible:border-leaf"
				})]
			}), hits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border border-line bg-sheet p-4",
				children: [
					hits.chapters.length + hits.varieties.length + hits.trellises.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Nothing under that name."
					}) : null,
					hits.chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$chapter",
						params: { chapter: c.slug },
						className: "flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "Chapter"
						})]
					}, c.slug)),
					hits.varieties.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$chapter",
						params: { chapter: "varieties" },
						className: "flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [
								v.habit,
								" · ",
								v.days,
								" days"
							]
						})]
					}, v.name)),
					hits.trellises.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/trellises/$id",
						params: { id: t.id },
						className: "flex min-h-11 items-center justify-between gap-3 border-b border-line py-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "Trellis"
						})]
					}, t.id))
				]
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-balance",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted tabular-nums",
					children: [
						read.length,
						" of ",
						CHAPTERS.length,
						" read"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 divide-y divide-line border-y border-line",
				children: CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$chapter",
					params: { chapter: c.slug },
					className: "flex items-baseline gap-3 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 shrink-0 font-display text-pod tabular-nums",
							children: c.numeral
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl text-balance",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm leading-relaxed text-muted",
								children: c.lede
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadDot, { on: read.includes(c.slug) })
					]
				}) }, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
					href: "/trellises",
					kicker: "Build",
					title: "Six trellises",
					text: "Teepee, A-frame, cattle-panel arch, strings, a wind ladder, and corn as a living pole."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
					href: "/planner",
					kicker: "Dates",
					title: "Season desk",
					text: "Your frost dates become sowings, first picks, and the week seed should rattle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
					href: "/notebook",
					kicker: "This garden",
					title: "Notebook",
					text: "A planting log that stays on this device. Variety, bed, and whether those pods are for seed."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-12 text-sm text-muted",
			children: [
				"© ",
				EDITION.year,
				" ",
				EDITION.author
			]
		})
	] });
}
function Tool({ href, kicker, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: "block border border-line bg-sheet p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pod",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-2xl text-balance",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component };
