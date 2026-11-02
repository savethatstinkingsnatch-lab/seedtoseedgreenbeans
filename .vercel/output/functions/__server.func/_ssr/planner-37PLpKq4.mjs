import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Shell } from "./chrome-DzePlBUW.mjs";
import { r as SeasonDesk } from "./calculators-8wlWIiau.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-37PLpKq4.js
var import_jsx_runtime = require_jsx_runtime();
function Planner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-pod",
				children: "Season desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-balance md:text-5xl",
				children: "From frost date to seed jar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-pretty",
				children: "Put in the last spring frost and the first fall frost. The desk lays out sowings, first snaps, and whether a seed crop will dry before the vines die. It is a plan, not a promise — soil temperature still gets the final say."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonDesk, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm leading-relaxed text-muted",
				children: [
					"Spacing and a germination count live in the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/read/$chapter",
						params: { chapter: "sowing" },
						className: "text-leaf underline",
						children: "sowing chapter"
					}),
					" ",
					"and the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/read/$chapter",
						params: { chapter: "seed" },
						className: "text-leaf underline",
						children: "seed chapter"
					}),
					". Write what you actually sow in the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/notebook",
						className: "text-leaf underline",
						children: "notebook"
					}),
					"."
				]
			})
		]
	}) });
}
//#endregion
export { Planner as component };
