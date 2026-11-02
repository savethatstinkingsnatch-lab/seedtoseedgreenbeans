import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Field, s as fieldClass } from "./chrome-DzePlBUW.mjs";
import { n as formatDay, r as parseDay, t as addDays } from "./dates-C4jnzwI6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculators-8wlWIiau.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BedCalculator({ defaultSpacing = 6, defaultLength = 8, defaultRows = 1 }) {
	const [length, setLength] = (0, import_react.useState)(defaultLength);
	const [spacing, setSpacing] = (0, import_react.useState)(defaultSpacing);
	const [rows, setRows] = (0, import_react.useState)(defaultRows);
	const plants = spacing > 0 && length > 0 ? Math.max(1, Math.floor(length * 12 / spacing)) * Math.max(1, rows) : 0;
	const toSow = Math.ceil(plants * 1.25);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 border border-line bg-sheet p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-balance",
				children: "How many seeds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: "Sow a quarter extra. Thin to the best plants. Beans resent being moved, so the extras go in the row, not in pots."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Row length (feet)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "number",
							min: 1,
							max: 200,
							value: length,
							onChange: (e) => setLength(Number(e.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Spacing (inches)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "number",
							min: 2,
							max: 24,
							value: spacing,
							onChange: (e) => setSpacing(Number(e.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Rows",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "number",
							min: 1,
							max: 8,
							value: rows,
							onChange: (e) => setRows(Number(e.target.value))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-2xl text-leaf tabular-nums",
				children: [
					plants,
					" plants · sow ",
					toSow,
					" seeds"
				]
			})
		]
	});
}
function GermTest() {
	const [tested, setTested] = (0, import_react.useState)(10);
	const [sprouted, setSprouted] = (0, import_react.useState)(9);
	const pct = tested > 0 ? Math.round(Math.min(sprouted, tested) / tested * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 border border-line bg-sheet p-4 md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-balance",
				children: "A ten-seed test"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted",
				children: "Dampen a paper towel, lay the seeds on it, roll it up, and keep it warm — about 70°F (21°C) — inside a loose bag. Count sprouts at seven days."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Seeds tested",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "number",
						min: 1,
						max: 100,
						value: tested,
						onChange: (e) => setTested(Number(e.target.value))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Sprouted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "number",
						min: 0,
						max: 100,
						value: sprouted,
						onChange: (e) => setSprouted(Number(e.target.value))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-2xl text-leaf tabular-nums",
				children: [pct, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed",
				children: pct >= 85 ? "Sow at the spacing in the book." : pct >= 70 ? "Usable. Sow a little thicker, then thin." : pct >= 50 ? "Sow thickly. Fine for a dinner row. Thin material if this lot is your only seed for next year." : "This lot is tired. Replace it, or sow very thick and do not count on it."
			})
		]
	});
}
function SeasonDesk() {
	const [spring, setSpring] = (0, import_react.useState)("2027-04-20");
	const [fall, setFall] = (0, import_react.useState)("2027-10-15");
	const [habit, setHabit] = (0, import_react.useState)("Pole");
	const [days, setDays] = (0, import_react.useState)(65);
	const [indoor, setIndoor] = (0, import_react.useState)(false);
	const plan = (0, import_react.useMemo)(() => {
		const s = parseDay(spring);
		const f = parseDay(fall);
		if (Number.isNaN(s.getTime()) || Number.isNaN(f.getTime()) || f <= s) return null;
		const firstSow = addDays(s, 7);
		const lastSow = addDays(f, -(days + 14));
		const sowings = [];
		if (habit === "Pole") sowings.push(firstSow);
		else {
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
			frost: f
		};
	}, [
		spring,
		fall,
		habit,
		days
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Last spring frost",
					hint: "The date you usually stop fearing a freeze.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "date",
						value: spring,
						onChange: (e) => setSpring(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "First fall frost",
					hint: "When a freeze is likely to end tender growth.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "date",
						value: fall,
						onChange: (e) => setFall(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Habit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: fieldClass,
						value: habit,
						onChange: (e) => {
							const next = e.target.value;
							setHabit(next);
							setDays(next === "Bush" ? 55 : 65);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Bush",
							children: "Bush — succession every two weeks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "Pole",
							children: "Pole — one sowing, a long harvest"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Days to first snap",
					hint: "From the packet. Dry beans need longer; add them in your head.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "number",
						min: 40,
						max: 120,
						value: days,
						onChange: (e) => setDays(Number(e.target.value))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 flex min-h-11 items-center gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: indoor,
				onChange: (e) => setIndoor(e.target.checked),
				className: "size-4 accent-leaf"
			}), "Show an indoor start, only if your season is very short"]
		}),
		!plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 border border-line bg-pod-soft px-4 py-3 text-sm leading-relaxed",
			children: "Fall frost needs to land after spring frost. In the southern hemisphere, use the frost dates that bracket your warm season — the arithmetic does not care what month that is."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-3",
			children: [
				plan.short ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "border border-line bg-pod-soft px-4 py-3 text-sm leading-relaxed",
					children: [
						"This frost window is tight for a bush bean of ",
						days,
						" days. Sow once, as soon as the soil is warm, and choose a faster variety if you can."
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "divide-y divide-line border border-line bg-sheet",
					children: [
						indoor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(plan.indoorSow),
							title: "Sow indoors, only if you must",
							text: "Two weeks before the last frost, in pots you can plant whole. Earlier than that and the plants stall and sulk."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(plan.transplant),
							title: "Set them out",
							text: "After the frost date, into warm soil. Do not bare-root them. Direct sowing is still the better default."
						})] }) : null,
						plan.sowings.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(d),
							title: habit === "Pole" ? "Direct sow the pole beans" : `Bush sowing ${i + 1}`,
							text: habit === "Pole" ? `Soil should be near 60°F. First snaps around ${formatDay(addDays(d, days))}, then keep picking until frost.` : `First snaps around ${formatDay(addDays(d, days))}. A bush plant then gives you about three weeks of pods.`
						}, d.toISOString())),
						habit === "Bush" && !plan.short ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(plan.lastSow),
							title: "Last worthwhile bush sowing",
							text: "After this, a new row may not finish before frost. Pole beans already in the ground will still be picking."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(plan.seedReady),
							title: "Seed from the first sowing",
							text: plan.seedReady <= plan.frost ? "Pods left on the plant from the first sowing should be dry and rattling around now, with a little margin before frost." : "Dry seed may not finish on the vine before frost. Leave pods until they are yellow and leathery, then pull the whole plant and hang it under cover."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							when: formatDay(plan.frost),
							title: "First fall frost",
							text: "Tender vines stop. Dry pods already leathery can finish indoors. Green snaps left outside will scar."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "A soil thermometer beats this calendar. If the bed is still cold a week after your frost date, wait. Days on a packet assume warm soil and start at emergence-to-harvest roughly as printed — catalogs count from sowing."
				})
			]
		})
	] });
}
function Row({ when, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex flex-col gap-1 px-4 py-4 sm:flex-row sm:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-pod tabular-nums sm:w-36 sm:shrink-0",
			children: when
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-balance",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed text-ink",
			children: text
		})] })]
	});
}
//#endregion
export { GermTest as n, SeasonDesk as r, BedCalculator as t };
