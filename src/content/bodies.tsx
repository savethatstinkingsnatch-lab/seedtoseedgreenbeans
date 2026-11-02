import { Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactElement } from "react";
import { BedCalculator, GermTest } from "@/components/calculators";
import { Note, Plate } from "@/components/chrome";
import { HABITS, USES, VARIETIES, type Habit, type Use } from "@/content/varieties";
import { TRELLISES } from "@/content/trellises";
import { TROUBLES, type TroubleKind } from "@/content/troubles";

function ThePlant() {
  return (
    <>
      <p>
        A green bean is a common bean, <em>Phaseolus vulgaris</em>, eaten before the seeds inside finish their work. The same species gives you snap pods, shelling beans, and the dry beans in a soup pot. What changes is the day you pick.
      </p>
      <Plate
        src="/plates/flowers.jpg"
        alt="Cream and pale lilac bean flowers with a few young pods forming"
        caption="Flowers of the common bean. Most are self-pollinated before they even open."
      />
      <h2>Two habits, one species</h2>
      <p>
        Bush beans are determinate. They stay near the knee, flower in a burst, and then mostly stop. Pole beans are indeterminate. They climb, keep flowering, and keep podding until frost or a hard heat wave tells them to pause. Half-runners are the short climbers in between — a few feet of vine, a low fence, and often a plant you can either snap or dry.
      </p>
      <p>
        Leaves come in threes. The first leaves out of the soil are a smooth pair; everything after that is a rough trifoliate. The stem twines when it finds a rough vertical. There are no tendrils. That single fact decides how every trellis in this book is built.
      </p>
      <h2>Three kitchens, one plant</h2>
      <ul>
        <li>
          <strong>Snap.</strong> The whole pod, while the seeds are still small bumps and the pod breaks clean.
        </li>
        <li>
          <strong>Filet.</strong> A snap picked younger and thinner. Miss it by two days and it is just a bean.
        </li>
        <li>
          <strong>Romano.</strong> A flat, wide pod. Meaty. Same rules: pick before the seeds round out.
        </li>
        <li>
          <strong>Shell.</strong> Seeds full-sized, pod still green. You throw the pod away.
        </li>
        <li>
          <strong>Dry.</strong> Pods tan and brittle, seeds hard. This is also how you save next year’s sowing.
        </li>
      </ul>
      <h2>Not this plant</h2>
      <p>
        A few neighbors get called beans and will not behave like this book.
      </p>
      <ul>
        <li>
          <strong>Scarlet runner</strong> (<em>Phaseolus coccineus</em>) is bee-pollinated, loves cooler summers, and will not cross with a snap bean. Beautiful, edible, a different crop.
        </li>
        <li>
          <strong>Lima</strong> (<em>Phaseolus lunatus</em>) wants more heat and a longer season.
        </li>
        <li>
          <strong>Yardlong or asparagus bean</strong> is a cowpea, <em>Vigna unguiculata</em>. It climbs hard and likes real heat. It will not cross with <em>Phaseolus</em>.
        </li>
        <li>
          <strong>Hyacinth bean</strong> is an ornamental. Do not treat the seed as a green bean.
        </li>
      </ul>
      <Note title="Field note">
        If you are saving seed, only other common beans are a crossing risk — and even then, only a small one. Runners, limas, and cowpeas can share a bed with your seed crop.
      </Note>
    </>
  );
}

