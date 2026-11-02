//#region node_modules/.nitro/vite/services/ssr/assets/chapters-CGAo5Ocp.js
var CHAPTERS = [
	{
		slug: "the-plant",
		numeral: "01",
		title: "The plant",
		kicker: "What a green bean is",
		lede: "A common bean, not a yardlong and not a runner. Habit, flower, and the three ways to eat the same plant.",
		minutes: 6
	},
	{
		slug: "habit",
		numeral: "02",
		title: "Bush, pole, or half-runner",
		kicker: "Choose the shape of the season",
		lede: "Bush beans finish in a rush. Pole beans climb and keep giving. Half-runners sit between them and still want a little support.",
		minutes: 5
	},
	{
		slug: "varieties",
		numeral: "03",
		title: "A short catalog",
		kicker: "Varieties worth growing",
		lede: "Sixteen open-pollinated and standard garden kinds, with days, habit, and what the pod is for.",
		minutes: 7
	},
	{
		slug: "ground",
		numeral: "04",
		title: "Soil, sun, and inoculant",
		kicker: "The bed before the seed",
		lede: "Warm, loose, not rich in nitrogen. The right rhizobia if this ground has never grown a bean.",
		minutes: 6
	},
	{
		slug: "sowing",
		numeral: "05",
		title: "Sowing the seed",
		kicker: "From packet to row",
		lede: "Soil at 60°F, an inch deep, trellis already standing. How many seeds, how far apart, and when to sow again.",
		minutes: 8
	},
	{
		slug: "care",
		numeral: "06",
		title: "The long middle",
		kicker: "Water, flowers, and heat",
		lede: "Shallow roots, a mulch that waits for warm soil, and why blossoms fall off in a hot week.",
		minutes: 6
	},
	{
		slug: "trellises",
		numeral: "07",
		title: "How a bean climbs",
		kicker: "Before you build",
		lede: "Beans twine. They do not grab. Put up a rough support the day you sow, and read the six designs next door.",
		minutes: 5
	},
	{
		slug: "kitchen",
		numeral: "08",
		title: "Picking for the kitchen",
		kicker: "Snap, filet, romano, shell",
		lede: "The pod should snap. The seed inside should still be a rumor. Pick often or the plant decides it is finished.",
		minutes: 6
	},
	{
		slug: "seed",
		numeral: "09",
		title: "Saving seed",
		kicker: "The harvest that is next year",
		lede: "Leave the best pods. Dry them until they rattle. Freeze out the weevils. Label the jar.",
		minutes: 9
	},
	{
		slug: "troubles",
		numeral: "10",
		title: "When something goes wrong",
		kicker: "Pests, diseases, weather",
		lede: "Most bean trouble is cold soil, wet leaves, or a beetle in a yellow coat. Here is what to do about each.",
		minutes: 7
	}
];
function chapterBySlug(slug) {
	return CHAPTERS.find((c) => c.slug === slug);
}
function neighbors(slug) {
	const i = CHAPTERS.findIndex((c) => c.slug === slug);
	return {
		prev: i > 0 ? CHAPTERS[i - 1] : void 0,
		next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : void 0
	};
}
//#endregion
export { chapterBySlug as n, neighbors as r, CHAPTERS as t };
