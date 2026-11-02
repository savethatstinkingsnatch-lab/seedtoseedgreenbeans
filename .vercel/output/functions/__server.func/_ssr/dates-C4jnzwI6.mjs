//#region node_modules/.nitro/vite/services/ssr/assets/dates-C4jnzwI6.js
function parseDay(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y ?? 2027, (m ?? 1) - 1, d ?? 1);
}
function addDays(d, n) {
	const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	x.setDate(x.getDate() + n);
	return x;
}
function formatDay(d) {
	return d.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
//#endregion
export { formatDay as n, parseDay as r, addDays as t };