function Habit() {
  return (
    <>
      <p>
        Pick the habit before the variety. It decides whether you build anything, how long you eat, and whether one sowing is enough.
      </p>
      <Plate
        src="/plates/bush.jpg"
        alt="A tidy row of compact bush bean plants with pods held in the foliage"
        caption="Bush beans stay put. No trellis, a short and generous harvest, then they are done."
      />
      <div className="my-6 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Bush</th>
              <th>Half-runner</th>
              <th>Pole</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Height</td>
              <td>Knee</td>
              <td>3–4 ft</td>
              <td>6–10 ft</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>None</td>
              <td>A low fence</td>
              <td>A real trellis</td>
            </tr>
            <tr>
              <td>First pods</td>
              <td>About 50–60 days</td>
              <td>About 55–65</td>
              <td>About 60–75</td>
            </tr>
            <tr>
              <td>How long you pick</td>
              <td>Two or three weeks</td>
              <td>A month, if you keep up</td>
              <td>Until frost</td>
            </tr>
            <tr>
              <td>To eat all season</td>
              <td>Sow every two weeks</td>
              <td>One or two sowings</td>
              <td>One sowing</td>
            </tr>
            <tr>
              <td>Seed saving</td>
              <td>Works, if the season is long enough to dry pods after you have eaten</td>
              <td>Comfortable</td>
              <td>The easiest. Mark a few plants and keep picking the rest.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Which one</h2>
      <p>
        Sow bush beans when you want a lot of pods in a short window — a freezer day, a canning Saturday, an early meal while the pole beans are still climbing. Sow them again two weeks later, and again, until a new row would not finish before fall frost. The planner in this book draws those dates from your frost line.
      </p>
      <p>
        Sow pole beans when the garden is small and the summer is long. One trellis, picked every other day, will out-give a bush row of the same footprint. They are later to start and worth the wait.
      </p>
      <p>
        Half-runners are the practical mountain bean: a short trellis, a snap when young, a white soup bean if you leave the last pods. Give them something to hold or they will mat on the ground and rot where they touch.
      </p>
      <Note title="A small garden">
        If you can build only one structure, build it for pole beans and use the open soil for a single early bush sowing. You get June from the bush plants and July through frost from the trellis.
      </Note>
    </>
  );
}

