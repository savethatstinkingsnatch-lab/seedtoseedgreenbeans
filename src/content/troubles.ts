export type TroubleKind = "Insect" | "Disease" | "Culture";

export type Trouble = {
  name: string;
  kind: TroubleKind;
  see: string;
  do: string[];
};

export const TROUBLES: Trouble[] = [
  {
    name: "Seed rots in the row",
    kind: "Culture",
    see: "Nothing comes up, or a few weak hooks. Seed is soft if you dig it.",
    do: [
      "The soil was cold or wet. Wait until it holds 60°F (16°C) at sowing depth for a few mornings.",
      "Do not soak seed when the soil is cool. Soaked seed rots faster.",
      "Re-sow. Beans are cheap enough that a second sowing is the fix.",
    ],
  },
  {
    name: "Blossom drop",
    kind: "Culture",
    see: "Flowers form and fall. Few pods. Plants otherwise look lush, especially if you fed them like tomatoes.",
    do: [
      "Heat above about 90°F (32°C), hot nights, or a dry spell at flowering will drop blossoms. Water the soil deeply and wait for a cooler week.",
      "Too much nitrogen grows leaves instead of pods. Stop feeding.",
      "Pole beans often pause in a heat wave and set again when nights ease. Bush beans may not get a second chance — that is what succession is for.",
    ],
  },
  {
    name: "Mexican bean beetle",
    kind: "Insect",
    see: "A copper ladybug with sixteen black spots, and yellow, spiny larvae. Leaves end up as lace. Pods get scarred.",
    do: [
      "Hand-pick adults, larvae, and the yellow egg clusters under the leaves. Do it every few days.",
      "Common beans do not need insects to set pods, so a row cover can stay on all season if you can pick under it.",
      "Pull and destroy heavily infested plants at the end of the year. Beetles overwinter in garden debris.",
    ],
  },
  {
    name: "Aphids",
    kind: "Insect",
    see: "Clusters of soft insects on new tips. Leaves curl. A sticky film, then ants.",
    do: [
      "A hard spray of water, repeated, knocks most of them off.",
      "They also carry mosaic virus. If leaves are puckered and mottled as well as infested, see mosaic — washing aphids will not undo a virus.",
    ],
  },
  {
    name: "Spider mites",
    kind: "Insect",
    see: "Hot, dry weather. Leaves look dusty and stippled, then bronze. Fine webbing on the undersides.",
    do: [
      "Water the soil so plants are not drought-stressed, and rinse the undersides of leaves in the morning.",
      "Mites like dust and heat. A mulch and a less dusty path help the next row more than a spray helps this one.",
    ],
  },
  {
    name: "Cutworms",
    kind: "Insect",
    see: "Seedlings clipped at the soil line overnight. The plant is lying there, otherwise perfect.",
    do: [
      "A collar — a toilet-paper tube or a strip of cardboard pressed an inch into the soil — around each seedling the day it emerges.",
      "Scratch the soil at the base in the morning. Cutworms curl up just under the surface.",
    ],
  },
  {
    name: "Anthracnose",
    kind: "Disease",
    see: "Dark, sunken spots on pods, often with a salmon-colored center in wet weather. Veins on the underside of leaves turn black.",
    do: [
      "It is seed-borne and splash-borne. Do not save seed from spotted pods, and do not work the plants while they are wet.",
      "Pull badly hit plants. Next year, widen the spacing and start with clean seed.",
    ],
  },
  {
    name: "Bacterial blight",
    kind: "Disease",
    see: "Water-soaked spots that turn brown and papery, often with a yellow halo. Pods look greasy.",
    do: [
      "Do not save seed. Do not overhead-water. Copper is sometimes used early, but the practical garden fix is clean seed and dry foliage.",
      "Three years before beans return to that bed, if you can spare the ground.",
    ],
  },
  {
    name: "Bean common mosaic",
    kind: "Disease",
    see: "Leaves mottled light and dark, puckered, sometimes narrower than they should be. Plants are stunted. Aphids moved it.",
    do: [
      "There is no cure in the plant. Pull it so aphids have one less source.",
      "Buy seed labeled mosaic-resistant the next time, and keep aphid numbers down.",
    ],
  },
  {
    name: "Rust",
    kind: "Disease",
    see: "Small rusty pustules on the underside of leaves, then yellowing and leaf drop. Worse in humid, crowded rows.",
    do: [
      "Pick off the first bad leaves. Water the soil, in the morning.",
      "Resistant varieties and more air — fewer plants, a stronger trellis — matter more than spraying.",
    ],
  },
  {
    name: "White mold",
    kind: "Disease",
    see: "Stems or pods collapse under a white cottony growth, sometimes with black hard grains inside it. Lush plants, wet flowers, still air.",
    do: [
      "Thin, trellis, and stop overhead water. Flowers that stay wet are the entry.",
      "The black grains live in soil for years. Do not compost those stems. Rotate.",
    ],
  },
  {
    name: "Tough, stringy pods",
    kind: "Culture",
    see: "The pod bends instead of snapping. Seeds inside are already round.",
    do: [
      "You waited. That pod is a shell bean now, not a snap. Eat it that way.",
      "Pick every other day once they start, and the next pods stay tender. Leaving mature pods tells the plant to stop flowering.",
    ],
  },
];
