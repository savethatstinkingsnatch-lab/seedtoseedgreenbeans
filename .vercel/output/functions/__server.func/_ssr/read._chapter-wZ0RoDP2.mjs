import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./router-CDdFoi0G.mjs";
import { c as useBook, i as Plate, o as Shell, r as Note, t as Button } from "./chrome-DzePlBUW.mjs";
import { t as TRELLISES } from "./trellises-ChApWvBQ.mjs";
import { n as GermTest, t as BedCalculator } from "./calculators-8wlWIiau.mjs";
import { n as USES, r as VARIETIES, t as HABITS } from "./varieties-DIKFQxe5.mjs";
import { n as chapterBySlug, r as neighbors, t as CHAPTERS } from "./chapters-CGAo5Ocp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read._chapter-wZ0RoDP2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TROUBLES = [
	{
		name: "Seed rots in the row",
		kind: "Culture",
		see: "Nothing comes up, or a few weak hooks. Seed is soft if you dig it.",
		do: [
			"The soil was cold or wet. Wait until it holds 60°F (16°C) at sowing depth for a few mornings.",
			"Do not soak seed when the soil is cool. Soaked seed rots faster.",
			"Re-sow. Beans are cheap enough that a second sowing is the fix."
		]
	},
	{
		name: "Blossom drop",
		kind: "Culture",
		see: "Flowers form and fall. Few pods. Plants otherwise look lush, especially if you fed them like tomatoes.",
		do: [
			"Heat above about 90°F (32°C), hot nights, or a dry spell at flowering will drop blossoms. Water the soil deeply and wait for a cooler week.",
			"Too much nitrogen grows leaves instead of pods. Stop feeding.",
			"Pole beans often pause in a heat wave and set again when nights ease. Bush beans may not get a second chance — that is what succession is for."
		]
	},
	{
		name: "Mexican bean beetle",
		kind: "Insect",
		see: "A copper ladybug with sixteen black spots, and yellow, spiny larvae. Leaves end up as lace. Pods get scarred.",
		do: [
			"Hand-pick adults, larvae, and the yellow egg clusters under the leaves. Do it every few days.",
			"Common beans do not need insects to set pods, so a row cover can stay on all season if you can pick under it.",
			"Pull and destroy heavily infested plants at the end of the year. Beetles overwinter in garden debris."
		]
	},
	{
		name: "Aphids",
		kind: "Insect",
		see: "Clusters of soft insects on new tips. Leaves curl. A sticky film, then ants.",
		do: ["A hard spray of water, repeated, knocks most of them off.", "They also carry mosaic virus. If leaves are puckered and mottled as well as infested, see mosaic — washing aphids will not undo a virus."]
	},
	{
		name: "Spider mites",
		kind: "Insect",
		see: "Hot, dry weather. Leaves look dusty and stippled, then bronze. Fine webbing on the undersides.",
		do: ["Water the soil so plants are not drought-stressed, and rinse the undersides of leaves in the morning.", "Mites like dust and heat. A mulch and a less dusty path help the next row more than a spray helps this one."]
	},
	{
		name: "Cutworms",
		kind: "Insect",
		see: "Seedlings clipped at the soil line overnight. The plant is lying there, otherwise perfect.",
		do: ["A collar — a toilet-paper tube or a strip of cardboard pressed an inch into the soil — around each seedling the day it emerges.", "Scratch the soil at the base in the morning. Cutworms curl up just under the surface."]
	},
	{
		name: "Anthracnose",
		kind: "Disease",
		see: "Dark, sunken spots on pods, often with a salmon-colored center in wet weather. Veins on the underside of leaves turn black.",
		do: ["It is seed-borne and splash-borne. Do not save seed from spotted pods, and do not work the plants while they are wet.", "Pull badly hit plants. Next year, widen the spacing and start with clean seed."]
	},
	{
		name: "Bacterial blight",
		kind: "Disease",
		see: "Water-soaked spots that turn brown and papery, often with a yellow halo. Pods look greasy.",
		do: ["Do not save seed. Do not overhead-water. Copper is sometimes used early, but the practical garden fix is clean seed and dry foliage.", "Three years before beans return to that bed, if you can spare the ground."]
	},
	{
		name: "Bean common mosaic",
		kind: "Disease",
		see: "Leaves mottled light and dark, puckered, sometimes narrower than they should be. Plants are stunted. Aphids moved it.",
		do: ["There is no cure in the plant. Pull it so aphids have one less source.", "Buy seed labeled mosaic-resistant the next time, and keep aphid numbers down."]
	},
	{
		name: "Rust",
		kind: "Disease",
		see: "Small rusty pustules on the underside of leaves, then yellowing and leaf drop. Worse in humid, crowded rows.",
		do: ["Pick off the first bad leaves. Water the soil, in the morning.", "Resistant varieties and more air — fewer plants, a stronger trellis — matter more than spraying."]
	},
	{
		name: "White mold",
		kind: "Disease",
		see: "Stems or pods collapse under a white cottony growth, sometimes with black hard grains inside it. Lush plants, wet flowers, still air.",
		do: ["Thin, trellis, and stop overhead water. Flowers that stay wet are the entry.", "The black grains live in soil for years. Do not compost those stems. Rotate."]
	},
	{
		name: "Tough, stringy pods",
		kind: "Culture",
		see: "The pod bends instead of snapping. Seeds inside are already round.",
		do: ["You waited. That pod is a shell bean now, not a snap. Eat it that way.", "Pick every other day once they start, and the next pods stay tender. Leaving mature pods tells the plant to stop flowering."]
	}
];
function ThePlant() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"A green bean is a common bean, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Phaseolus vulgaris" }),
			", eaten before the seeds inside finish their work. The same species gives you snap pods, shelling beans, and the dry beans in a soup pot. What changes is the day you pick."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/flowers.jpg",
			alt: "Cream and pale lilac bean flowers with a few young pods forming",
			caption: "Flowers of the common bean. Most are self-pollinated before they even open."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Two habits, one species" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bush beans are determinate. They stay near the knee, flower in a burst, and then mostly stop. Pole beans are indeterminate. They climb, keep flowering, and keep podding until frost or a hard heat wave tells them to pause. Half-runners are the short climbers in between — a few feet of vine, a low fence, and often a plant you can either snap or dry." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leaves come in threes. The first leaves out of the soil are a smooth pair; everything after that is a rough trifoliate. The stem twines when it finds a rough vertical. There are no tendrils. That single fact decides how every trellis in this book is built." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Three kitchens, one plant" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Snap." }), " The whole pod, while the seeds are still small bumps and the pod breaks clean."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Filet." }), " A snap picked younger and thinner. Miss it by two days and it is just a bean."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Romano." }), " A flat, wide pod. Meaty. Same rules: pick before the seeds round out."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Shell." }), " Seeds full-sized, pod still green. You throw the pod away."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dry." }), " Pods tan and brittle, seeds hard. This is also how you save next year’s sowing."] })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Not this plant" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A few neighbors get called beans and will not behave like this book." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Scarlet runner" }),
				" (",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Phaseolus coccineus" }),
				") is bee-pollinated, loves cooler summers, and will not cross with a snap bean. Beautiful, edible, a different crop."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Lima" }),
				" (",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Phaseolus lunatus" }),
				") wants more heat and a longer season."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Yardlong or asparagus bean" }),
				" is a cowpea, ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Vigna unguiculata" }),
				". It climbs hard and likes real heat. It will not cross with ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Phaseolus" }),
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hyacinth bean" }), " is an ornamental. Do not treat the seed as a green bean."] })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Field note",
			children: "If you are saving seed, only other common beans are a crossing risk — and even then, only a small one. Runners, limas, and cowpeas can share a bed with your seed crop."
		})
	] });
}
function Habit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pick the habit before the variety. It decides whether you build anything, how long you eat, and whether one sowing is enough." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/bush.jpg",
			alt: "A tidy row of compact bush bean plants with pods held in the foliage",
			caption: "Bush beans stay put. No trellis, a short and generous harvest, then they are done."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-6 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: " " }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Bush" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Half-runner" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Pole" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Height" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Knee" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "3–4 ft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "6–10 ft" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Support" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "None" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A low fence" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A real trellis" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "First pods" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "About 50–60 days" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "About 55–65" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "About 60–75" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "How long you pick" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Two or three weeks" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A month, if you keep up" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Until frost" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "To eat all season" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Sow every two weeks" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "One or two sowings" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "One sowing" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Seed saving" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Works, if the season is long enough to dry pods after you have eaten" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Comfortable" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "The easiest. Mark a few plants and keep picking the rest." })
				] })
			] })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Which one" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sow bush beans when you want a lot of pods in a short window — a freezer day, a canning Saturday, an early meal while the pole beans are still climbing. Sow them again two weeks later, and again, until a new row would not finish before fall frost. The planner in this book draws those dates from your frost line." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sow pole beans when the garden is small and the summer is long. One trellis, picked every other day, will out-give a bush row of the same footprint. They are later to start and worth the wait." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Half-runners are the practical mountain bean: a short trellis, a snap when young, a white soup bean if you leave the last pods. Give them something to hold or they will mat on the ground and rot where they touch." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "A small garden",
			children: "If you can build only one structure, build it for pole beans and use the open soil for a single early bush sowing. You get June from the bush plants and July through frost from the trellis."
		})
	] });
}
function Varieties() {
	const [habit, setHabit] = (0, import_react.useState)("All");
	const [use, setUse] = (0, import_react.useState)("All");
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return VARIETIES.filter((v) => {
			if (habit !== "All" && v.habit !== habit) return false;
			if (use !== "All" && v.use !== use) return false;
			if (!query) return true;
			return `${v.name} ${v.notes} ${v.seed}`.toLowerCase().includes(query);
		});
	}, [
		habit,
		use,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Days below are catalog days from sowing to first snap, except where the note says the number is to dry seed. Your soil, your heat, and a late spring will move them. Packets of hybrids are fine to eat and a poor idea to save. Everything here is a standard garden variety people grow again from their own seed." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: "Habit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "min-h-11 w-full border border-line bg-sheet px-3 text-base",
						value: habit,
						onChange: (e) => setHabit(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }), HABITS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: h }, h))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: "Use"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "min-h-11 w-full border border-line bg-sheet px-3 text-base",
						value: use,
						onChange: (e) => setUse(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }), USES.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: u }, u))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: "Search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "min-h-11 w-full border border-line bg-sheet px-3 text-base",
						value: q,
						placeholder: "Name or seed color",
						onChange: (e) => setQ(e.target.value)
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted tabular-nums",
			children: [rows.length, " varieties"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 list-none space-y-3 pl-0",
			children: rows.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line bg-sheet p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 font-display text-xl",
							children: v.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-pod tabular-nums",
							children: [v.days, " days"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							v.habit,
							" · ",
							v.use,
							" · ",
							v.height,
							" · seed ",
							v.seed
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-relaxed",
						children: v.notes
					})
				]
			}, v.name))
		}),
		rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nothing matches. Clear the search — the catalog is short on purpose." }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Reading a packet",
			children: "“Mosaic resistant” is worth paying for if bean mosaic has shown up in your beds. “Stringless” means the pod stays tender longer, not that you can ignore it for a week."
		})
	] });
}
function Ground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Beans are not hungry the way tomatoes are. They are particular about temperature, drainage, and a bacterium that lives on their roots. Get those three right and you can skip most of the fertilizer aisle." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sun and soil" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Give them six to eight hours of sun. Shade in the morning is worse than shade late in the day, because wet leaves need time to dry. The soil should drain. A cold clay that stays soggy after rain will rot the seed before it germinates. A raised bed warms faster in spring and is the easiest way to fix that." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Aim for a pH between 6.0 and 7.0. If you have never tested, a bag of compost spread an inch deep and turned into the top six inches is the right first move. Do not bury raw manure under a bean row. Too much nitrogen, and you will get a beautiful shrub with no pods." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The inoculant, and which one" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Bean roots host rhizobia that turn air into nitrogen. The strain that nodulates common beans is not the strain that nodulates peas. A packet that says “peas” and nothing else will do nothing for this crop. Buy inoculant labeled for beans or a garden mix that lists ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Phaseolus" }),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dust damp seed just before sowing, or sprinkle the powder in the furrow. You need it most on ground that has never grown a bean. If this bed grew healthy beans last year, the bacteria are probably still there. Nodules, if you dig a plant in midsummer, should be pink inside when you split one. Green or absent nodules mean the partnership did not take." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Where in the rotation" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Do not follow peas or beans with beans if you can help it. Three years between legume crops in the same bed lowers root rot, anthracnose, and the chance you are planting into last year’s beetle problem. Onions, brassicas, or a heavy-feeding summer crop are comfortable predecessors. Beans, in turn, leave the ground kinder than they found it — if they were nodulated, and if you did not let disease finish the season." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Do not feed them like tomatoes",
			children: "A soil test that is already adequate needs no fertilizer. If a test says the bed is poor, a modest phosphorus and potassium source at planting is enough. Side-dress only if the plants are pale at flowering, and then lightly. Dark, huge leaves and empty flowers are the usual sign you were generous."
		})
	] });
}
function Sowing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wait. That is the whole early chapter. A bean seed in cold, wet soil is a rotten seed. When a thermometer at sowing depth reads 60°F (16°C) on several mornings, you can start. Between 70 and 85°F (21–29°C) they come up fast and even. Below 60, they sit." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/seeds.jpg",
			alt: "White, black, and mottled bean seeds on linen beside a few dry pods",
			caption: "Seed color is a variety trait, not a quality grade. Plant what the packet describes."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/seedling.jpg",
			alt: "Bean seedlings just emerged, with smooth first leaves unfolding",
			caption: "The hooked stem straightens and opens a smooth pair of leaves. Trifoliate leaves come next."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The row" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-4 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: " " }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "In the row" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Between rows" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Depth" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Bush" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Sow at 2 in, thin to 4 in (5–10 cm)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "18–24 in (45–60 cm)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "1 in (2.5 cm)" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Pole" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "4–6 in along the trellis (10–15 cm)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "One row per trellis face" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "1 in, or 1½ in if the soil is hot and sandy" })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Half-runner" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "4 in" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A low fence, or 30 in if they sprawl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "1 in" })
				] })
			] })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Never deeper than 2 inches. Cover, firm the soil so the seed sits against moisture, and water once if the bed is dry. Then leave it. Daily sprinkling cools the soil and crusts the surface the hook has to push through." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Put the trellis up first if these are pole beans. You will not want to do it once the hooks are up." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open a furrow an inch deep. Dust inoculant if this ground is new to beans." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Space the seed. Sow extras in the row, not in a tray." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Close the furrow and firm it with your palm." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Expect emergence in 6 to 10 days in warm soil. In cold soil, do not expect anything." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "When the plants have a few true leaves, thin by cutting, not pulling, so you do not tear a neighbor’s root." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedCalculator, {
			defaultLength: 8,
			defaultSpacing: 6,
			defaultRows: 1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Do not start them in pots unless you must" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Beans make a root that hates being disturbed. Direct sowing is the crop. If your season is honestly too short, sow indoors no earlier than two weeks before the last frost, in a pot you can plant whole — a soil block, a paper pot, something that does not ask you to slide the root ball out. Set them in the garden at or just after the frost date, and do not let them sit root-bound. A plant that waited a month on a windowsill will be behind a seed sown in warm soil the same week you transplanted." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Succession" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bush beans finish. That is their nature, not a failure. Sow another row every 14 days until a sowing would have less than its days-to-harvest plus two weeks before fall frost. Pole beans get one sowing. They are the succession." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Soaking",
			children: "Skip it when the soil is cool. In hot midsummer soil, a two- to four-hour soak can even up a sowing. Longer than that and you are growing mold. Never soak and then delay planting."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"The ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/planner",
				children: "season planner"
			}),
			" turns your frost dates into a list of sowings, first picks, and the day a seed crop ought to be dry."
		] })
	] });
}
function Care() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "After emergence there is less to do than with tomatoes, and the things you skip matter. Beans have shallow roots. A deep hoe is how a careful gardener ruins a good row." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Water" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "About an inch a week, rain included, and more while they flower and fill pods. Water the soil in the morning. Wet leaves overnight are how anthracnose, blight, and rust get a start. A soaker hose or a watering can at the base is the whole technology." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Uneven water — a drought, then a flood — gives you tough pods and dropped flowers. When the soil under the mulch is dry a knuckle down, water deeply and then stop." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Mulch, but late" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wait until the seedlings are a hand tall and the soil is actually warm. Two inches of straw then keeps the roots cool and the pods off the dirt. Mulch laid at sowing keeps the bed cold and the seed wet. That is the opposite of what May needs." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Weeds and the first vines" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hand-weed close to the stems. Between rows, a shallow scuffle is enough. Once a week for the first fortnight of climbing, walk the trellis and tuck leaders onto their string or pole. After they catch, they go up without you. A vine that sprawls into the path will not come back to the trellis politely. Move it while it is a foot long." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/flowers.jpg",
			alt: "Bean blossoms and the first slender pods",
			caption: "Flowers and the first pods often share a vine. Keep the soil even now."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "When flowers fall off" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A few dropped blossoms are normal. A vine full of flowers and no pods is usually heat, drought, or nitrogen. Days over about 90°F (32°C), and warm nights with them, will abort the set. Pole beans often resume when the weather breaks. A bush bean may be done — which is why the next sowing is already in the ground two weeks behind it." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Do not answer blossom drop with fertilizer. If the leaves are already deep green and large, more nitrogen makes it worse." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Row cover",
			children: "Common beans pollinate themselves. A cover can stay on for beetles, and you do not need to lift it for bees. You do need a way to reach in and pick. Runner beans are the exception: those flowers want insects, and a cover will cost you the crop."
		})
	] });
}
function TrellisChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A pole bean does not grab. It circles. The stem winds around anything rough and vertical and thick enough to feel — jute, a bamboo pole, the wire of a cattle panel, a corn stalk. Nylon cord, plastic baling twine, and a smooth metal stake are things it slips off. Build for a twining stem, not for a pea tendril." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/cover.jpg",
			alt: "Pole beans climbing a rustic wooden trellis with many snap pods hanging",
			caption: "The trellis goes in before the seed. A loaded bean wall is heavier than it looks."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Rules that apply to every design" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Put it up the day you sow, or the day before. Retrofitting a trellis through a tangle breaks stems." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Give most pole snaps 6 to 8 feet of climb. A few heirlooms want 10 and will wad up on a short fence." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Rough verticals every 6 inches, or a mesh with about a 4-inch opening. Tighter mesh is miserable to pick through and worse to clean in the fall." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bury posts for real — 18 to 24 inches. A bean wall in a thunderstorm is a sail." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plan the take-down. Jute composts with the vine. Nylon netting does not, and you will swear at it." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Bush beans do not need one" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A bush plant that flops under a heavy set can have a short stake or a single string along the row. That is a prop, not a trellis. Half-runners want three or four feet — a low fence or a short A. If they are on the ground they will still pod, and the pods on the soil will rot." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The six designs" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Measured drawings, materials, and the order to build them live with the designs. Pick the one that fits the bed you have." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "list-none pl-0",
			children: TRELLISES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "mt-3 border-b border-line pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trellises/$id",
					params: { id: t.id },
					className: "font-display text-xl",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: t.summary
				})]
			}, t.id))
		})
	] });
}
function Kitchen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A snap bean is ready when the pod breaks cleanly and the seeds inside are bumps, not marbles. If you have to string it, you are late for a snap and early for a shell bean. Both are edible. They are not the same dish." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/harvest.jpg",
			alt: "A wooden trug filled with freshly picked snap beans on a kitchen table",
			caption: "Pick into a basket, not a plastic bag left in the sun. Heat after picking is what toughens them."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How often" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every other day once they start, every day in hot weather. A filet bean is on a shorter clock than a romano. Pole beans will keep opening new flowers as long as you do not let mature pods hang. Those pods are the plant’s signal that the next generation is handled and it can stop." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hold the stem with one hand and pinch the pod off with the other. Yanking pulls a whole leader off the trellis, and that leader was next week’s flowers." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "After picking" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not wash them until you cook them. Water in a fridge bag is how they spot." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A dry towel in a loose container, cold, and they are good for several days. Not a week." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "To freeze: trim, blanch about two minutes for slender pods and three for fat ones, chill in ice water, dry, and pack. Unblanched beans go starchy and off." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shell beans keep a couple of days in the pod in the fridge. Dry beans are a different chapter." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The shell stage" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When the seeds are fat and the pod is still green and leathery, stop pretending it is a snap. Shell them. Cook the seeds as you would a fresh lima — shorter than a dry bean, longer than a green pod. Dragon Tongue, Jacob’s Cattle, and the half-runners are particularly good this way. Then, if you want seed, leave the next pods alone entirely." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Overgrown is not wasted",
			children: "A row you abandoned for a week is a shell-bean harvest. A row you abandoned for a month, in dry weather, is the start of a seed crop. The mistake is throwing them out because they no longer match the packet photo."
		})
	] });
}
function Seed() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Saving bean seed is one of the more honest jobs in a garden. The flower fertilizes itself before it opens, so the seed usually grows up to be what its parent was. You still have to dry it all the way, keep it from weevils, and not save it off a diseased plant." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: "/plates/dry.jpg",
			alt: "Tan dry bean pods hanging on a vine at the end of the season",
			caption: "Ready when the pod is parchment and the seeds rattle. Green shoulders mean more time."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Who to save from" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One variety at a time if you can. If not, ten to twenty feet between common beans is enough for a household crop. A few bees will still move a little pollen. For seed you might give away, give them more room, or grow one variety." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Skip hybrids if the packet says F1. The children will not match the parent." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Save from at least ten plants, twenty if you have them. One heroic plant is a bottleneck. Do it once and you will notice. Do it every year and the variety shrinks." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mark the plants early, while you can still see that they are healthy, true to type, and not the first to get blight. A ribbon on the trellis. Then do not pick those pods for dinner." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Never save seed from pods with sunken spots, greasy lesions, or from a vine with mosaic. Those diseases ride inside the seed." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Drying" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leave the chosen pods on the plant past the snap stage, past the shell stage, until they are tan, brittle, and noisy. If rain or frost is coming and the pods are already yellow and leathery, pull the whole plant and hang it somewhere dry and airy. A garage beam is a seed dryer. A closed plastic bin is a mold factory." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shell them when the pods shatter in your hands. Spread the seed one layer deep on a screen or a plate for another week or two indoors. They are dry enough when your fingernail does not dent them and they click on a counter. Damp seed molds in the jar. It also dies in the freezer, which is the next step." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Weevils, then the jar" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bean weevils lay in pods in the garden. You will not see the larvae until a neat round hole appears in a seed in January. Once the seed is fully dry, freeze it at 0°F (−18°C) for three to seven days. Then jar it. Freezing damp seed is how you get cracked, dead seed." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A glass jar, airtight, in a cupboard that stays cool and dark, keeps common bean seed in good shape for three or four years, sometimes five. Write the variety, the year, and where it grew. “Kentucky Wonder, 2027, east teepee, no beetle damage” is a better label than “beans.”" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GermTest, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sowing your own" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Treat saved seed the way you treat packet seed. Same soil temperature, same depth, same refusal to sow into a cold May. If the germination test comes back tired, sow thicker and plan a fresh lot from the healthiest plants, not from the leftovers." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "What not to save",
			children: "Seed from a diseased pod. Seed that still dents. Seed from a single plant, repeated for years. Seed stored above the stove. And seed of a runner bean, under the rules in this chapter — runners cross freely, and they are a different species with different manners."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"When the jar is labeled, the book has done its loop. Next spring you are back at ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/read/$chapter",
				params: { chapter: "sowing" },
				children: "sowing"
			}),
			", with seed that already knows your garden."
		] })
	] });
}
function Troubles() {
	const [kind, setKind] = (0, import_react.useState)("All");
	const rows = TROUBLES.filter((t) => kind === "All" || t.kind === kind);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Look at the soil temperature and the leaves before you look for a spray. Cold wet seed, overhead water at dusk, and a row that never dries are behind more lost beans than any insect. What follows is what you can see, and the first thing to do about it." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-5 flex flex-wrap gap-2",
			children: [
				"All",
				"Culture",
				"Insect",
				"Disease"
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setKind(k),
				className: "min-h-11 border px-3 text-sm transition-transform duration-150 active:scale-[0.96] " + (kind === k ? "border-leaf bg-leaf text-paper" : "border-line bg-sheet text-ink"),
				children: k
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "list-none space-y-4 pl-0",
			children: rows.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line bg-sheet p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-pod",
						children: t.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-xl",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: t.see
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: t.do.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step)) })
				]
			}, t.name))
		})
	] });
}
var BODIES = {
	"the-plant": ThePlant,
	habit: Habit,
	varieties: Varieties,
	ground: Ground,
	sowing: Sowing,
	care: Care,
	trellises: TrellisChapter,
	kitchen: Kitchen,
	seed: Seed,
	troubles: Troubles
};
function Reader() {
	const { chapter } = Route$2.useParams();
	const meta = chapterBySlug(chapter);
	const read = useBook((s) => s.read);
	const toggleRead = useBook((s) => s.toggleRead);
	if (!meta) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "That chapter is not in the book"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-6 inline-flex min-h-11 items-center text-leaf underline",
			children: "Back to the contents"
		})]
	}) });
	const Body = BODIES[meta.slug];
	const { prev, next } = neighbors(meta.slug);
	const done = read.includes(meta.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gap-10 py-8 lg:grid lg:grid-cols-[14rem_minmax(0,42rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mb-8 hidden lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Contents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 space-y-1",
				children: CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$chapter",
					params: { chapter: c.slug },
					className: "flex min-h-11 items-baseline gap-2 text-sm " + (c.slug === meta.slug ? "text-leaf" : "text-ink"),
					"aria-current": c.slug === meta.slug ? "page" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-muted",
						children: c.numeral
					}), c.title]
				}) }, c.slug))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-pod",
				children: [
					"Chapter ",
					meta.numeral,
					" · ",
					meta.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-balance md:text-5xl",
				children: meta.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-lg leading-relaxed text-pretty text-muted",
				children: meta.lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [meta.minutes, " minute read"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "book mt-6 max-w-2xl text-lg",
				children: Body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap items-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					tone: done ? "sheet" : "leaf",
					onClick: () => toggleRead(meta.slug),
					children: done ? "Read — tap to clear" : "Mark this chapter read"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-2",
				"aria-label": "Chapters",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$chapter",
					params: { chapter: prev.slug },
					className: "min-h-14 border border-line bg-sheet p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl",
						children: prev.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$chapter",
					params: { chapter: next.slug },
					className: "min-h-14 border border-line bg-sheet p-4 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl",
						children: next.title
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/trellises",
					className: "min-h-14 border border-line bg-sheet p-4 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Then build"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl",
						children: "Trellis designs"
					})]
				})]
			})
		] })]
	}) });
}
//#endregion
export { Reader as component };