function Varieties() {
  const [habit, setHabit] = useState<Habit | "All">("All");
  const [use, setUse] = useState<Use | "All">("All");
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return VARIETIES.filter((v) => {
      if (habit !== "All" && v.habit !== habit) return false;
      if (use !== "All" && v.use !== use) return false;
      if (!query) return true;
      return `${v.name} ${v.notes} ${v.seed}`.toLowerCase().includes(query);
    });
  }, [habit, use, q]);

  return (
    <>
      <p>
        Days below are catalog days from sowing to first snap, except where the note says the number is to dry seed. Your soil, your heat, and a late spring will move them. Packets of hybrids are fine to eat and a poor idea to save. Everything here is a standard garden variety people grow again from their own seed.
      </p>
      <div className="my-6 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Habit</span>
          <select
            className="min-h-11 w-full border border-line bg-sheet px-3 text-base"
            value={habit}
            onChange={(e) => setHabit(e.target.value as Habit | "All")}
          >
            <option>All</option>
            {HABITS.map((h) => (
              <option key={h}>{h}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Use</span>
          <select
            className="min-h-11 w-full border border-line bg-sheet px-3 text-base"
            value={use}
            onChange={(e) => setUse(e.target.value as Use | "All")}
          >
            <option>All</option>
            {USES.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Search</span>
          <input
            className="min-h-11 w-full border border-line bg-sheet px-3 text-base"
            value={q}
            placeholder="Name or seed color"
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
      </div>
      <p className="text-sm text-muted tabular-nums">{rows.length} varieties</p>
      <ul className="mt-3 list-none space-y-3 pl-0">
        {rows.map((v) => (
          <li key={v.name} className="border border-line bg-sheet p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="mt-0 font-display text-xl">{v.name}</h3>
              <p className="font-display text-pod tabular-nums">{v.days} days</p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {v.habit} · {v.use} · {v.height} · seed {v.seed}
            </p>
            <p className="mt-2 text-base leading-relaxed">{v.notes}</p>
          </li>
        ))}
      </ul>
      {rows.length === 0 ? (
        <p>Nothing matches. Clear the search — the catalog is short on purpose.</p>
      ) : null}
      <Note title="Reading a packet">
        “Mosaic resistant” is worth paying for if bean mosaic has shown up in your beds. “Stringless” means the pod stays tender longer, not that you can ignore it for a week.
      </Note>
    </>
  );
}

function Ground() {
  return (
    <>
      <p>
        Beans are not hungry the way tomatoes are. They are particular about temperature, drainage, and a bacterium that lives on their roots. Get those three right and you can skip most of the fertilizer aisle.
      </p>
      <h2>Sun and soil</h2>
      <p>
        Give them six to eight hours of sun. Shade in the morning is worse than shade late in the day, because wet leaves need time to dry. The soil should drain. A cold clay that stays soggy after rain will rot the seed before it germinates. A raised bed warms faster in spring and is the easiest way to fix that.
      </p>
      <p>
        Aim for a pH between 6.0 and 7.0. If you have never tested, a bag of compost spread an inch deep and turned into the top six inches is the right first move. Do not bury raw manure under a bean row. Too much nitrogen, and you will get a beautiful shrub with no pods.
      </p>
      <h2>The inoculant, and which one</h2>
      <p>
        Bean roots host rhizobia that turn air into nitrogen. The strain that nodulates common beans is not the strain that nodulates peas. A packet that says “peas” and nothing else will do nothing for this crop. Buy inoculant labeled for beans or a garden mix that lists <em>Phaseolus</em>.
      </p>
      <p>
        Dust damp seed just before sowing, or sprinkle the powder in the furrow. You need it most on ground that has never grown a bean. If this bed grew healthy beans last year, the bacteria are probably still there. Nodules, if you dig a plant in midsummer, should be pink inside when you split one. Green or absent nodules mean the partnership did not take.
      </p>
      <h2>Where in the rotation</h2>
      <p>
        Do not follow peas or beans with beans if you can help it. Three years between legume crops in the same bed lowers root rot, anthracnose, and the chance you are planting into last year’s beetle problem. Onions, brassicas, or a heavy-feeding summer crop are comfortable predecessors. Beans, in turn, leave the ground kinder than they found it — if they were nodulated, and if you did not let disease finish the season.
      </p>
      <Note title="Do not feed them like tomatoes">
        A soil test that is already adequate needs no fertilizer. If a test says the bed is poor, a modest phosphorus and potassium source at planting is enough. Side-dress only if the plants are pale at flowering, and then lightly. Dark, huge leaves and empty flowers are the usual sign you were generous.
      </Note>
    </>
  );
}

function Sowing() {
  return (
    <>
      <p>
        Wait. That is the whole early chapter. A bean seed in cold, wet soil is a rotten seed. When a thermometer at sowing depth reads 60°F (16°C) on several mornings, you can start. Between 70 and 85°F (21–29°C) they come up fast and even. Below 60, they sit.
      </p>
      <Plate
        src="/plates/seeds.jpg"
        alt="White, black, and mottled bean seeds on linen beside a few dry pods"
        caption="Seed color is a variety trait, not a quality grade. Plant what the packet describes."
      />
      <Plate
        src="/plates/seedling.jpg"
        alt="Bean seedlings just emerged, with smooth first leaves unfolding"
        caption="The hooked stem straightens and opens a smooth pair of leaves. Trifoliate leaves come next."
      />
      <h2>The row</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>In the row</th>
              <th>Between rows</th>
              <th>Depth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bush</td>
              <td>Sow at 2 in, thin to 4 in (5–10 cm)</td>
              <td>18–24 in (45–60 cm)</td>
              <td>1 in (2.5 cm)</td>
            </tr>
            <tr>
              <td>Pole</td>
              <td>4–6 in along the trellis (10–15 cm)</td>
              <td>One row per trellis face</td>
              <td>1 in, or 1½ in if the soil is hot and sandy</td>
            </tr>
            <tr>
              <td>Half-runner</td>
              <td>4 in</td>
              <td>A low fence, or 30 in if they sprawl</td>
              <td>1 in</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Never deeper than 2 inches. Cover, firm the soil so the seed sits against moisture, and water once if the bed is dry. Then leave it. Daily sprinkling cools the soil and crusts the surface the hook has to push through.
      </p>
      <ol>
        <li>Put the trellis up first if these are pole beans. You will not want to do it once the hooks are up.</li>
        <li>Open a furrow an inch deep. Dust inoculant if this ground is new to beans.</li>
        <li>Space the seed. Sow extras in the row, not in a tray.</li>
        <li>Close the furrow and firm it with your palm.</li>
        <li>Expect emergence in 6 to 10 days in warm soil. In cold soil, do not expect anything.</li>
        <li>When the plants have a few true leaves, thin by cutting, not pulling, so you do not tear a neighbor’s root.</li>
      </ol>
      <BedCalculator defaultLength={8} defaultSpacing={6} defaultRows={1} />
      <h2>Do not start them in pots unless you must</h2>
      <p>
        Beans make a root that hates being disturbed. Direct sowing is the crop. If your season is honestly too short, sow indoors no earlier than two weeks before the last frost, in a pot you can plant whole — a soil block, a paper pot, something that does not ask you to slide the root ball out. Set them in the garden at or just after the frost date, and do not let them sit root-bound. A plant that waited a month on a windowsill will be behind a seed sown in warm soil the same week you transplanted.
      </p>
      <h2>Succession</h2>
      <p>
        Bush beans finish. That is their nature, not a failure. Sow another row every 14 days until a sowing would have less than its days-to-harvest plus two weeks before fall frost. Pole beans get one sowing. They are the succession.
      </p>
      <Note title="Soaking">
        Skip it when the soil is cool. In hot midsummer soil, a two- to four-hour soak can even up a sowing. Longer than that and you are growing mold. Never soak and then delay planting.
      </Note>
      <p>
        The <Link to="/planner">season planner</Link> turns your frost dates into a list of sowings, first picks, and the day a seed crop ought to be dry.
      </p>
    </>
  );
}

function Care() {
  return (
    <>
      <p>
        After emergence there is less to do than with tomatoes, and the things you skip matter. Beans have shallow roots. A deep hoe is how a careful gardener ruins a good row.
      </p>
      <h2>Water</h2>
      <p>
        About an inch a week, rain included, and more while they flower and fill pods. Water the soil in the morning. Wet leaves overnight are how anthracnose, blight, and rust get a start. A soaker hose or a watering can at the base is the whole technology.
      </p>
      <p>
        Uneven water — a drought, then a flood — gives you tough pods and dropped flowers. When the soil under the mulch is dry a knuckle down, water deeply and then stop.
      </p>
      <h2>Mulch, but late</h2>
      <p>
        Wait until the seedlings are a hand tall and the soil is actually warm. Two inches of straw then keeps the roots cool and the pods off the dirt. Mulch laid at sowing keeps the bed cold and the seed wet. That is the opposite of what May needs.
      </p>
      <h2>Weeds and the first vines</h2>
      <p>
        Hand-weed close to the stems. Between rows, a shallow scuffle is enough. Once a week for the first fortnight of climbing, walk the trellis and tuck leaders onto their string or pole. After they catch, they go up without you. A vine that sprawls into the path will not come back to the trellis politely. Move it while it is a foot long.
      </p>
      <Plate
        src="/plates/flowers.jpg"
        alt="Bean blossoms and the first slender pods"
        caption="Flowers and the first pods often share a vine. Keep the soil even now."
      />
      <h2>When flowers fall off</h2>
      <p>
        A few dropped blossoms are normal. A vine full of flowers and no pods is usually heat, drought, or nitrogen. Days over about 90°F (32°C), and warm nights with them, will abort the set. Pole beans often resume when the weather breaks. A bush bean may be done — which is why the next sowing is already in the ground two weeks behind it.
      </p>
      <p>
        Do not answer blossom drop with fertilizer. If the leaves are already deep green and large, more nitrogen makes it worse.
      </p>
      <Note title="Row cover">
        Common beans pollinate themselves. A cover can stay on for beetles, and you do not need to lift it for bees. You do need a way to reach in and pick. Runner beans are the exception: those flowers want insects, and a cover will cost you the crop.
      </Note>
    </>
  );
}

function TrellisChapter() {
  return (
    <>
      <p>
        A pole bean does not grab. It circles. The stem winds around anything rough and vertical and thick enough to feel — jute, a bamboo pole, the wire of a cattle panel, a corn stalk. Nylon cord, plastic baling twine, and a smooth metal stake are things it slips off. Build for a twining stem, not for a pea tendril.
      </p>
      <Plate
        src="/plates/cover.jpg"
        alt="Pole beans climbing a rustic wooden trellis with many snap pods hanging"
        caption="The trellis goes in before the seed. A loaded bean wall is heavier than it looks."
      />
      <h2>Rules that apply to every design</h2>
      <ul>
        <li>Put it up the day you sow, or the day before. Retrofitting a trellis through a tangle breaks stems.</li>
        <li>Give most pole snaps 6 to 8 feet of climb. A few heirlooms want 10 and will wad up on a short fence.</li>
        <li>Rough verticals every 6 inches, or a mesh with about a 4-inch opening. Tighter mesh is miserable to pick through and worse to clean in the fall.</li>
        <li>Bury posts for real — 18 to 24 inches. A bean wall in a thunderstorm is a sail.</li>
        <li>Plan the take-down. Jute composts with the vine. Nylon netting does not, and you will swear at it.</li>
      </ul>
      <h2>Bush beans do not need one</h2>
      <p>
        A bush plant that flops under a heavy set can have a short stake or a single string along the row. That is a prop, not a trellis. Half-runners want three or four feet — a low fence or a short A. If they are on the ground they will still pod, and the pods on the soil will rot.
      </p>
      <h2>The six designs</h2>
      <p>
        Measured drawings, materials, and the order to build them live with the designs. Pick the one that fits the bed you have.
      </p>
      <ul className="list-none pl-0">
        {TRELLISES.map((t) => (
          <li key={t.id} className="mt-3 border-b border-line pb-3">
            <Link to="/trellises/$id" params={{ id: t.id }} className="font-display text-xl">
              {t.name}
            </Link>
            <p className="mt-1 text-sm text-muted">{t.summary}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function Kitchen() {
  return (
    <>
      <p>
        A snap bean is ready when the pod breaks cleanly and the seeds inside are bumps, not marbles. If you have to string it, you are late for a snap and early for a shell bean. Both are edible. They are not the same dish.
      </p>
      <Plate
        src="/plates/harvest.jpg"
        alt="A wooden trug filled with freshly picked snap beans on a kitchen table"
        caption="Pick into a basket, not a plastic bag left in the sun. Heat after picking is what toughens them."
      />
      <h2>How often</h2>
      <p>
        Every other day once they start, every day in hot weather. A filet bean is on a shorter clock than a romano. Pole beans will keep opening new flowers as long as you do not let mature pods hang. Those pods are the plant’s signal that the next generation is handled and it can stop.
      </p>
      <p>
        Hold the stem with one hand and pinch the pod off with the other. Yanking pulls a whole leader off the trellis, and that leader was next week’s flowers.
      </p>
      <h2>After picking</h2>
      <ul>
        <li>Do not wash them until you cook them. Water in a fridge bag is how they spot.</li>
        <li>A dry towel in a loose container, cold, and they are good for several days. Not a week.</li>
        <li>To freeze: trim, blanch about two minutes for slender pods and three for fat ones, chill in ice water, dry, and pack. Unblanched beans go starchy and off.</li>
        <li>Shell beans keep a couple of days in the pod in the fridge. Dry beans are a different chapter.</li>
      </ul>
      <h2>The shell stage</h2>
      <p>
        When the seeds are fat and the pod is still green and leathery, stop pretending it is a snap. Shell them. Cook the seeds as you would a fresh lima — shorter than a dry bean, longer than a green pod. Dragon Tongue, Jacob’s Cattle, and the half-runners are particularly good this way. Then, if you want seed, leave the next pods alone entirely.
      </p>
      <Note title="Overgrown is not wasted">
        A row you abandoned for a week is a shell-bean harvest. A row you abandoned for a month, in dry weather, is the start of a seed crop. The mistake is throwing them out because they no longer match the packet photo.
      </Note>
    </>
  );
}

function Seed() {
  return (
    <>
      <p>
        Saving bean seed is one of the more honest jobs in a garden. The flower fertilizes itself before it opens, so the seed usually grows up to be what its parent was. You still have to dry it all the way, keep it from weevils, and not save it off a diseased plant.
      </p>
      <Plate
        src="/plates/dry.jpg"
        alt="Tan dry bean pods hanging on a vine at the end of the season"
        caption="Ready when the pod is parchment and the seeds rattle. Green shoulders mean more time."
      />
      <h2>Who to save from</h2>
      <ol>
        <li>One variety at a time if you can. If not, ten to twenty feet between common beans is enough for a household crop. A few bees will still move a little pollen. For seed you might give away, give them more room, or grow one variety.</li>
        <li>Skip hybrids if the packet says F1. The children will not match the parent.</li>
        <li>Save from at least ten plants, twenty if you have them. One heroic plant is a bottleneck. Do it once and you will notice. Do it every year and the variety shrinks.</li>
        <li>Mark the plants early, while you can still see that they are healthy, true to type, and not the first to get blight. A ribbon on the trellis. Then do not pick those pods for dinner.</li>
        <li>Never save seed from pods with sunken spots, greasy lesions, or from a vine with mosaic. Those diseases ride inside the seed.</li>
      </ol>
      <h2>Drying</h2>
      <p>
        Leave the chosen pods on the plant past the snap stage, past the shell stage, until they are tan, brittle, and noisy. If rain or frost is coming and the pods are already yellow and leathery, pull the whole plant and hang it somewhere dry and airy. A garage beam is a seed dryer. A closed plastic bin is a mold factory.
      </p>
      <p>
        Shell them when the pods shatter in your hands. Spread the seed one layer deep on a screen or a plate for another week or two indoors. They are dry enough when your fingernail does not dent them and they click on a counter. Damp seed molds in the jar. It also dies in the freezer, which is the next step.
      </p>
      <h2>Weevils, then the jar</h2>
      <p>
        Bean weevils lay in pods in the garden. You will not see the larvae until a neat round hole appears in a seed in January. Once the seed is fully dry, freeze it at 0°F (−18°C) for three to seven days. Then jar it. Freezing damp seed is how you get cracked, dead seed.
      </p>
      <p>
        A glass jar, airtight, in a cupboard that stays cool and dark, keeps common bean seed in good shape for three or four years, sometimes five. Write the variety, the year, and where it grew. “Kentucky Wonder, 2027, east teepee, no beetle damage” is a better label than “beans.”
      </p>
      <GermTest />
      <h2>Sowing your own</h2>
      <p>
        Treat saved seed the way you treat packet seed. Same soil temperature, same depth, same refusal to sow into a cold May. If the germination test comes back tired, sow thicker and plan a fresh lot from the healthiest plants, not from the leftovers.
      </p>
      <Note title="What not to save">
        Seed from a diseased pod. Seed that still dents. Seed from a single plant, repeated for years. Seed stored above the stove. And seed of a runner bean, under the rules in this chapter — runners cross freely, and they are a different species with different manners.
      </Note>
      <p>
        When the jar is labeled, the book has done its loop. Next spring you are back at <Link to="/read/$chapter" params={{ chapter: "sowing" }}>sowing</Link>, with seed that already knows your garden.
      </p>
    </>
  );
}

function Troubles() {
  const [kind, setKind] = useState<TroubleKind | "All">("All");
  const rows = TROUBLES.filter((t) => kind === "All" || t.kind === kind);
  return (
    <>
      <p>
        Look at the soil temperature and the leaves before you look for a spray. Cold wet seed, overhead water at dusk, and a row that never dries are behind more lost beans than any insect. What follows is what you can see, and the first thing to do about it.
      </p>
      <div className="my-5 flex flex-wrap gap-2">
        {(["All", "Culture", "Insect", "Disease"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={
              "min-h-11 border px-3 text-sm transition-transform duration-150 active:scale-[0.96] " +
              (kind === k ? "border-leaf bg-leaf text-paper" : "border-line bg-sheet text-ink")
            }
          >
            {k}
          </button>
        ))}
      </div>
      <ul className="list-none space-y-4 pl-0">
        {rows.map((t) => (
          <li key={t.name} className="border border-line bg-sheet p-4">
            <p className="text-sm text-pod">{t.kind}</p>
            <h3 className="mt-1 font-display text-xl">{t.name}</h3>
            <p className="mt-2 leading-relaxed">{t.see}</p>
            <ul>
              {t.do.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export const BODIES: Record<string, () => ReactElement> = {
  "the-plant": ThePlant,
  habit: Habit,
  varieties: Varieties,
  ground: Ground,
  sowing: Sowing,
  care: Care,
  trellises: TrellisChapter,
  kitchen: Kitchen,
  seed: Seed,
  troubles: Troubles,
};
