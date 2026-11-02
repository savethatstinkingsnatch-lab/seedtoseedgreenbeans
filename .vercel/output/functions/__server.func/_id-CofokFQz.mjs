import { S as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-CDdFoi0G.mjs";
import { o as Shell, r as Note } from "./_ssr/chrome-DzePlBUW.mjs";
import { n as trellisById, t as TRELLISES } from "./_ssr/trellises-ChApWvBQ.mjs";
import { t as BedCalculator } from "./_ssr/calculators-8wlWIiau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-CofokFQz.js
var import_jsx_runtime = require_jsx_runtime();
function Frame({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-6 border border-line bg-sheet p-3 md:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 360 230",
			className: "h-auto w-full text-ink",
			role: "img",
			"aria-label": label,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 font-display text-sm text-muted",
			children: "Working drawing · proportions, not a survey"
		})]
	});
}
var stroke = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.6
};
var thin = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1,
	opacity: .55
};
function Ground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: "24",
		y1: "188",
		x2: "336",
		y2: "188",
		...thin
	});
}
function Dim({ x, y, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x,
		y,
		fill: "currentColor",
		fontSize: "11",
		fontFamily: "Fraunces, Palatino, serif",
		children
	});
}
function TeepeeDrawing() {
	const peak = {
		x: 180,
		y: 48
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "Side view of a six-pole teepee, about four feet across and seven feet of climb",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			[
				78,
				110,
				142,
				218,
				250,
				282
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: "188",
				x2: peak.x,
				y2: peak.y,
				...stroke
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "180",
				cy: "66",
				rx: "13",
				ry: "6",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "108",
				y1: "154",
				x2: "252",
				y2: "154",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "128",
				y1: "120",
				x2: "232",
				y2: "120",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "146",
				y1: "90",
				x2: "214",
				y2: "90",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "7 ft of climb"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "138",
				y: "216",
				children: "4 ft circle"
			})
		]
	});
}
function AframeDrawing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "One A of the frame: seven-foot legs spread four feet at the feet, with rungs about a foot apart",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "70",
				y1: "188",
				x2: "180",
				y2: "42",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "290",
				y1: "188",
				x2: "180",
				y2: "42",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "96",
				y1: "154",
				x2: "264",
				y2: "154",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "118",
				y1: "122",
				x2: "242",
				y2: "122",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "140",
				y1: "90",
				x2: "220",
				y2: "90",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "peak near 6.5 ft"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "108",
				y: "216",
				children: "feet 4 ft apart · three A's along 8 ft"
			})
		]
	});
}
function ArchDrawing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "Cattle panel bent into an arch about six feet across and seven feet at the crown",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 188 C86 48 274 48 274 188",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "74",
				y1: "188",
				x2: "74",
				y2: "132",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "286",
				y1: "188",
				x2: "286",
				y2: "132",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "16 ft panel · crown near 7 ft"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "112",
				y: "216",
				children: "feet about 6 ft apart"
			})
		]
	});
}
function StringsDrawing() {
	const xs = [
		86,
		118,
		150,
		182,
		214,
		246,
		278
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "Two posts, a top bar, and a vertical string every six inches",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "188",
				x2: "48",
				y2: "40",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "316",
				y1: "188",
				x2: "316",
				y2: "40",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "46",
				x2: "316",
				y2: "46",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "48",
				y1: "176",
				x2: "316",
				y2: "176",
				...thin
			}),
			xs.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: "46",
				x2: x,
				y2: "176",
				...thin
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "posts no more than 8 ft apart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "112",
				y: "216",
				children: "one string every 6 in"
			})
		]
	});
}
function LadderDrawing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "Pairs of stakes a foot apart with three horizontal lines on each face",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			[
				64,
				148,
				232
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: "188",
				x2: x,
				y2: "44",
				...stroke
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x + 26,
				y1: "188",
				x2: x + 26,
				y2: "44",
				...stroke
			})] }, x)),
			[
				78,
				118,
				158
			].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "64",
				y1: y,
				x2: "258",
				y2: y,
				...thin
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "wires at 12, 36, and 60 in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "108",
				y: "216",
				children: "a pair of stakes every 4 ft"
			})
		]
	});
}
function SistersDrawing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		label: "Three corn stalks with a bean vine spiraling the center stalk",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "96",
				y1: "188",
				x2: "112",
				y2: "48",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "180",
				y1: "188",
				x2: "172",
				y2: "40",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "262",
				y1: "188",
				x2: "246",
				y2: "56",
				...stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 176 C154 160 198 146 174 126 C150 106 196 92 172 74 C156 62 186 52 172 44",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "78",
				cy: "184",
				rx: "22",
				ry: "7",
				...thin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "12",
				y: "22",
				children: "corn up first"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
				x: "96",
				y: "216",
				children: "beans when the corn is 6–8 in"
			})
		]
	});
}
var DRAWINGS = {
	teepee: TeepeeDrawing,
	aframe: AframeDrawing,
	arch: ArchDrawing,
	strings: StringsDrawing,
	ladder: LadderDrawing,
	sisters: SistersDrawing
};
function TrellisDetail() {
	const { id } = Route.useParams();
	const trellis = trellisById(id);
	if (!trellis) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "No trellis by that name"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/trellises",
			className: "mt-4 inline-flex min-h-11 items-center text-leaf underline",
			children: "All six designs"
		})]
	}) });
	const Drawing = DRAWINGS[trellis.drawing];
	const index = TRELLISES.findIndex((t) => t.id === trellis.id);
	const next = TRELLISES[(index + 1) % TRELLISES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/trellises",
				className: "text-sm text-leaf underline",
				children: "All designs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-pod",
				children: trellis.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-balance md:text-5xl",
				children: trellis.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-pretty",
				children: trellis.summary
			}),
			trellis.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: trellis.photo,
					alt: trellis.photoAlt ?? "",
					className: "aspect-4/3 w-full rounded-md border border-line object-cover"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3",
				children: [
					["Climb", trellis.height],
					["Footprint", trellis.footprint],
					["Plants", trellis.plants],
					["Lasts", trellis.lasts],
					["Best when", trellis.best]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-sheet px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-lg leading-snug",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-3xl text-balance",
				children: "Working drawing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-3xl",
				children: "Materials"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-display font-medium",
							children: "Item"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-display font-medium",
							children: "Quantity"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: trellis.materials.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 pr-3",
							children: m.item
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3",
							children: m.qty
						})]
					}, m.item)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-3xl",
				children: "Build it"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 list-decimal space-y-3 pl-5",
				children: trellis.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "leading-relaxed",
					children: step
				}, step))
			}),
			(trellis.id === "strings" || trellis.id === "ladder" || trellis.id === "arch") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedCalculator, {
				defaultLength: trellis.id === "arch" ? 4 : 8,
				defaultSpacing: 6,
				defaultRows: trellis.id === "arch" ? 2 : 1
			}),
			trellis.id === "teepee" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				title: "Around the poles",
				children: "Six seeds at each of six poles is 36 seeds. Thin to three or four plants a pole. You are not filling a row so much as ringing the feet."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-3xl",
				children: "Watch for"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 list-disc space-y-3 pl-5",
				children: trellis.cautions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "leading-relaxed",
					children: c
				}, c))
			}),
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/trellises/$id",
				params: { id: next.id },
				className: "mt-10 flex min-h-16 items-center justify-between border border-line bg-sheet px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-muted",
					children: "Next design"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl",
					children: next.name
				})] })
			}) : null
		]
	}) });
}
//#endregion
export { TrellisDetail as component };
