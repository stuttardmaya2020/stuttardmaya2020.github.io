/**
 * Line drawings for case study covers (viewBox 0 0 320 240).
 * `ink` is the precise, ruled part; `accent` is the hand-drawn mark that redraws on hover.
 */
export interface CoverMotif {
  ink: string[];
  accent: string;
}

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;

export const COVER_MOTIFS: Record<string, CoverMotif> = {
  // One notification, three honest variants underneath it.
  appointments: {
    ink: [
      "M72 46 H248 V122 H72 Z",
      "M92 70 H196",
      "M92 94 H164",
      "M160 122 C160 150 104 156 96 190",
      "M160 122 V190",
      "M160 122 C160 150 216 156 224 190",
      circle(96, 196, 6),
      circle(160, 196, 6),
      circle(224, 196, 6),
    ],
    accent: "M142 190 C140 172 178 170 182 190 C186 210 150 218 140 202 C134 192 146 180 162 180",
  },
  // Steps in a row, and the path people actually took through them.
  questionnaires: {
    ink: ["M64 150 H256", circle(64, 150, 7), circle(112, 150, 7), circle(160, 150, 7), circle(208, 150, 7), circle(256, 150, 7)],
    accent: "M64 150 C84 84 132 84 160 142 C178 180 104 196 112 150 C118 108 236 74 256 150",
  },
  // The calendar grid, crossed out.
  rescheduling: {
    ink: [
      "M80 56 H240 V192 H80 Z",
      "M80 86 H240",
      "M80 121 H240",
      "M80 156 H240",
      "M120 86 V192",
      "M160 86 V192",
      "M200 86 V192",
    ],
    accent: "M70 50 C120 96 182 150 252 200 M248 52 C196 92 132 148 68 198",
  },
  // Slots, one chosen.
  booking: {
    ink: [
      "M96 62 H224 A14 14 0 0 1 224 90 H96 A14 14 0 0 1 96 62 Z",
      "M96 106 H224 A14 14 0 0 1 224 134 H96 A14 14 0 0 1 96 106 Z",
      "M96 150 H224 A14 14 0 0 1 224 178 H96 A14 14 0 0 1 96 150 Z",
    ],
    accent: "M80 124 C72 100 130 96 176 98 C236 100 256 108 252 124 C248 144 186 146 124 144 C92 143 74 138 82 116",
  },
  // Watching how people use things.
  dissertation: {
    ink: ["M60 120 C112 58 208 58 260 120 C208 182 112 182 60 120 Z", circle(160, 120, 26)],
    accent: "M160 120 C170 112 178 124 168 132 C154 142 140 124 150 110 C162 94 190 106 188 128 C186 150 156 160 138 146",
  },
};
