// The course filter and the grid of buddy cards. Picking a chip updates the cards straight away.
"use client";

import { useState } from "react";
import BuddyCard from "@/components/BuddyCard";
import Doodle from "@/components/Doodle";
import type { Buddy } from "@/data";

const ALL = "All courses";

export default function BrowseBuddies({ buddies, courses }: { buddies: Buddy[]; courses: string[] }) {
  const [selected, setSelected] = useState(ALL);

  // The filter: keep everyone for "All courses", otherwise only buddies on the picked course.
  const shown = selected === ALL ? buddies : buddies.filter((buddy) => buddy.course === selected);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        {[ALL, ...courses].map((course) => (
          <button
            key={course}
            onClick={() => setSelected(course)}
            aria-pressed={selected === course}
            className={`rounded-full border-[3px] border-ink px-4 py-1.5 font-display font-semibold ${
              selected === course ? "bg-cobalt text-white" : "bg-paper hover:bg-cream"
            }`}
          >
            {course}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-8 grid grid-cols-3 gap-6">
          {shown.map((buddy) => (
            <BuddyCard key={buddy.id} buddy={buddy} />
          ))}
        </div>
      ) : (
        <div className="sticker-card mt-8 p-10 flex flex-col items-center text-center">
          <Doodle kind="loop" color="bubblegum" className="w-28" />
          <p className="mt-4 font-display font-semibold text-2xl">No one&apos;s free yet. Check back after lectures.</p>
        </div>
      )}
    </>
  );
}
