import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CalendarRange, i as Check, n as NotebookPen, o as BookOpen, r as Fence } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-DzePlBUW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var useBook = create()(persist((set) => ({
	read: [],
	plantings: [],
	toggleRead: (slug) => set((s) => ({ read: s.read.includes(slug) ? s.read.filter((x) => x !== slug) : [...s.read, slug] })),
	addPlanting: (p) => set((s) => ({ plantings: [{
		...p,
		id: crypto.randomUUID()
	}, ...s.plantings] })),
	removePlanting: (id) => set((s) => ({ plantings: s.plantings.filter((p) => p.id !== id) }))
}), {
	name: "from-seed-to-seed",
	skipHydration: true,
	partialize: (s) => ({
		read: s.read,
		plantings: s.plantings
	})
}));
var tap = "transition-transform duration-150 ease-out active:not-disabled:scale-[0.96]";
function HydrateBook() {
	(0, import_react.useEffect)(() => {
		useBook.persist.rehydrate();
	}, []);
	return null;
}
var NAV = [
	{
		href: "/",
		label: "Book",
		icon: BookOpen
	},
	{
		href: "/trellises",
		label: "Trellises",
		icon: Fence
	},
	{
		href: "/planner",
		label: "Planner",
		icon: CalendarRange
	},
	{
		href: "/notebook",
		label: "Notebook",
		icon: NotebookPen
	}
];
function active(path, href) {
	if (href === "/") return path === "/" || path.startsWith("/read");
	return path === href || path.startsWith(`${href}/`);
}
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateBook, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-display text-lg leading-none text-ink",
						children: "From Seed to Seed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Sections",
						children: NAV.map((item) => {
							const on = active(path, item.href);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: cn("inline-flex min-h-11 items-center px-3 text-sm", on ? "text-leaf" : "text-muted"),
								"aria-current": on ? "page" : void 0,
								children: item.label
							}, item.href);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 pb-28 md:px-8 md:pb-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-sheet md:hidden",
				"aria-label": "Sections",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: NAV.map((item) => {
						const on = active(path, item.href);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.href,
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-xs", on ? "text-leaf" : "text-muted"),
							"aria-current": on ? "page" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							}), item.label]
						}) }, item.href);
					})
				})
			})
		]
	});
}
function Button({ tone = "leaf", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 px-4 text-base disabled:opacity-50", tap, tone === "leaf" && "bg-leaf text-paper", tone === "ghost" && "border border-line bg-transparent text-ink", tone === "sheet" && "border border-line bg-sheet text-ink", className),
		...props
	});
}
function Plate({ src, alt, caption, tall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("w-full rounded-md border border-line object-cover", tall ? "aspect-3/4" : "aspect-4/3")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: caption
		})]
	});
}
function Note({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-6 border-l-2 border-pod bg-pod-soft px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm text-pod",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm leading-relaxed text-ink",
			children
		})]
	});
}
function Field({ label, children, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1 block text-sm text-muted",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: hint
			}) : null
		]
	});
}
var fieldClass = "min-h-11 w-full border border-line bg-sheet px-3 text-base text-ink outline-none focus-visible:border-leaf";
function ReadDot({ on }) {
	if (!on) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block size-4",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
		className: "size-4 text-leaf",
		"aria-label": "Read"
	});
}
//#endregion
export { ReadDot as a, useBook as c, Plate as i, Field as n, Shell as o, Note as r, fieldClass as s, Button as t };
