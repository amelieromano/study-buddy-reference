// The Browse page: course chips at the top and a grid of study buddy cards from data.ts.
import BrowseBuddies from "@/components/BrowseBuddies";
import { buddies, courses } from "@/data";

export default function BrowsePage() {
  return (
    <section className="pt-6">
      <h1 className="font-display font-bold text-4xl sm:text-5xl">Browse buddies</h1>
      <p className="mt-2 text-lg">Pick a course to see who’s free.</p>
      <BrowseBuddies buddies={buddies} courses={courses} />
    </section>
  );
}
