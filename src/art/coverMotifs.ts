/**
 * Line drawings for case study covers (viewBox 0 0 320 240).
 * `ink` is the precise, ruled part; `accent` is the hand-drawn mark that redraws on hover.
 */
export interface CoverMotif {
  ink: string[];
  accent: string;
}

export const COVER_MOTIFS: Record<string, CoverMotif> = {
  // One notification, three honest variants underneath it; one confirmed.
  appointments: {
    ink: [
      "M72 46 H248 V122 H72 Z",
      "M92 70 H196",
      "M92 94 H164",
      "M160 122 C160 150 104 156 96 184",
      "M160 122 V184",
      "M160 122 C160 150 216 156 224 184",
      "M82 196 H110",
      "M146 196 H174",
      "M210 196 H238",
    ],
    accent: "M150 210 L158 218 L174 200",
  },
  // Steps in a row, and the path people actually took: forward, back, forward.
  questionnaires: {
    ink: ["M64 150 H256", "M64 142 V158", "M112 142 V158", "M160 142 V158", "M208 142 V158", "M256 142 V158"],
    accent: "M64 118 L208 118 L112 96 L256 96",
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
    accent: "M146 120 L156 129 L176 110",
  },
  // One task, three screens for three different people.
  dissertation: {
    ink: [
      "M52 70 H172 V156 H52 Z",
      "M92 156 V172 H132 V156",
      "M188 92 H248 V172 H188 Z",
      "M262 108 H290 V172 H262 Z",
    ],
    accent: "M52 196 H290",
  },
};
