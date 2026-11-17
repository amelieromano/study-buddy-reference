// Fake study buddies for tonight. On 3 Dec this file gets swapped for a real database.
import type { BlobColor, BlobEyes, BlobShape } from "@/components/BlobAvatar";

export type Buddy = {
  id: number;
  name: string;
  course: string;
  module: string;
  freeHours: string;
  blob: { shape: BlobShape; color: BlobColor; eyes: BlobEyes };
};

// Every course that gets a filter chip. Architecture has no one yet, so it shows the empty state.
export const courses = [
  "Economics",
  "Computer Science",
  "History",
  "Politics and Economics",
  "Psychology",
  "Law",
  "Architecture",
];

// All names are made up.
export const buddies: Buddy[] = [
  {
    id: 1,
    name: "Maya Okafor",
    course: "Economics",
    module: "Econometrics",
    freeHours: "Mon and Wed, 2–4pm",
    blob: { shape: "round", color: "tomato", eyes: "dots" },
  },
  {
    id: 2,
    name: "Leo Brennan",
    course: "Economics",
    module: "Intermediate Microeconomics",
    freeHours: "Fri mornings",
    blob: { shape: "cloud", color: "cobalt", eyes: "dots" },
  },
  {
    id: 3,
    name: "Aisha Rahman",
    course: "Computer Science",
    module: "Algorithms",
    freeHours: "Tue, 10am–1pm",
    blob: { shape: "arch", color: "bubblegum", eyes: "dots" },
  },
  {
    id: 4,
    name: "Tom Nguyen",
    course: "Computer Science",
    module: "Machine Learning",
    freeHours: "Weekday evenings",
    blob: { shape: "spiky", color: "tomato", eyes: "sleepy" },
  },
  {
    id: 5,
    name: "Sofia Marino",
    course: "History",
    module: "Modern British History",
    freeHours: "Thu after 3pm",
    blob: { shape: "round", color: "forest", eyes: "wide" },
  },
  {
    id: 6,
    name: "Dev Patel",
    course: "Politics and Economics",
    module: "Political Economy",
    freeHours: "Mon, 11am–2pm",
    blob: { shape: "star", color: "cobalt", eyes: "wide" },
  },
  {
    id: 7,
    name: "Hana Kim",
    course: "Psychology",
    module: "Cognitive Neuroscience",
    freeHours: "Wed and Fri, 1–3pm",
    blob: { shape: "flower", color: "bubblegum", eyes: "sleepy" },
  },
  {
    id: 8,
    name: "Jonah Ellis",
    course: "Law",
    module: "Contract Law",
    freeHours: "Sat afternoons",
    blob: { shape: "cloud", color: "tomato", eyes: "dots" },
  },
];
