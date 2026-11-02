import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useBook, n as Field, o as Shell, s as fieldClass, t as Button } from "./chrome-DzePlBUW.mjs";
import { n as formatDay, r as parseDay } from "./dates-C4jnzwI6.mjs";
import { r as VARIETIES } from "./varieties-DIKFQxe5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notebook-BMLASaFD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	variety: "",
	habit: "Pole",
	sown: "2027-05-01",
	bed: "",
	trellis: "",
	notes: "",
	forSeed: false
};
function Notebook() {
	const plantings = useBook((s) => s.plantings);
	const addPlanting = useBook((s) => s.addPlanting);
	const removePlanting = useBook((s) => s.removePlanting);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [pending, setPending] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		(async () => {
			await useBook.persist.rehydrate();
			if (live) setReady(true);
		})();
		return () => {
			live = false;
		};
	}, []);
	function set(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
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
			forSeed: form.forSeed
		});
		setForm((f) => ({
			...EMPTY,
			sown: f.sown,
			habit: f.habit
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pod",
				children: "This garden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-balance md:text-5xl",
				children: "Notebook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-pretty",
				children: "What you sowed, where, and whether those plants are feeding the kitchen or next year’s jar. It stays on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4 border border-line bg-sheet p-4 md:p-5",
				onSubmit: (e) => {
					e.preventDefault();
					submit();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Variety",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									list: "variety-names",
									value: form.variety,
									required: true,
									onChange: (e) => set("variety", e.target.value)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "variety-names",
									children: VARIETIES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: v.name }, v.name))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Habit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: fieldClass,
									value: form.habit,
									onChange: (e) => set("habit", e.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bush" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pole" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Half-runner" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Date sown",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									type: "date",
									value: form.sown,
									onChange: (e) => set("sown", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Bed or place",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									value: form.bed,
									onChange: (e) => set("bed", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Trellis, if any",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									value: form.trellis,
									onChange: (e) => set("trellis", e.target.value),
									placeholder: "Teepee, arch, none"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-end gap-3 pb-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-4 accent-leaf",
									checked: form.forSeed,
									onChange: (e) => set("forSeed", e.target.checked)
								}), "Leave pods on these plants for seed"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${fieldClass} min-h-24 py-2`,
							value: form.notes,
							onChange: (e) => set("notes", e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Add planting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							tone: "ghost",
							onClick: () => setForm({
								variety: "Provider",
								habit: "Bush",
								sown: "2027-05-08",
								bed: "North bed, front row",
								trellis: "None",
								notes: "Early sowing. Eat these. Save seed from the pole row instead.",
								forSeed: false
							}),
							children: "Fill an example"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Opening your notes…"
					}) : null,
					ready && plantings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border border-line bg-sheet px-4 py-6 leading-relaxed",
						children: "Nothing sown yet. When a row goes in, write it here so August-you knows which plants are for the jar."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: ready ? plantings.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantingCard, {
							planting: p,
							pending: pending === p.id,
							onAsk: () => setPending(p.id),
							onCancel: () => setPending(null),
							onRemove: () => {
								removePlanting(p.id);
								setPending(null);
							}
						}, p.id)) : null
					})
				]
			})
		]
	}) });
}
function PlantingCard({ planting, pending, onAsk, onCancel, onRemove }) {
	const sown = parseDay(planting.sown);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border border-line bg-sheet p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: planting.variety
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-pod",
					children: planting.forSeed ? "Seed crop" : "Kitchen"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					planting.habit,
					Number.isNaN(sown.getTime()) ? "" : ` · sown ${formatDay(sown)}`,
					planting.bed ? ` · ${planting.bed}` : "",
					planting.trellis ? ` · ${planting.trellis}` : ""
				]
			}),
			planting.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed",
				children: planting.notes
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						tone: "leaf",
						onClick: onRemove,
						children: "Remove this planting"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						tone: "ghost",
						onClick: onCancel,
						children: "Keep it"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					tone: "ghost",
					onClick: onAsk,
					"aria-label": `Remove ${planting.variety}`,
					children: "Remove"
				})
			})
		]
	});
}
//#endregion
export { Notebook as component };
